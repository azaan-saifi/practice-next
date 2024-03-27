import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({response: 'this is successfully working'})
}