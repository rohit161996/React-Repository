import Shimmer from './Shimmer'
import { useParams } from "react-router-dom";
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {
    // Get the restaurant if from the url of the page.
    const { resId } = useParams();
    
    // Get the data from the Custom Hook created in utils/
    const resInfo = useRestaurantMenu(resId);

    // get the information from the resinfo state variable once it has received the data 
    // const restaurantInfo = resInfo?.cards[2]?.card?.card?.info;

    if (resInfo === null) return (<Shimmer />);
    console.log("resInfo", resInfo);

    // Display the name of the restaurant, their cuisine and cost for two
    
    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info || {};

    // Get the items present in their menu
    const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || {};
    console.log("itemCards", itemCards);

    // Industry convention to use this ternary operator, but it cannot be used because name cannot be variables cannot be dereferenced.
    return (
        <div className="menu">
            <h1>
                {name}
            </h1>
            <p>
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            <ul>
                {
                    itemCards.map((res) => (
                        <li key={res.card.info.id}>
                            {res.card.info.name} - {"Rs."} {res.card.info.price / 100}
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default RestaurantMenu;