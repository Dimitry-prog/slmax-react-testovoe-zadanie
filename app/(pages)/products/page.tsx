import ProductsList from "@/app/components/ProductsList";
import { ProductType } from "@/types";
import { getProducts } from "@/services/getProducts";

export const revalidate = 10;
const Products = async () => {
  const productsData: Promise<ProductType[]> = getProducts();
  const products: ProductType[] = await productsData;
  return (
    <main className="p-12 flex flex-col items-center justify-between">
      {/*<ProductsList/>*/}
      <ul>
        {products.map(prod => (
          <li key={prod.id}>
            {prod.text}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Products;