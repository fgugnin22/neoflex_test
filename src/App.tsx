import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Cart from "./pages/Cart";
import Catalog from "./pages/Catalog";
import { ROUTES } from "./routes";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.layout} element={<Layout />}>
            <Route path={ROUTES.cart} element={<Cart />} />
            <Route path={ROUTES.catalog} element={<Catalog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
