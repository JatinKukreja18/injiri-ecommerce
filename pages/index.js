import React from 'react';
import Head from 'next/head';
import Layout from '../components/layouts/Layout';
import { useQuery } from '@apollo/react-hooks';
import JOBS_QUERY from '../graphql/jobs.query';
import PRODUCTS_QUERY from "../graphql/products.query";
import Hero from '../components/home/Hero';
import ProductsList from '../components/home/ProductsList';
import Login from './login';

// const Home = () => {
//   // Create a query hook
//   // const { data, loading, error } = useQuery(JOBS_QUERY);

//   const { data, loading, error } = useQuery(PRODUCTS_QUERY);
//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {JSON.stringify(error)}</p>;
//   }

//   return (
//     <div>
//       <Head>
//         <title>Home</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <ul>
//         {data.products.nodes.map(job => {
//           return <li key={`job__${job.id}`}>{job.name}</li>;
//         })}
//       </ul>
//       {/* <ul>
//         {data1.jobs.map(job => {
//           return <li key={`job__${job.id}`}>{job.title}</li>;
//         })}
//       </ul> */}
//     </div>
//   );
// };

// export default Home;

const Index = ( props ) => {

	const { products, featuredProducts } = props;
	console.log(featuredProducts);
  const { data, loading, error } = useQuery(PRODUCTS_QUERY);
    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>Error: {JSON.stringify(error)}</p>;
    }
  console.log({data});
  
	return (
		<Layout>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
			{/* <Hero products={data.products.nodes}/> */}
			{/*<Categories/>*/}

			{data ? <ProductsList products={ data.products.nodes } />: ''}
		</Layout>
	);
};



export default Index;
