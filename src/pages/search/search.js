import { BasicLayout, SearchLayout } from "@/layouts";
import { Container } from "semantic-ui-react";
import { size } from "lodash";
import {
  GridProducts,
  Separator,
  Pagination,
  NoResult,
} from "@/components/Shared";
import { useEffect } from "react";

export default function SearchPage(props) {
  const { products, pagination, searchText } = props;
  const hasProducts = size(products) > 0;
  useEffect(() => {
    document.getElementById("searchInput").focus();
  }, []);
  return (
    <>
      <BasicLayout>
        <SearchLayout />
        <Container>
          <Separator height={20} />
          <h2>Buscando: {searchText}</h2>
          {hasProducts ? (
            <>
              <GridProducts products={products} />
              <Separator height={30} />
              <Pagination
                currentPage={pagination.page}
                totalPage={pagination.pageCount}
              />
            </>
          ) : (
            <div>
              <NoResult text="No se encontraron resultados" />
            </div>
          )}
          <Separator height={100} />
        </Container>
      </BasicLayout>
    </>
  );
}
