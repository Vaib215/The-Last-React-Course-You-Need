import { createContext, useState } from "react";
import NavBar from "./components/NavBar";
import Product from "./components/Product";

export const QuantityContext = createContext(null);

function App() {
  const [quantity, setQuantity] = useState(0);
  return (
    <QuantityContext.Provider value={{ quantity, setQuantity }}>
      <div className="bg-black text-white min-h-screen flex flex-col">
        <NavBar />
        <Product />
      </div>
    </QuantityContext.Provider>
  );
}

export default App;
