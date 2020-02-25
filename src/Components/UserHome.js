import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useGlobalState } from '../state';

const UserHome = () => {
  const [globalUsername, setGlobalUsername] = useGlobalState('username');

  return (
    <>
      <div className="UserHome">
        <h1 className="UserHomeH1">Welcome to Jobble, {globalUsername}!</h1>
        <div className="UserHomeButtons">
          <Button color="primary" component={Link} to="/review">
            View New Jobs
          </Button>
          <Button color="primary" component={Link} to="/savedjobs">
            View My Saved Jobs
          </Button>
          <Button color="primary" component={Link} to="/goodbye">
            Delete my Jobble account
          </Button>
        </div>
      </div>
    </>
  );
};

export default UserHome;
