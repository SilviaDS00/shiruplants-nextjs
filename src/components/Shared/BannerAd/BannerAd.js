import * as styles from "./BannerAd.module.scss";
import { Button, Container, Image } from "semantic-ui-react";
import Link from "next/link";

export function BannerAd(props) {
  const { title, image } = props;
  return (
    <div className={styles.container}>
      <Container className={styles.containerImage}>
        <Link href="/account">
          <Image src={image} alt={title} />
        </Link>
      </Container>
    </div>
  );
}
