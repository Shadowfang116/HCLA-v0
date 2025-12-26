import { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from "react-router-dom";
import { Layout } from "@/components/layout";

const queryClient = new QueryClient();

// Lightweight loading fallback
const PageLoader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full mx-auto mb-4 animate-spin" />
        <p className="text-sm text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
};

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout><Suspense fallback={<PageLoader />}><Outlet /></Suspense></Layout>,
      children: [
        {
          index: true,
          lazy: async () => {
            const { default: Component } = await import("./pages/Index");
            return { Component };
          },
        },
        {
          path: "about",
          lazy: async () => {
            const { default: Component } = await import("./pages/About");
            return { Component };
          },
        },
        {
          path: "practice-areas",
          lazy: async () => {
            const { default: Component } = await import("./pages/PracticeAreas");
            return { Component };
          },
        },
        {
          path: "practice-areas/:slug",
          lazy: async () => {
            const { default: Component } = await import("./pages/PracticeAreaDetail");
            return { Component };
          },
        },
        {
          path: "team",
          lazy: async () => {
            const { default: Component } = await import("./pages/Team");
            return { Component };
          },
        },
        {
          path: "team/:slug",
          lazy: async () => {
            const { default: Component } = await import("./pages/TeamMemberDetail");
            return { Component };
          },
        },
        {
          path: "laws",
          lazy: async () => {
            const { default: Component } = await import("./pages/Laws");
            return { Component };
          },
        },
        {
          path: "contact",
          lazy: async () => {
            const { default: Component } = await import("./pages/Contact");
            return { Component };
          },
        },
        {
          path: "privacy",
          lazy: async () => {
            const { default: Component } = await import("./pages/Privacy");
            return { Component };
          },
        },
        {
          path: "terms",
          lazy: async () => {
            const { default: Component } = await import("./pages/Terms");
            return { Component };
          },
        },
        {
          path: "disclaimer",
          lazy: async () => {
            const { default: Component } = await import("./pages/Disclaimer");
            return { Component };
          },
        },
      ],
    },
    {
      path: "insights",
      element: <Navigate to="/laws" replace />,
    },
    {
      path: "*",
      element: <Layout><Suspense fallback={<PageLoader />}><Outlet /></Suspense></Layout>,
      children: [
        {
          index: true,
          lazy: async () => {
            const { default: Component } = await import("./pages/NotFound");
            return { Component };
          },
        },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    },
  }
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <RouterProvider 
        router={router} 
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
