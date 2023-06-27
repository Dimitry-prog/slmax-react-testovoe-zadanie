import { getProducts } from "@/services/getProducts";

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="p-12 flex flex-col items-center justify-between">
      <h2 className="font-bold text-5xl uppercase tracking-wider">hello!</h2>
    </main>
  )
}
