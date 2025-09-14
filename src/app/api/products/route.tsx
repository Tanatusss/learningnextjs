// PATH: /api/products

import { NextRequest, NextResponse } from "next/server";

// GET /api/products
export function GET(request: NextRequest) {

    const searchParams = request.nextUrl.searchParams;
    console.log(searchParams.toString())
    //return new NextResponse().formdata()
    return NextResponse.json({ 
        message: "This is response from GET /api/products",
        searchParams: searchParams.toString()
     },{status: 201});
}


//POST /api/products
export async function POST(request: NextRequest) {
    //read data from cookies
    const cookies = request.cookies
    const jwt = cookies.get('jwt')
    //read data from request body
    const body = await request.json();
    console.log(body)
    return Response.json({})
}


