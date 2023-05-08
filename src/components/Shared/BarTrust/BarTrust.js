import * as styles from "./BarTrust.module.scss";
import { map } from "lodash";
import { data } from "./BarTrust.data";
import { Container, Icon } from "semantic-ui-react";

export function BarTrust() {
  return (
    <div className={styles.barTrust}>
      <Container className={styles.content}>
        {map(data, (item) => (
          <div className={styles.item}>
            <Icon name={item.icon} />
            <div className={styles.text}>
              <span className={styles.title}>{item.title}</span>
              <span className={styles.description}>{item.description}</span>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
}
