const Pizza = (props) => {
  return (
    <div className="pizza">
      <h1>{ props.name }</h1>
      <p>{ props.description }</p>
      <img src={ props.image ? props.image : "/public/pizzas/thai_ckn.webp" } alt={ props.name } />
    </div>
  );
};

export default Pizza;
