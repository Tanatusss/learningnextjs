// PATH: /api/products

import { NextResponse } from "next/server";

// GET /api/products
export function GET() {
    return NextResponse.json({ 
        message: "This is response from GET /api/products"
     },{status: 201});
}



export function POST() {

}