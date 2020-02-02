import Link from "next/link";
import { isUserValidated, logoutUser } from "../../util/auth-functions";
import { useEffect, useState } from 'react';
import isEmpty from "../../validator/isEmpty";

const NextMenu = () => {

	const [ loggedIn, setLoggedIn ] = useState( false );


	const handleLogout = () => {

		if ( process.browser ) {

			logoutUser( '/login' );
		}

	};

	useEffect( () => {

		if ( process.browser ) {

			const userValidated = isUserValidated();

			// If user is not validated, then logout button should be shown.
			if ( ! isEmpty( userValidated ) ) {
				setLoggedIn( true );
			}
		}
	} );

	return (
		<ul className="i-main-nav">
			<li className="i-main-nav__list">
				<Link href="/login"><a className="i-main-nav__link">Login</a></Link>
			</li>
			<li className="i-main-nav__list">
				<Link href="/register"><a className="i-main-nav__link">Register</a></Link>
			</li>
			<li className="wpd-main-nav__list">
				<Link href="/my-account"><a className="wpd-main-nav__link">MyAccount</a></Link>
			</li>
			{ loggedIn ? (
				<li className="i-main-nav__list">
					<a className="i-main-nav__link" onClick={ handleLogout }>Logout</a>
				</li>
			) : '' }
		</ul>
	)
};

export default NextMenu;
