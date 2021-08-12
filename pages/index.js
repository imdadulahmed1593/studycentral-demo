import Head from "next/head";
import Banner from "../components/Banner";
import BannerInfo from "../components/BannerInfo";
import Header from "../components/Header";
import Program from "../components/Program";

export default function Home({ members }) {
  return (
    <div className="">
      <Head>
        <title>StudyCentral</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="bg-[#F4F4F4] h-screen">
        <Banner />

        <section className="flex justify-between max-w-screen-2xl w-full mx-auto px-10 ">
          <BannerInfo members={members} />
          <Program />
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://randomuser.me/api/?results=5");
  const members = await res.json();

  return {
    props: {
      members,
    },
  };
}
