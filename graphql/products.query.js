import gql from 'graphql-tag';

const PRODUCTS_QUERY = gql`
query {
  products(first: 50) {
    nodes {
      id
      productId
      averageRating
      slug
      description
      image {
        uri
        title
        srcSet
        sourceUrl
      }
      name
    }
  }
}
`;

export default PRODUCTS_QUERY;
