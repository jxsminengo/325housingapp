import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import SearchBar from "../components/SearchBar";

import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>RateMyHousing</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchBar />
    </>
  );
};

export default Home;
