import Placeholder from "../Placeholder/Placeholder";
import ProductCard from "../ProductCard/ProductCard";
import"./RightPane.css";

const RightPane = (props) =>{
    
    let onCardClicked = (idFromCard) =>{
        props.onProductCardClicked(idFromCard);
    }

    let productCardsToBeRendered = props.productCards.map(product =>{
        if(product.name === "Placeholder"){
            return <Placeholder onCardClicked={onCardClicked} id={product.id} buttonSymbol="+" buttonText="Voeg product toe"/>
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