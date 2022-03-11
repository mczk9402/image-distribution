import { GetServerSideProps } from 'next';
import { client } from 'lib/microcms-client';

const Home = () => {
  return '';
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await client.get({ endpoint: 'random-image' });
  const randomNumber = Math.floor(Math.random() * data.images.length);
  const redirectPath = data.images[randomNumber].image.url;

  return {
    redirect: {
      statusCode: 301,
      destination: redirectPath, // リダイレクト先
    },
  };
};
