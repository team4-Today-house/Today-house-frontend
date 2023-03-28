import React, { useState } from "react";
import Router from "./shared/Router";
import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query"
import { ThemeContext } from "./utils/context";
import "./App.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    }
  }
});

function App() {
  const [ isDark, setIsDark ] = useState(false);
  return (
    <ThemeContext.Provider value={{isDark, setIsDark}}>
      <QueryClientProvider client ={queryClient}>
        <Router />
      </QueryClientProvider>
    </ThemeContext.Provider>
  )
}

export default App;
