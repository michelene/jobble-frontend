import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import { APIURL } from '../config';
import JobContainer from './JobContainer';

const SavedJobs = props => {
  const [savedjobs, setSavedJobs] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    // const url = `${APIURL}/users/saved/:userID`;
    const url = `${APIURL}/jobs`;
    fetch(url)
      .then(response => response.json())
      .then(savedjobs => {
        setSavedJobs(savedjobs);
      })
      .catch(error => {
        console.log('Error: ', error);
        // Update the state if there was an error
        // so we can give feedback to the user!
        setError(true);
      });
  }, []);

  // Check if we have our jobs
  // Display "Loading..." if not
  if (savedjobs.length === 0) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Sorry, there was a problem.</div>;
  }

  return (
    <ul>
      {savedjobs.map(job => (
        <li className="JobLists" key={job._id}>
          <Link to={`jobs/${job._id}`}>
            <Route
              exact
              path={'/jobs/:id'}
              render={props => {
                return <JobContainer match={props.match} />;
              }}
            />
            {job.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SavedJobs;
