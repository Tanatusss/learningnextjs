import { NextRequest } from "next/server";


//DELETE /api/products/:productId
export async function DELETE(
    request: NextRequest,
    {params}: {params:Promise<{ productId: string }>}
) {
    const {productId} = await params;
    console.log(productId)
    return Response.json({message: `product id is ${productId}`})
}