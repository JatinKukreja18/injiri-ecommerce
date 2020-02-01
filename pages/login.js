import Layout from '../components/layouts/Layout';
import { useState } from 'react';
import LOGIN_USER from '../graphql/login.mutation';
import { useMutation } from '@apollo/react-hooks';
import MessageAlert from '../components/message-alert/MessageAlert';
// import config from '../client-config';
// import Router from 'next/router';
// import { isUserValidated } from '../utils/auth-functions';
// import isEmpty from '../validator/isEmpty';
// import Link from 'next/link';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [errorMessage, setErrorMessage] = useState('');
  const [showAlertBar, setShowAlertBar] = useState(true);

  const [login, { data, error }] = useMutation(LOGIN_USER);

  /**
   * Hide the Status bar on cross button click.
   *
   * @return {void}
   */
  const onCloseButtonClick = () => {
    setShowAlertBar(false);
    setErrorMessage('');
  };

//   con    sole.log({error: error.graphQLErrors[0].message});
  
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          console.log({ username, password });
          login({ variables: { username, password } });
        }}
      >
        <input
          type="text"
          className="form-control"
          id="username-or-email"
          placeholder="Enter username or email"
          value={username}
          onChange={event => setUsername(event.target.value)}
        />

        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />

        {/* Submit Button */}
        <div className="form-group">
          {/* <button className="btn btn-primary" disabled={loading ? 'disabled' : ''} type="submit">Login</button> */}
          <button className="btn btn-primary" type="submit">
            Login
          </button>
          {/* <Link href="/register"><a className="btn btn-secondary ml-2">Register</a></Link> */}
        </div>
        {error ? (
         showAlertBar && <MessageAlert message={error.graphQLErrors && error.graphQLErrors[0].message && error.graphQLErrors[0].message} success={false} onCloseButtonClick={onCloseButtonClick} />
        ) : (
          ''
        )}
      </form>
    </div>
  );
};

export default Login;
