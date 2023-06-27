export const getProducts = async () => {
  try {
    const response = await fetch('http://localhost:3030/products');
    return response.json();
  } catch (e) {
    console.log(e)
  }
}