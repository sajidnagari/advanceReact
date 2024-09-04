import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
    const toke = request.cookies.get('token')?.value;
    if(toke){
        return NextResponse.redirect(new URL("/", request.url))
    }

   if(!toke){ 
    
    return NextResponse.redirect(new URL("/login", request.url))
   }
  return NextResponse.rewrite(new URL('/login', request.url))
}
 

export const config = {
  matcher: ["/login"],
}