import React from 'react';
import TextField from '@material-ui/core/TextField';

const UserForm = ({ user, handleSubmit, handleChange }) => (
  <form onSubmit={handleSubmit} className="form">
    <div className="typefields">
      <label htmlFor="title">Username:</label>
      <div>
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          username="UserForm"
          style={{ width: '60%' }}
          value={user.username}
          name="username"
          onChange={handleChange}
          required
        />
      </div>
      <br />
    </div>
    <div className="typefields">
      <label htmlFor="password">Password:</label>
      <div>
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          className="UserForm"
          style={{ width: '60%' }}
          value={user.password}
          name="password"
          onChange={handleChange}
        />

        <br />
      </div>

      <button className="userButton" type="submit">
        Submit
      </button>
    </div>
  </form>
);

export default UserForm;
