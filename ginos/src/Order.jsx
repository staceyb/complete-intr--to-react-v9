import {useState} from "react";
import Pizza from "./Pizza";

export default function Order() {

    const [pizzaType, setPizzaType] = useState("pepperoni");
    const [pizzaSize, setPizzaSize] = useState("M");

    return (
      <div className="order">
      <h2>Create Order</h2>
      <form>
        <div>
        <div>
          <label htmlFor="pizza-type" value="pizzaType"></label>
          <select onChange={(e) => setPizzaType(e.target.value)} 
                  name="pizza-type" value={pizzaType}>
            <option value="pepperoni">The Pepperoni Pizza</option>
            <option value="hawaiian">The Hawaiian Pizza</option>
            <option value="big_meat">The Big Meat Pizza</option>
          </select>
        </div>
        <label htmlFor="pizza-size">Pizza Type</label>
        <div>
            <span>
                <input 
                onChange={(e) => setPizzaSize(e.target.value)}
                checked={pizzaSize === "S"}
                type="radio"
                name="pizza-size"
                value="S"
                id="pizza-s"
            />
            <label htmlFor="pizza-s">Small</label>
            </span>
            <span>
                <input 
                onChange={(e) => setPizzaSize(e.target.value)}
                checked={pizzaSize === "M"}
                type="radio"
                name="pizza-size"
                value="M"
                id="pizza-m"
                />
             <label htmlFor="pizza-m">Medium</label>
            </span>
            <span>
                <input 
                onChange={(e) => setPizzaSize(e.target.value)}
                checked={pizzaSize === "L"}
                type="radio"
                name="pizza-size"
                value="L"
                id="pizza-l"
                />
             <label htmlFor="pizza-l">Large</label>
            </span>
        </div>
        <button type="submit">Add to Cart</button>
        </div>
        <div className="order-pizza">
          <Pizza
          name="Pepperoni"
          description="Mozzarella Cheese, Pepperoni"
          image="/public/pizzas/pepperoni.webp"
        />
        <p>$13.37</p>
        </div>
      </form>
      </div>
    );
};