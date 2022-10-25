import { NextResponse } from "next/server";
import type { Middleware as MiddlewareType } from "../utils/types/global";

const Middleware: MiddlewareType = (req) => {
  if (req.nextUrl.pathname === req.nextUrl.pathname.toLowerCase())
    return NextResponse.next();
  return NextResponse.redirect(
    `${req.nextUrl.origin}${req.nextUrl.pathname.toLowerCase()}`
  );
};

export default Middleware;
