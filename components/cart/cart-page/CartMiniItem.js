import { useState } from 'react';
import { updateCart } from "../../../util/cart-functions";
import { Skeleton, Switch, Card } from 'antd';
const { Meta } = Card;
import { List, Avatar, Icon } from 'antd';


const CartMiniItem = ( { item, handleRemoveProductClick, setCart } ) => {

	const [ productCount, setProductCount ] = useState( item.qty );

	/*
	 * When user changes the qty from product input update the cart in localStorage
	 * Also update the cart in global context
	 *
	 * @param {Object} event event
	 *
	 * @return {void}
	 */
	const handleQtyChange = ( event ) => {

		if ( process.browser ) {

			const newQty = event.target.value;

			// Set the new qty in State
			setProductCount( newQty );

			let existingCart = localStorage.getItem( 'wpd-cart' );
			existingCart = JSON.parse( existingCart );

			// Update the cart in localStorage.
			const updatedCart = updateCart( existingCart, item, false, newQty );

			// Update the cart in global context
			setCart( updatedCart );

		}
	};

	return (
		// <tr className="wd-cart-item" key={item.productId}>
		// 	<th className="wd-cart-element wd-cart-el-close">
		// 		<span className="wd-cart-close-icon" onClick={ ( event ) => handleRemoveProductClick( event, item.productId )  }>
		// 			<i className="fas fa-times-circle"/>
		// 		</span>
		// 	</th>
		// 	<td className="wd-cart-element">
		// 		{item && item.image  && <img width="64" src={ item.image.sourceUrl } srcSet={ item.image.srcSet } alt={item.image.title}/>}
		// 	</td>
		// 	<td className="wd-cart-element">{ item.name }</td>
		// 	{/* <td className="wd-cart-element">${ item.price.toFixed(2) }</td> */}
		// 	<td className="wd-cart-element">${ item.price}</td>

		// 	{/* Qty Input */}
		// 	<td className="wd-cart-element">
		// 		<input
		// 			type="number"
		// 			min="1"
		// 			className="wd-cart-qty-input"
		// 			value={ productCount }
		// 			onChange={ handleQtyChange }
		// 		/>
		// 	</td>
		// 	<td className="wd-cart-element">{ item.totalPrice.toFixed(2) }</td>
        // </tr>
        <List.Item
        key={item.title}
        actions={[
          <IconText type="star-o" text="156" key="list-vertical-star-o" />,
          <IconText type="like-o" text="156" key="list-vertical-like-o" />,
          <IconText type="message" text="2" key="list-vertical-message" />,
        ]}
        extra={
          <img
            width={272}
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
        }
      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<a href={item.href}>{item.title}</a>}
          description={item.description}
        />
        {item.content}
      </List.Item>
	)
};

export default CartMiniItem;
