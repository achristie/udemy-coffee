import { useRouter } from "next/router";

export default function Slug({ props }) {
  const {
    query: { slug },
  } = useRouter();
  console.log(slug);
  return <h1>Rendered page: {slug}</h1>;
}
