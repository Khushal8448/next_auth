import { NextResponse, NextRequest } from "next/server";

export function GET(
  req: NextRequest,
  {
    params: { authRoutes },
  }: {
    params: {
      authRoutes: string[];
    };
  }
) {
  console.log(authRoutes);
  return NextResponse.json({
    msg: "Got a GET request",
    authRoutes,
  });
}

export function POST(req: NextRequest) {
  return NextResponse.json({
    msg: "Got a POST request",
  });
}
