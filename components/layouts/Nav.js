
import { Menu , Dropdown, Icon } from 'antd';
import "antd/dist/antd.css";
import CartIcon from "../cart/CartIcon";
import NextMenu from "./Menu";
import './nav.css';
import Link from 'next/link';
import { useContext, useState } from 'react';
import { AppContext } from "./../context/AppContext";
import CartMini from "../cart/cart-page/CartMini";



  
const Nav = (props) => {
	const menu = (
		<Menu>
			{/* {cartList.map( (item, index) => 
				(<Menu.Item key ={index}>
					{item.name}
				</Menu.Item>))} */}
				<CartMini/>
		  {/* <Menu.Item>
			<button>Proceed to checkout</button>
		  </Menu.Item> */}
		</Menu>
	  );
	return (

		<header className={ props.scrolled ? 'i-header scrolled ' + props.scrollDirection :'i-header'}>
			<div className="i-wrapper flex jsb w-100">
				<Link href="/">
					<div className="logoContainer">
						<a  className="custom-logo-link ">
							<img src="../../public/images/logo-black.png" alt=""/>
						</a>
					</div>
				</Link>
				<nav className="i-header-options">
				<NextMenu/>
				{/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
						aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
				</button> */}

				{/* <div className="collapse navbar-collapse" id="navbarColor01">

				</div> */}
				<div className="cart">

					<CartIcon />
					<Dropdown overlay={menu}>
    <a className="ant-dropdown-link" >
     Mini Cart <Icon type="down" />
    </a>
  </Dropdown>
				</div>
				</nav>
			</div>
		</header>
	)
};

export default Nav;
