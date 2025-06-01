import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

// Create a route matcher for protected routes
const isProtectedRoute = createRouteMatcher([
    "/dashboard(.*)",
    "/collection(.*)",
    "/journal(.*)",
]);

// Export the middleware using Clerk's middleware function
export default clerkMiddleware(async (auth, req) => {
    // Get the userId and redirectToSignIn helper from Clerk's auth
    const { userId, redirectToSignIn } = await auth();

    // If the user is not signed in and tries to access a protected route, redirect to sign in
    if (!userId && isProtectedRoute(req)) {
        return redirectToSignIn();
    }

    // Otherwise, continue to the next middleware or route handler
    return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};