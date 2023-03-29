import React, { useState } from "react";
import Router from "./shared/Router";
import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query"
import { ThemeContext } from "./utils/context";
import "./App.css";
import Footer from "./pages/Footer/Footer";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 3000,
      retry: 0,
    }
  }
});

function App() {
  const [ isDark, setIsDark ] = useState(false);
  return (
    <QueryClientProvider client ={queryClient}>
      <ThemeContext.Provider value={{isDark, setIsDark}}>
        <Router />
        <Footer/>
      </ThemeContext.Provider>
    </QueryClientProvider>
  )
}

export default App;
