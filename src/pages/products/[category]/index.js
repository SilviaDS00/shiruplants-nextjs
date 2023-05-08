export { default } from "./category";
import { Category, Product } from "@/api";

export async function getServerSideProps(context) {
  const {
    params: { category },
    query: { page = 1 },
  } = context;

  const categoryCtrl = new Category();
  const responseCategory = await categoryCtrl.getBySlug(category);

  const productCtrl = new Product();
  const responseProduct = await productCtrl.getProductByCategory(
    category,
    page
  );

  return {
    props: {
      category: responseCategory,
      products: responseProduct,
      pagination: responseProduct.meta.pagination,
    },
  };
}
