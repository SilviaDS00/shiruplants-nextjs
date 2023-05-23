import { Icon, Image, Dropdown } from "semantic-ui-react";
import { map } from "lodash";
import { fn } from "@/utils";
import { useCart } from "@/hooks";
import styles from "./Basket.module.scss";

export function Basket(props) {
  const { products } = props;
  const { changeQuantityItem, deleteItem } = useCart();

  const options = Array.from({ length: 50 }, (_, index) => {
    const number = index + 1;
    return { key: number, text: String(number), value: number };
  });

  return (
    <div className={styles.basket}>
      <h2>Cesta</h2>

      <div className={styles.block}>
        {map(products, (product) => (
          <div key={product.id} className={styles.product}>
            <Image
              src={product.attributes.image.data.attributes.url}
              className={styles.image}
            />
            <div>
              <div className={styles.info}>
                <div>
                  <p>{product.attributes.title}</p>
                  <p>{product.attributes.category.data.attributes.title}</p>
                </div>

                <Icon
                  name="trash alternate online"
                  link
                  onClick={() => deleteItem(product.id)}
                />
              </div>

              <div className={styles.quantity}>
                <Dropdown
                  className="number"
                  options={options}
                  selection
                  value={product.quantity}
                  compact
                  onChange={(_, data) =>
                    changeQuantityItem(product.id, data.value)
                  }
                />
                <span>
                  {fn.calcDiscountedPrice(
                    product.attributes.prize,
                    product.attributes.discount
                  )}
                  €
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
