import LeftPane from "../LeftPane/LeftPane";
import RightPane from "../RightPane/RightPane";
import "./Dashboard.css";
import React from "react";
import Popup from "../Popup/Popup";
import productsObject from "../../data/products";
import chooseImage from "../../helpers/chooseImage";
import navigationListItemsObject from "../../data/navigationListItems";

class Dashboard extends React.Component{

    constructor(props){
        super(props);
        this.state = {productCards: [], open: true, cardClicked: {}};
    }


    componentDidMount(){
        
        this.setState({productCards: productsObject.products})
    }

    onButtonClicked =() =>{
        this.setState({open: !this.state.open})
    }

    addButtonClicked = (inputFromPopup) =>{
        let imageFromHelper = chooseImage(inputFromPopup);
        let toBeAdded = [
            {
                id: this.state.productCards.length + 1,
                name: inputFromPopup,
                img: imageFromHelper
            }
        ]

        let mergedArrays = this.state.productCards.concat(toBeAdded);
        this.setState({
            productCards: mergedArrays,
            open: !this.state.open
        })
    }

    onCardClicked =(idFromCard) =>{
        this.setState({
            open: !this.state.open,
            cardClicked: this.state.productCards[idFromCard -1]
        })
    }
    
    render(){
        console.log(this.state.cardClicked)
        if(this.state.open === true){
            return(
                <article className="dashboard">
                    <LeftPane
                        navigationListItems={navigationListItemsObject}
                        buttonText="Go Premium"
                    />
                    <RightPane
                        onProductCardClicked={this.onCardClicked}
                        onButtonClicked={this.onButtonClicked}
                        productCards={this.state.productCards}
                        headerText="Mijn Producten"
                        buttonSymbol="+"
                        buttonText="Voeg een product toe"
                    />
                </article>
            );
        }
        return <Popup cardClicked={this.state.cardClicked} addButtonClicked={this.addButtonClicked}/>
    };
}

export default Dashboard;