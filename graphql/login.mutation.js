import gql from 'graphql-tag';

const LOGIN_USER = gql`
mutation LoginUser( $username: String! $password: String! ) {
    login( input: {
      clientMutationId: "uniqueId"
      username: $username
      password: $password
    }) {
      authToken
      user {
        id
        userId
        name
        email
		firstName
      }
    }
  }
`;

export default LOGIN_USER;
