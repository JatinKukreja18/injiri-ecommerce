import Layout from '../components/layouts/Layout';
import { useState } from 'react';
import LOGIN_USER from '../graphql/login.mutation';
import { useMutation } from '@apollo/react-hooks';
import MessageAlert from '../components/message-alert/MessageAlert';
import config from '../client-config';
import Router from 'next/router';
import { isUserValidated } from '../util/auth-functions';
import isEmpty from '../validator/isEmpty';
// import Link from 'next/link';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [errorMessage, setErrorMessage] = useState('');
  const [showAlertBar, setShowAlertBar] = useState(true);

  const [login, { data, error }] = useMutation(LOGIN_USER);

  // Check if the user is validated already.
	if (process.browser) {

		const userValidated = isUserValidated();

		// If user is already validated, redirect user to My Account page.
		if (!isEmpty(userValidated)) {
			Router.push('/my-account')
		}

    }
    
  /**
   * Hide the Status bar on cross button click.
   *
   * @return {void}
   */
  const onCloseButtonClick = () => {
    setShowAlertBar(false);
    setErrorMessage('');
  };

  	/**
	 * Handle Login success.
	 *
	 * @param {Object} response Response received
	 *
	 * @return {void}
	 */
	const handleLoginSuccess = (response) => {

		if (response.login.authToken) {

			// Set the authtoken, user id and username in the localStorage.
			localStorage.setItem(config.authTokenName, JSON.stringify(response.login));
      localStorage.setItem(config.userDetails, JSON.stringify(response.login.user))
			// Set form field vaues to empty.
			// setErrorMessage('');
			// setUsername('');
			// setPassword('');

			// Send the user to My Account page on successful login.
			Router.push('/my-account');

		}

	};

//   con    sole.log({error: error.graphQLErrors[0].message});
  
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
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
        {data ? handleLoginSuccess(data) : ''}
      </form>
    </div>
  );
};

export default Login;
