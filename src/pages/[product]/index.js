export { default } from "./product";
import { Product } from "@/api";

export async function getServerSideProps(context) {
  const {
    params: { product },
  } = context;

  const productCtrl = new Product();
  const response = await productCtrl.getProductBySlug(product);

  return {
    props: {
      product: response,
    },
  };
}
