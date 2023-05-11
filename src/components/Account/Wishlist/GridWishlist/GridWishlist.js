import * as styles from "./GridWishlist.module.scss";
import Link from "next/link";
import { map } from "lodash";
import { Label, WishlistIcon } from "@/components/Shared";
import { fn } from "@/utils";

export function GridWishlist(props) {
  const { wishlist, onReload } = props;
  return (
    <div className={styles.gridProducts}>
      {map(wishlist, (item) => {
        const product = item.attributes.product.data;
        const image = product.attributes.image.data.attributes;
        console.log(product);
        return (
          <div key={item.id} className={styles.product}>
            <Link href={`${product.attributes.slug}`}>
              {product.attributes.discount > 0 && (
                <Label.Discount className={styles.discount}>
                  {`-${product.attributes.discount}%`}
                </Label.Discount>
              )}
              <div>
                <img src={image.url} className={styles.image} />
              </div>
              <div className={styles.info}>
                <span>{product.attributes.title}</span>
                <span className={styles.price}>
                  {fn.calcDiscountedPrice(
                    product.attributes.prize,
                    product.attributes.discount
                  )}
                  €
                </span>
              </div>
            </Link>
            <WishlistIcon
              productId={product.id}
              className={styles.wishlistIcon}
              removeCallback={onReload}
            />
          </div>
        );
      })}
    </div>
  );
}
