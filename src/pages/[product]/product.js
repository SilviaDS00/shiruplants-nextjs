import { BasicLayout } from "@/layouts";
import { Product } from "@/components/Product";
import { Separator } from "@/components/Shared";
import { Container } from "semantic-ui-react";

export default function ProductPage(props) {
  const { product } = props;
  return (
    <>
      <BasicLayout>
        <Container>
          <Separator height={100} />
          <h2>ProductPage</h2>
          <Separator height={50} />
          <Product.Panel productId={product.id} product={product} />
          <Separator height={50} />
          <Product.Info product={product.attributes} />
        </Container>
      </BasicLayout>
    </>
  );
}
