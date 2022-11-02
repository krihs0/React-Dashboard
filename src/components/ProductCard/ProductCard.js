import "./ProductCard.css";

const ProductCard =(props) =>{

    const productCardClicked =() =>{
        props.onCardClicked(props.id);
    }

    return(
        <li onClick={productCardClicked} className="productsList__item productsList__item--gray">
            <img className="productsList__img" src={props.image} alt={props.name} />   
            <div className="productsList__fade">
            <p className="productsList__imgText">{props.name}</p>
            </div>
        </li>
    );
}

export default ProductCard;