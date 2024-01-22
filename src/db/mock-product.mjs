// tableau de tout les produits
let products = [
  {
    id: 1,
    name: "Big Mac",
    price: 5.99,
    created: new Date(),
  },
  {
    id: 2,
    name: "Mc Chicken",
    price: 4.99,
    created: new Date(),
  },
  {
    id: 3,
    name: "Double Cheese Burger",
    price: 2.99,
    created: new Date(),
  },
  {
    id: 4,
    name: "Fries",
    price: 2.99,
    created: new Date(),
  },
  {
    id: 5,
    name: "Mc Nuggets",
    price: 3.49,
    created: new Date(),
  },
  {
    id: 6,
    name: "Salad",
    price: 2.79,
    created: new Date(),
  },
  {
    id: 7,
    name: "Coke",
    price: 1.99,
    created: new Date(),
  },
  {
    id: 8,
    name: "Ice Tea",
    price: 1.99,
    created: new Date(),
  },
  {
    id: 9,
    name: "Water",
    price: 1.49,
    created: new Date(),
  },
];

// return la plus grande id de produit + 1
const getUniqueId = () => {
  let maxId = 0;
  for (const product of products) {
    if (product.id > maxId) {
      maxId = product.id;
    }
  }
  return maxId + 1;
};

// return un produit par rapport à l'id donné
const getProduct = (productId) => {
  return products.find((product) => product.id == productId);
};

// update un produit (updatedProduct sera en quoi le produit vas être updater, et productId sert à selectionner le produit)
const updateProduct = (productId, updatedProduct) => {
  products = products.map((product) =>
    product.id == productId ? updatedProduct : product
  );
};

/* version alternatif d'updateProduct
const updateProduct = (productId, updatedProduct, products) => {
  for (let product of products) {
    if (product.id == productId) {
      products[product.id - 1] = updatedProduct;
      break;
    }
  }
};
*/

// delete un produit par rapport à l'id donné
const removeProduct = (productId) => {
  products = products.filter((product) => product.id != productId);
};

export { products, getUniqueId, getProduct, updateProduct, removeProduct };
