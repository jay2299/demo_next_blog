import { NextResponse } from 'next/server';

export function middleware(request) {
    // console.log('Middleware triggered for URL:', request.url);
    return NextResponse.redirect(new URL('/signup', request.url));
}

export const config = {
    matcher: ['/blogsrever/:path*']
};