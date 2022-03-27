import Image from "next/image";
import Link from "next/link";
import styles from "./card.module.css";

export default function Card({ name, href, imgUrl }) {
  return (
    <Link href={href}>
      <div className={styles.card}>
        <a>
          <h2>{name}</h2>
          <Image src={imgUrl} width={260} height={160} />
        </a>
      </div>
    </Link>
  );
}
