import { NextRequest, NextResponse } from "next/server";
import { products } from "@/app/api/products/products";

export async function GET(request: NextRequest) {
  return NextResponse.json(products);
}

export async function POST(request: NextRequest) {
  const product = await request.json();
  products.push(product);
  return NextResponse.json(product);
}