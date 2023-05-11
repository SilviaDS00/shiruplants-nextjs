import { Container } from "semantic-ui-react";
import { size } from "lodash";
import { BasicLayout } from "@/layouts";
import { GridProducts, Separator } from "@/components/Shared";
import { NoResult, Pagination } from "@/components/Shared";

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
            <>
              <GridProducts products={products} />
              <Separator height={30} />
              <Pagination
                totalPage={pagination.pageCount}
                currentPage={pagination.page}
              />
            </>
          ) : (
            <div>
              <NoResult
                text={`La categoría ${category.attributes.title} está vacía`}
              />
            </div>
          )}
          <Separator height={100} />
        </Container>
      </BasicLayout>
    </>
  );
}
