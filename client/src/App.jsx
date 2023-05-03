import { Provider } from "react-redux";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Footer from "./Footer";
import Header from "./Header";
import About from "./About";
import Body from "./Body";
import Admin from "./Admin";
import store from "./utils/store";
import ContactUs from "./ContactUs";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <>
          <div className="mobile-container">
            <Header />
            <Routes>
              <Route path="/" exact element={<Body />} />
              <Route path="/about" exact element={<About />} />
              <Route path="/contact" exact element={<ContactUs />} />
              <Route path="/admin" exact element={<Admin />} />
            </Routes>
            <Footer />
          </div>
        </>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
