import React, { useState } from 'react';
import jobblejobble from '../images/jobblejobble.mp4';
import { useGlobalState } from '../state';
import { APIURL } from '../config';

const Goodbye = props => {
  const [deleted, setDeleted] = useState(false);
  const [error, setError] = useState(false);

  const [globalUserID, setGlobalUserID] = useGlobalState('userID');
  const [globalUsername, setGlobalUsername] = useGlobalState('username');

  // I know this is super-hacky, and I'll be separating out this logic from the Goodbye page later...
  const url = `${APIURL}/users/delete`;

  fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      userID: globalUserID
    }
  })
    .then(response => response.json())
    // We're going to update state so there's a re-render
    // By setting updated to true, we use this value to
    // render a Redirect component from react-router-dom
    // and take the user back to the "show" route which will
    // display the newly updated user.
    .then(() => {
      setDeleted(true);
      setGlobalUserID(null);
      setGlobalUsername('');
    })
    .catch(() => {
      // Update the state if there was an error
      // so we can give feedback to the user!
      setError(true);
    });

  return (
    <>
      <div className="Goodbye">
        <h2 className="title">I hope you found your job, {globalUsername}</h2>
        <h3 className="title">Jobble Jobble</h3>
        <div className="animationContainer">
          <video className="animation" loop autoPlay>
            <source src={jobblejobble} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};

export default Goodbye;
