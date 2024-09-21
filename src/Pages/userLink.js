import React, { useCallback, useEffect, useState, lazy, Suspense, useMemo } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

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
  }, [getData2, username]);

  // Snap Pixel tracking for page view
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const isFromSnapAd = queryParams.get('sc_referrer') === 'snapchat';
    // const isFromFacebookAd = queryParams.get('fbclid') !== null; // Check for Facebook Click ID
  
    // Snap Pixel tracking
    if (window.snaptr) {
      // console.log('Snaptr is available. Sending VIEW_CONTENT event...');
      window.snaptr('track', 'VIEW_CONTENT', {
        'page_name': 'user_link',
        'page_url': `https://lolcards.link/${username}`,
        'sc_referrer': isFromSnapAd ? 'snapchat' : 'other'
      });
    } else {
      // console.warn('Snap Pixel (snaptr) is not available.');
    }
  
    // Facebook Pixel tracking
    if (window.fbq) {
      // console.log('Facebook Pixel is available. Sending ViewContent event...');
      window.fbq('track', 'ViewContent', {
        content_name: 'user_link',
        content_category: 'UserProfile',
        content_ids: [username],
        content_type: 'product',
      });
    } else {
      // console.warn('Facebook Pixel (fbq) is not available.');
    }
  
  }, [username, location.search]);

  // Memoized derived state
  const memoizedData2 = useMemo(() => data2, [data2]);

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
        <Page1 username={username} data={memoizedData2} />
      )}
    </Suspense>
  );
};

export default UserLink;