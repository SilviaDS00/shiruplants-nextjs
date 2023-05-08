import Link from "next/link";
import { map } from "lodash";
import { fn } from "@/utils";
import { Label } from "@/components/Shared";
import styles from "./GridProducts.module.scss";

export function GridProducts(props) {
  const { products } = props;

  return (
    <div className={styles.gridProducts}>
      {map(products, (product) => (
        <Link
          key={product.id}
          href={`/${product.attributes.slug}`}
          className={styles.product}
        >
          <div>
            <img src={product.attributes.image.data.attributes.url} />
            {product.attributes.discount > 0 && (
              <Label.Discount className={styles.discount}>
                {`-${product.attributes.discount}%`}
              </Label.Discount>
            )}
          </div>
          <div>
            <span className={styles.title}>{product.attributes.title}</span>
            <span className={styles.price}>
              {fn.calcDiscountedPrice(
                product.attributes.prize,
                product.attributes.discount
              )}
              €
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
