import { Container } from "semantic-ui-react";
import { size } from "lodash";
import { BasicLayout } from "@/layouts";
import { GridProducts, Separator } from "@/components/Shared";

export default function CategoryPage(props) {
  const { products, category, pagination } = props;
  const hasProducts = size(products) > 0;

  return (
    <>
      <BasicLayout>
        <Container>
          <Separator height={100} />
          <h2>{category.attributes.title}</h2>
          {hasProducts ? (
            <GridProducts products={products} />
          ) : (
            <h3>No hay productos</h3>
          )}
          <Separator height={100} />
        </Container>
      </BasicLayout>
    </>
  );
}
