import * as styles from "./Panel.module.scss";
import { Button, Icon, Container, Image } from "semantic-ui-react";
import { fn } from "@/utils";
import { WishlistIcon } from "@/components/Shared";

export function Panel(props) {
  const { productId, product } = props;
  const category = product.attributes.category.data;

  const buyPrice = fn.calcDiscountedPrice(
    product.attributes.prize,
    product.attributes.discount
  );

  return (
    <Container className={styles.panel}>
      <div className={styles.imgContainer}>
        <Image
          src={product.attributes.image.data.attributes.url}
          size="medium"
        />
      </div>
      <div className={styles.actionsContainer}>
        <div className={styles.titleContainer}>
          <h2>{product.attributes.title}</h2>

          <div className={styles.moreInfo}>
            <span className={styles.category}>{category.attributes.title}</span>
            <span className={styles.stock}>
              <Icon name="check" /> En stock
            </span>
          </div>

          <div className={styles.price}>
            {product.attributes.discount > 0 && (
              <>
                <span className={styles.originalPrice}>
                  <Icon name="tag" />
                  {product.attributes.prize} €
                </span>
                <span className={styles.discount}>
                  - {product.attributes.discount} %
                </span>
              </>
            )}

            <span className={styles.buyPrice}>{buyPrice} €</span>
          </div>
        </div>
        <Button primary fluid>
          Comprar ahora
        </Button>
        <WishlistIcon productId={productId} className={styles.heart} />
      </div>
    </Container>
  );
}
