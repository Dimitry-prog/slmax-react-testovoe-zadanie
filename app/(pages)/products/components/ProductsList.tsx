import { ProductType } from "@/types";
import { getProducts } from "@/services/products";

const ProductsList = async () => {
  const productsData: Promise<ProductType[]> = getProducts();
  const products: ProductType[] = await productsData;

  return (
    <ul>
      {products.map(prod => (
        <li key={prod.id}>
          {prod.text}
        </li>
      ))}
    </ul>
  );
};

export default ProductsList;