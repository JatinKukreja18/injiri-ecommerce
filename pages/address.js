import Layout from "../components/layouts/Layout";
import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import MessageAlert from "../components/message-alert/MessageAlert";
import Loading from "../components/message-alert/Loading";
import Router from 'next/router';
import Billing from '../components/checkout/Billing';
// import validateAndSanitizeCheckoutForm from '../validator/checkout';
import UPDATE_CUSTOMER_ADDRESS from '../graphql/addressUpdate.mutation';



/**
 * Update Address Functional Component.
 *
 * @return {object} Update Address form.
 */

const Address =() => {

    const initialState = {
        input: {
            firstName: '',
            lastName: '',
            companyName: '',
            country: '',
            streetAddressOne: '',
            streetAddressTwo: '',
            city: '',
            county: '',
            postCode: '',
            phone: '',
            email: '',
            errors: null
        },
        error: '',
    }

    const updateReducer = (state, action) => {
      console.log({state, action});
        state.input  = {... state.input,[action.name]:action.value}

      return state;
    };

  const [state, dispatch] = React.useReducer(updateReducer, initialState);

  const [login, { data, error }] = useMutation(UPDATE_CUSTOMER_ADDRESS);



    /*
* Handle onchange input.
*
* @param {Object} event Event Object.
*
* @return {void}
*/
   const  handleOnChange = (event) => {
        // console.log(event.target.name, event.target.value);

        // this.setState({ input: { ...this.state.input, [event.target.name]: event.target.value } }, () => {
        //     console.log({ state: this.state });

        // })
        const eventValueObj = {name: event.target.name, value: event.target.value}

        dispatch(eventValueObj)
    };



	/*
	 * Handle form submit.
	 *
	 * @param {Object} event Event Object.
	 *
	 * @return {void}
	 */
    const handleFormSubmit = async (event, updateCustomer) => {
        // const result = validateAndSanitizeCheckoutForm(this.state.input);
        // if (!result.isValid) {
        // setInput({ ...input, errors: result.errors });

        // this.setState({input: this.state.input, error:result.errors})

        if (process.browser) {
            event.preventDefault();

            await updateCustomer({
                variables: {
                    id: "Y3VzdG9tZXI6MTI=",
                    nicename: "aryanCool",
                    displayName: "aryanCOol",
                }
            })
                .then(response => console.log({ response }))
                .catch(err => console.log({ err }));
            }

    }
    // };

    // const handleFormSubmit = e => {
    //     e.preventDefault();

    // }


        return (
                <Layout>
                        {/*Billing Details*/}
                            <form onSubmit={e => this.handleFormSubmit(e)} className="wd-checkout-form">
                                <Billing input={state.input} handleOnChange={handleOnChange} usedIn={'customer_address'} />
                                <div className="wd-place-order-btn-wrap mt-5">
                                    <button className="btn wd-large-black-btn wd-place-order-btn" type="submit">
                                        Save
								</button>
                                </div>
                            </form>

                </Layout>
        )

}

export default Address;