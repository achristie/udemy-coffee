import Head from "next/head";
import Image from "next/image";
import Banner from "../components/banner";
import Card from "../components/card";
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
      <div className="card-layout">
        <Card
          className="card"
          name="Coffee"
          imgUrl="/static/hero.png"
          href="/coffee-store/cofeee"
        />
        <Card
          className="card"
          name="Coffee"
          imgUrl="/static/hero.png"
          href="/coffee-store/cofeee"
        />
      </div>
      <Banner handleClick={handleClick} />
    </>
  );
}
