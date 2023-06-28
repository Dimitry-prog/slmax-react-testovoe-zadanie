import { ProductType } from "@/types";

export const getProducts = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/products', { next: { tags: ['products'] } });
    return response.json();
  } catch (e) {
    console.log(e)
  }
}

export const addProduct = async (body: ProductType) => {
  try {
    const response = await fetch('http://localhost:3000/api/products', {
        method: 'POST',
        body: JSON.stringify(body),
        next: { tags: ['product'] }
      }
    );
    return response.json();
  } catch (e) {
    console.log(e)
  }
}
