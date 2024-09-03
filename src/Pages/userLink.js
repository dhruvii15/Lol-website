import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Page1 from '../Component/UserLink/Page1';
import axios from 'axios';
import { toast } from 'react-toastify';
import NoUserFound from '../Component/NoUser';
import NoDataFound from '../Component/NoData';
import Loading from '../Component/Loading';

const UserLink = () => {
  const { username } = useParams();
  const [data2, setData2] = useState([]);
  const [linkStatus, setlinkStatus] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const getData2 = useCallback(() => {
    setLoading(true);
    axios.post('https://lolcards.link/api/findTitle', { username: username })
      .then((res) => {
        const { selectedCardTitle, linkStatus } = res.data.data;

        if (Array.isArray(selectedCardTitle) && selectedCardTitle.length > 0) {
          setData2(selectedCardTitle);
          setlinkStatus(linkStatus);
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

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <NoUserFound />;
  }

  if (linkStatus) {
    return <NoDataFound style={{ height: '100vh' }}/>;
  }

  return (
    <div>
      {data2.length === 0 ? (
        <NoUserFound />
      ) : (
        <Page1 username={username} data={data2} />
      )}
    </div>
  );
};

export default UserLink;
