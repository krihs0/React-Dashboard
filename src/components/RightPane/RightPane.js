import ProductCard from "../ProductCard/ProductCard";
import"./RightPane.css";

const RightPane = (props) =>{
    let addProduct = () =>{
        props.onButtonClicked();
    }

    let onCardClicked = (idFromCard) =>{
        console.log("dadada " + idFromCard)
    }

    let productCardsToBeRendered = props.productCards.map(product =>{
        if(product.name === "Placeholder"){
            return( <li key={product.id} className="productsList__item">
                <button onClick={addProduct} className="productsList__button">{props.buttonSymbol || "*"}</button>
                <p className="productsList__text">{props.buttonText}</p>
                </li>
            );
        }
        return <ProductCard onCardClicked={onCardClicked} key={product.id} id={product.id} name={product.name} image={product.img}/>

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