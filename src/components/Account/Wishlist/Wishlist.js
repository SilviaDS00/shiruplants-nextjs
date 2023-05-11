import * as styles from "./Wishlist.module.scss";
import { useState, useEffect } from "react";
import { Wishlist as WishlistCtrl } from "@/api";
import { useAuth } from "@/hooks";
import { GridProducts, NoResult } from "@/components/Shared";
import { size } from "lodash";
import { GridWishlist } from "./GridWishlist";

const wishlistCtrl = new WishlistCtrl();

export function Wishlist() {
  const [wishlist, setWishlist] = useState(null);
  const [reload, setReload] = useState(false);
  const { user } = useAuth();

  const onReload = () => setReload((prevState) => !prevState);

  useEffect(() => {
    (async () => {
      try {
        const response = await wishlistCtrl.getAll(user.id);
        setWishlist(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [reload]);

  return size(wishlist) === 0 ? (
    <NoResult text="No tienes productos en la lista de deseos" />
  ) : (
    <GridWishlist wishlist={wishlist} onReload={onReload} />
  );
}
