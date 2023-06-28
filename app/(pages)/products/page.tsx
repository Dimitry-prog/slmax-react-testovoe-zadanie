import ProductsList from "@/app/(pages)/products/components/ProductsList";

export const revalidate = 1;
const Products = async () => {

  return (
    <main className="p-12 flex flex-col items-center justify-between">
      <ProductsList/>
    </main>
  );
};

export default Products;