import"./RightPane.css";

const RightPane = (props) =>{
    let addProduct = () =>{
        props.onButtonClicked();
    }

    let productCardsToBeRendered = props.productCards.map(product =>{
        if(product.name === "Placeholder"){
            return( <li key={product.id} className="productsList__item">
                <button onClick={addProduct} className="productsList__button">{props.buttonSymbol || "*"}</button>
                <p className="productsList__text">{props.buttonText}</p>
                </li>
            );
        }
        return(
            <li key={product.id} className="productsList__item">
                <img className="productsList__img" src={product.img} alt={product.name} />   
                <div className="productsList__fade">
                <p className="productsList__imgText">{product.name}</p>
                </div>
            </li>
        );
    });
    return(
        <section className="productsWrapper">
            <header className="header">
                <h1 className="header__h1">{props.headerText}</h1>
            </header>
            <ul className="productsList">
                {productCardsToBeRendered}
            </ul>
        </section>
        );
}

export default RightPane;