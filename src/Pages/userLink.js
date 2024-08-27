import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Page1 from '../Component/UserLink/Page1';
import axios from 'axios';
import { toast } from 'react-toastify';
import NoUserFound from '../Component/NoUser';

const UserLink = () => {
  const { username } = useParams();
  const [data2, setData2] = useState([]);
  const [error, setError] = useState(false);

  const getData2 = useCallback(() => {
    axios.post('https://lolcards.link/api/findTitle', { username: username })
      .then((res) => {
        const { selectedCardTitle} = res.data.data;

        if (Array.isArray(selectedCardTitle) && selectedCardTitle.length > 0) {
          setData2(selectedCardTitle);
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
  }, [username]);


  useEffect(() => {
    getData2();
    document.title = username ? `@${username}` : 'LOL';
  }, [getData2, username]);

  return (
    <div>
      {error || data2.length === 0 ? (
        <NoUserFound />
      ) : (
        <Page1 username={username} />
      )}
    </div>
  );
};

export default UserLink;
