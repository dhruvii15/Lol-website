import React, { useCallback, useEffect, useState, lazy, Suspense, useMemo } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { logEvent } from 'firebase/analytics';
import { analytics } from '../Component/firebase-config';
import {
  Modal,
  ModalBody,
  Button,
} from 'reactstrap';


import policy from "../img/policyPOPUP.svg";

// Lazy load components
const Page1 = lazy(() => import('../Component/UserLink/Page1'));
const NoUserFound = lazy(() => import('../Component/NoUser'));
const NoDataFound = lazy(() => import('../Component/NoData'));
const Loading = lazy(() => import('../Component/Loading'));

const UserLink = () => {
  const location = useLocation();
  const { username } = useParams();
  const [data2, setData2] = useState([]);
  const [pauseLink, setPauseLink] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showLocationPopup, setShowLocationPopup] = useState(false);

  const getData2 = useCallback(() => {
    setLoading(true);
    axios.post('https://lolcards.link/api/user/found', { username })
      .then((res) => {
        const { selectedCardTitle, pauseLink } = res.data.data;

        if (Array.isArray(selectedCardTitle) && selectedCardTitle.length > 0) {
          setData2(selectedCardTitle);
          setPauseLink(pauseLink);
          setError(false);
        } else {
          setData2([]);
          setError(true);
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to fetch data.");
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [username]);

  useEffect(() => {
    getData2();
    document.title = username ? `@${username}` : 'LOL';

    // Check if the location popup has been shown before
    const hasSeenLocationPopup = localStorage.getItem('hasSeenLocationPopup');
    if (!hasSeenLocationPopup) {
      setShowLocationPopup(true);
    }
  }, [getData2, username]);

  // Existing tracking code...
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const isFromSnapAd = queryParams.get('sc_referrer') === 'snapchat';

    if (window.snaptr) {
      window.snaptr('track', 'VIEW_CONTENT', {
        'page_name': 'user_link',
        'page_url': `https://lolcards.link/${username}`,
        'sc_referrer': isFromSnapAd ? 'snapchat' : 'other'
      });
    }

    if (window.fbq) {
      window.fbq('track', 'ViewContent', {
        content_name: 'user_link',
        content_category: 'UserProfile',
        content_ids: [username],
        content_type: 'product',
      });
    }

    logEvent(analytics, 'view_content', {
      page_title: 'user_link',
      page_location: window.location.href,
      page_path: window.location.pathname
    });
  }, [username, location.search]);

  // Memoized derived state
  const memoizedData2 = useMemo(() => data2, [data2]);

  const handleAcceptLocation = () => {
    localStorage.setItem('hasSeenLocationPopup', 'true');
    setShowLocationPopup(false);
    // Here you would typically call a function to get and store the user's location
    // For example: getUserLocation();
  };

  if (loading) {
    return (
      <Suspense fallback={<div><Loading /></div>}>
        <Loading />
      </Suspense>
    );
  }

  if (error) {
    return (
      <Suspense fallback={<div><Loading /></div>}>
        <NoUserFound />
      </Suspense>
    );
  }

  if (pauseLink) {
    return (
      <Suspense fallback={<div><Loading /></div>}>
        <NoDataFound style={{ height: '100vh' }} />
      </Suspense>
    );
  }

  return (
    <Suspense fallback={<div><Loading /></div>}>
      {memoizedData2.length === 0 ? (
        <NoUserFound />
      ) : (
        <>
          <Page1 username={username} data={memoizedData2} />
          <Modal centered isOpen={showLocationPopup} backdrop="static" keyboard={false} className='mx-5 mx-sm-auto'>
            <ModalBody className='px-3 shadow text-center'>
              <img src={policy} alt="policy" className='img-fluid py-3' width={55} />
              <h4 className='fw-bold pb-3'>We Value Your Privacy</h4>
              <p>We take your location information for LOL App premium users.</p>
              <div className='w-100 text-center'>
                <Button onClick={handleAcceptLocation} className='bg-transparent border-0 px-5 rounded-pill text-white orange-bg'>OK</Button></div>

              <p
                className='text-center cursor pt-4 m-0 text-decoration-underline'
                style={{ fontSize: "13px", color: "#FA5153" }}
                onClick={() => window.open("/privacy-policy", "_blank")}
              >
                Privacy Policy
              </p>

            </ModalBody>
          </Modal>
        </>
      )}
    </Suspense>
  );
};

export default UserLink;