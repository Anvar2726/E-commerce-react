import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

const HomePage = lazy(()=> import("./pages/HomePage"));
const Category = lazy(()=> import("./pages/Category"));
const Product = lazy(()=> import("./pages/Product"));


function App() {
  return (
    <Suspense>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:categoryName" element={<Category />} />
          <Route path="/:categoryName/:productId" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
