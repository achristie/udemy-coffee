import Head from "next/head";
import Image from "next/image";
import Banner from "../components/banner";
export default function Home() {
  const handleClick = () => {
    alert("clicked");
  };
  return (
    <>
      <Head>
        <title>AWC</title>
      </Head>
      <Image src="/static/hero.png" width={196} height={196} />
      <Banner handleClick={handleClick} />;
    </>
  );
}
