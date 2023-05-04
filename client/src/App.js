import { useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import About from "./components/About";
import Contact from "./components/Contact";
import { Provider } from "react-redux";
import store from "./utils/store";
import Admin from "./components/Admin";

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </>
  );
}

function AppRouter() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppRouter />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
    ],
  },
]);

export default App;
