import * as styles from "./Info.module.scss";
import { Container } from "semantic-ui-react";

export function Info(props) {
  const { product } = props;
  return (
    <Container className={styles.info}>
      <h2>Descripción</h2>
      <div className={styles.summary}>
        <p>{product.summary}</p>
      </div>
    </Container>
  );
}
