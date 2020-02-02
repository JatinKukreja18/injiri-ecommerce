import gql from 'graphql-tag';

/**
 * Update Customer Address to deliver product.
 */

const UPDATE_CUSTOMER_ADDRESS = gql`
mutation CustomerAddressUpdate( $id : String! $nicename: String! $displayName : String!){
    updateCustomer(input: { clientMutationId: "7542test", 
    id: $id , 
    nicename: $nicename, 
    displayName: $displayName}) {
        customer {
          displayName
          modified
          username
        }
      }
}`

export default UPDATE_CUSTOMER_ADDRESS;
