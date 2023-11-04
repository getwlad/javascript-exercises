// 10. Verificar se um dado produto foi consumido
// mais de uma vez.
import iProduct from "./iProduct";
const productData = require("./usersProducts.json");

const checkProductConsumed = (
  productName: string,
  category: string,
  productsData: iProduct[]
): string => {
  const products = productsData.filter((product: iProduct) => {
    if (!product["category"].includes(category)) {
      return;
    }
    if (!product["name"].includes(productName)) {
      return;
    }
    return true;
  });
  if (products.length >= 1) {
    return `O produto foi consumido mais de uma vez, total: ${products.length} vezes`;
  }
  return "O produto não foi consumido mais de uma vez";
};

console.log(checkProductConsumed("Uber", "Transporte", productData));
