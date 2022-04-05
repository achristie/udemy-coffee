import Head from "next/head";
import Image from "next/image";
import Banner from "../components/banner";
import Card from "../components/card";
import data from "../data/coffee-stores.json";

export async function getStaticProps(context) {
  return {
    props: {
      coffeeStores: data,
    },
  };
}
export default function Home({ coffeeStores }) {
  const handleClick = () => {
    alert("clicked");
  };
  return (
    <>
      <Head>
        <title>AWC</title>
      </Head>
      <Image src="/static/hero.png" width={196} height={196} />
      {coffeeStores.length > 0 && <h2>Toronto Stores</h2>}
      <div className="card-layout">
        {coffeeStores?.map((cs) => {
          return (
            <Card
              key={cs.id}
              name={cs.name}
              imgUrl={cs.imgUrl}
              href={cs.websiteUrl}
            />
          );
        })}
      </div>
      <Banner handleClick={handleClick} />
    </>
  );
}
