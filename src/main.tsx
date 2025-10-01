import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { CssBaseline } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { queryClient } from "./queryClient";
import { appRouter } from "./app/router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <RouterProvider router={appRouter} />
    </QueryClientProvider>
  </React.StrictMode>
);
