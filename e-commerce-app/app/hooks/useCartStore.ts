import { create } from "zustand";
import { WixClient } from "../context/wixContext";
import { currentCart } from "@wix/ecom";

type CartState = {
  cart: currentCart.Cart;
  isLoading: boolean;
  counter: number;
  getCart: (wixClient: WixClient) => void;
  addItem: (
    wixClient: WixClient,
    productId: string,
    variantId: string,
    quantity: number
  ) => void;
  removeItem: (wixClient: WixClient, itemId: string) => void;
};

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  isLoading: true,
  counter: 0,
  getCart: async (wixClient) => {
    const cart = await wixClient.currentCart.getCurrentCart();
    set({
      cart: cart || [],
      isLoading: false,
      counter: cart?.lineItems.length || 0,
    });
  },
  addItem: async (wixClient, productId, variantId, quantity) => {
    set((state) => ({ ...state, isLoading: true }));
    const lineItem = {
      catalogReference: {
        appId: process.env.NEXT_PUBLIC_WIX_APP_ID!,
        catalogItemId: productId,
        ...(variantId && { options: { variantId } }),
      },
      quantity: quantity,
    };

    // console.log("Line item to be added:", lineItem);

    try {
      console.log(lineItem)
      const response = await wixClient.currentCart.addToCurrentCart({
        lineItems: [lineItem],
      });
      console.log("Response:", response);

      set({
        cart: response.cart,
        counter: response.cart?.lineItems.length,
        isLoading: false,
      });
    } catch (error) {
      console.error("Error adding item to cart:", error);
      set((state) => ({ ...state, isLoading: false }));
    }
  },
  removeItem: async (wixClient, itemId) => {
    set((state) => ({ ...state, isLoading: true }));
    const response = await wixClient.currentCart.removeLineItemsFromCurrentCart(
      [itemId]
    );

    set({
      cart: response.cart,
      counter: response.cart?.lineItems.length,
      isLoading: false,
    });
  },
}));
