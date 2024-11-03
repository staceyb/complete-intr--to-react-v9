import { usePizzaOfTheDay } from "./usePizzaOfTheDay";

// feel free to change en-US / USD to your locale
const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const PizzaOfTheDay = () => {
  const pizzaOfTheDay = usePizzaOfTheDay();

  if (!pizzaOfTheDay) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pizza-of-the-day">
      <h2>Pizza of the Day</h2>
      <div>
        <div className="pizza-of-the-day-info">
          <h3>{pizzaOfTheDay.name}</h3>
          <p>{pizzaOfTheDay.description}</p>
          <p className="pizza-of-the-day-price">
            Small: <span>{intl.format(pizzaOfTheDay.sizes.S)}</span>
          </p>
          <p className="pizza-of-the-day-price">
            Medium: <span>{intl.format(pizzaOfTheDay.sizes.M)}</span>
          </p>
          <p className="pizza-of-the-day-price">
            Large: <span>{intl.format(pizzaOfTheDay.sizes.L)}</span>
          </p>
        </div>
        <img
          className="pizza-of-the-day-image"
          src={pizzaOfTheDay.image}
          alt={pizzaOfTheDay.name}
        />
      </div>
    </div>
  );
};

export default PizzaOfTheDay;
