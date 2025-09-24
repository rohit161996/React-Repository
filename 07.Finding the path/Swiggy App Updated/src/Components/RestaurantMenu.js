import Shimmer from './Shimmer'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import constants from "../utils/constants";

const RestaurantMenu = () => {

    // Whenever this state variable is updated by useEffect(), the UI will be updated.
    const [resInfo, setResInfo] = useState(null);

    // Get the 
    const { resId } = useParams();

    console.log(resId);

    useEffect(() => {
        // It will fetch the data from the server
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        // const data = await fetch("https://corsproxy.io/?" + "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=" + "866584" + "&catalog_qa=undefined&submitAction=ENTER");
        const data = await fetch(constants.CORS_PLUGIN + constants.URL + resId + constants.REMAINING_URL);

        // Once the data is fetched the json variable has all the data.
        const json = await data.json();

        // Print the data in the console log.
        // console.log(json);

        // Update the state variable when the data is received.
        setResInfo(json.data);
    }

    // get the information from the resinfo state variable once it has received the data 
    const restaurantInfo = resInfo?.cards[2]?.card?.card?.info;

    if (resInfo === null) return (<Shimmer />);

    // Display the name of the restaurant, their cuisine and cost for two
    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

    // Get the items present in their menu
    const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0].itemCards;
    // [0]?.card?.info?.name;

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