const Pizza = (props) => {
    return (
        <div className="pizza">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <img src={props.image} alt="{props.nAME}" />
        </div>
    );
};

export default Pizza;
