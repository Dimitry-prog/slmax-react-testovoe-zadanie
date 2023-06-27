import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath, revalidateTag } from 'next/cache'

export async function GET(request: NextRequest) {
  const patch = request.nextUrl.searchParams.get('/product') as string
  revalidatePath(patch)
  return NextResponse.json({ revalidated: true })
}