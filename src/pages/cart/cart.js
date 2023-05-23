import { CartLayout } from "@/layouts";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useCart } from "@/hooks";
import { Product } from "@/api";
import { Cart } from "@/components/Cart";

const productCtrl = new Product();

export default function CartPage(props) {
  const {
    query: { step = 1 },
  } = useRouter();

  const [products, setProducts] = useState(null);
  const { cart } = useCart();

  useEffect(() => {
    (async () => {
      try {
        const data = [];
        for await (const item of cart) {
          const response = await productCtrl.getProductById(item.id);
          data.push({ ...response.data, quantity: item.quantity });
        }
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [cart]);

  const currentStep = Number(step);
  return (
    <>
      <CartLayout>
        {currentStep === 1 && (
          <p>
            <Cart.StepOne products={products} />
          </p>
        )}
        {currentStep === 2 && (
          <p>
            <Cart.StepTwo products={products} />
          </p>
        )}
        {currentStep === 3 && <Cart.StepThree />}
      </CartLayout>
    </>
  );
}
