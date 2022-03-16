import { GetServerSideProps } from "next";
import { client } from "lib/microcms-client";

type Images = {
  fieldId: string;
  image: {
    url: string;
    height: number;
    width: number;
  };
  priority: boolean;
}[];

type Data = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  images: Images;
};

const Home = () => {
  return "";
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const data: Data = await client.get({ endpoint: "random-image" });
  const priorityImages = data.images.filter((image) => image.priority);
  const createRedirectPath = (array: Images) => {
    const randomNumber = Math.floor(Math.random() * array.length);
    return array[randomNumber].image.url;
  };

  return {
    redirect: {
      statusCode: 301,
      destination: createRedirectPath(priorityImages.length === 0 ? data.images : priorityImages), // リダイレクト先
    },
  };
};
