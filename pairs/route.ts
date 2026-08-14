import { NextResponse } from "next/server";

export async function GET() {

  return NextResponse.json({
    pairs: [
      "stocks",
      "memes",
      "currencies",
      "crypto",
      "commodities",
      "leverage",
      "custom"
    ]
  });

}
