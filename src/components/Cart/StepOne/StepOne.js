import { Basket } from "./Basket";
import { Resume } from "./Resume";
import styles from "./StepOne.module.scss";

export function StepOne(props) {
  const { products } = props;
  console.log(products);
  return (
    <div className={styles.stepOne}>
      <div className={styles.center}>
        <Basket products={products} />
      </div>
      <div className={styles.right}>
        <Resume products={products} />
      </div>
    </div>
  );
}
