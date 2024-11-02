import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Order from "./Order";
import PizzaOfTheDay from "./PizzaofTheDay";
import Header from "./Header";

const App = () => {
  return (
    <StrictMode>
    <div>
      <Header />
      <Order />
      <PizzaOfTheDay />
    </div>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
