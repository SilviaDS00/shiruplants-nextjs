import { forEach } from "lodash";
import { ENV, authFetch } from "@/utils";

export class Cart {
  add(productId) {
    const products = this.getAll();
    const objIndex = products.findIndex((product) => product.id === productId);

    if (objIndex < 0) {
      products.push({ id: productId, quantity: 1 });
    } else {
      const product = products[objIndex];
      products[objIndex].quantity = product.quantity + 1;
    }

    localStorage.setItem(ENV.CART, JSON.stringify(products));
  }

  getAll() {
    const response = localStorage.getItem(ENV.CART);

    if (!response) {
      return [];
    } else {
      return JSON.parse(response);
    }
  }

  count() {
    const response = this.getAll();
    let count = 0;

    forEach(response, (item) => {
      count += item.quantity;
    });

    return count;
  }

  changeQuantity(gameId, quantity) {
    const games = this.getAll();
    const objIndex = games.findIndex((game) => game.id === gameId);

    games[objIndex].quantity = quantity;

    localStorage.setItem(ENV.CART, JSON.stringify(games));
  }

  delete(productId) {
    const products = this.getAll();
    const updateProducts = products.filter(
      (product) => product.id !== productId
    );

    localStorage.setItem(ENV.CART, JSON.stringify(updateProducts));
  }

  deleteAll() {
    localStorage.removeItem(ENV.CART);
  }

  async paymentCart(token, products, idUser, address) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PAYMENY_ORDER}`;
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
          products,
          idUser,
          addressShipping: address,
        }),
      };

      const response = await authFetch(url, params);

      return response;
    } catch (error) {
      throw error;
    }
  }
}
