import { GetServerSideProps } from 'next';
import { client } from 'lib/microcms-client';

const Home = () => {
  return '';
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await client.get({ endpoint: 'image' });
  const randomNumber = Math.floor(Math.random() * data.contents.length);

  return {
    redirect: {
      permanent: false, // 永続的なリダイレクトかどうか
      destination: data.contents[randomNumber].image.url, // リダイレクト先
    },
  };
};