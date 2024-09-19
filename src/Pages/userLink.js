import React, { useCallback, useEffect, useState, lazy, Suspense, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

// Lazy load components
const Page1 = lazy(() => import('../Component/UserLink/Page1'));
const NoUserFound = lazy(() => import('../Component/NoUser'));
const NoDataFound = lazy(() => import('../Component/NoData'));
const Loading = lazy(() => import('../Component/Loading'));

const UserLink = () => {
  const { username } = useParams();
  const [data2, setData2] = useState([]);
  const [pauseLink, setpauseLink] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const getData2 = useCallback(() => {
    setLoading(true);
    axios.post('https://lolcards.link/api/user/found', { username: username })
      .then((res) => {
        const { selectedCardTitle, pauseLink } = res.data.data;

        if (Array.isArray(selectedCardTitle) && selectedCardTitle.length > 0) {
          setData2(selectedCardTitle);
          setpauseLink(pauseLink);
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
