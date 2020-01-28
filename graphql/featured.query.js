import gql from 'graphql-tag';

const FEATURED_QUERY = gql`
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

export default FEATURED_QUERY;
