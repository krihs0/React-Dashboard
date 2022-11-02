import redroses from "../img/redroses.jpg";
import sunflowers from "../img/sunflowers.jpg";
import poppy from "../img/poppy.jpg";
import daisy from "../img/daisy.jpg";
import dandelions from "../img/dandelions.jpg";
import defaultImage from "../img/default.png";

function chooseImage(inputFromPopup){
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
    return toBeAddedImage
}

export default chooseImage;