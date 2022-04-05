import Link from "next/link";
import { useRouter } from "next/router";
import data from "../../data/coffee-stores.json";

export function getStaticProps({ params }) {
  console.log(params, data);
  return {
    props: {
      coffeeStore: data.find((cs) => cs.id == params.id),
    },
  };
}

export function getStaticPaths() {
  return {
    paths: [{ params: { id: "0" } }, { params: { id: "1" } }],
    fallback: false,
  };
}

const CoffeeStore = ({ coffeeStore }) => {
  const router = useRouter();
  return (
    <div>
      Coffee Store Page {router.query.id}
      <Link href="/">
        <a>Back Home</a>
      </Link>
      <Link href="coffe-store/dynamic/">
        <a>Dynamic page</a>
      </Link>
      <p>{coffeeStore.name}</p>
      <p>{coffeeStore.address}</p>
    </div>
  );
};

export default CoffeeStore;
