import { products } from "./mock-product.mjs";

// affiche le message
const success = (message, data) => {
  return {
    message: message,
    data: data,
  };
};

export { success };
