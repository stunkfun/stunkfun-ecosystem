import { NextResponse } from "next/server";

export async function GET() {

  return NextResponse.json({
    tokens: [
      {
        name: "Stunk Apple",
        symbol: "SAPL",
        pair: "AAPL",
        type: "Stock"
      },
      {
        name: "Moon Meme",
        symbol: "MOON",
        pair: "MEME",
        type: "Meme"
      }
    ]
  });

}
