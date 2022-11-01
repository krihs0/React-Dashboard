import LeftPane from "../LeftPane/LeftPane";
import RightPane from "../RightPane/RightPane";
import "./Dashboard.css";
import redroses from "../../img/redroses.jpg";
import sunflowers from "../../img/sunflowers.jpg";
import poppy from "../../img/poppy.jpg";
import daisy from "../../img/daisy.jpg";
import dandelions from "../../img/dandelions.jpg";
import defaultImage from "../../img/default.png";
import React from "react";
import Popup from "../Popup/Popup";

class Dashboard extends React.Component{

    constructor(props){
        super(props);
        this.state = {productCards: [], open: true};
    }


    componentDidMount(){
        let productCards =[
            {
                name: "Placeholder"
            },
            {
                name: "red roses",
                img: redroses
            },
            {
                name: "sunflowers",
                img: sunflowers
            }
        ];
        this.setState({productCards: productCards})
    }

    onButtonClicked =() =>{
        this.setState({open: !this.state.open})
    }

    addButtonClicked = (inputFromPopup) =>{
        let toBeAddedImage;
        switch(inputFromPopup){
            case("Daisy"):
                toBeAddedImage = daisy;
                break;
            case("Dandelions"):
                toBeAddedImage = dandelions;
                break;
            case("Poppy"):
                toBeAddedImage = poppy;
                break;
            case("Sunflowers"):
                toBeAddedImage = sunflowers;
                break;
            case("Red Roses"):
                toBeAddedImage = redroses;
                break;
            default:
                toBeAddedImage = defaultImage;
                break;
        }
        let toBeAdded = [
            {
                name: inputFromPopup,
                img: toBeAddedImage
            }
        ]

        let mergedArrays = this.state.productCards.concat(toBeAdded);
        this.setState({
            productCards: mergedArrays,
            open: !this.state.open
        })
    }
    

    render(){
        let navigationListItems =
        [
            {
                name: "Home",
                message: 0,
            },
            {
                name: "Facturen",
                message: 3,
            },
            {
                name: "Bestellingen",
                message: 0,
            },
            {
                name: "Retour",
                message: 1,
            },
            {
                name: "Contact",
                message: 2,
            }
        ];
        
        if(this.state.open === true){
            return(
                <article className="dashboard">
                    <LeftPane
                        navigationListItems={navigationListItems}
                        buttonText="Go Premium"
                    />
                    <RightPane
                        onButtonClicked={this.onButtonClicked}
                        productCards={this.state.productCards}
                        headerText="Mijn Producten"
                        buttonSymbol="+"
                        buttonText="Voeg een product toe"
                    />
                </article>
            );
        }
        return <Popup addButtonClicked={this.addButtonClicked}/>
    };
}

export default Dashboard;