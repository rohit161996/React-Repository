import Shimmer from './Shimmer'
import { useState } from 'react';
import { useParams } from "react-router-dom";
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantItems/RestaurantCategory';

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    // Create a state variable to hide and show the RestaurantItemCategory from the parent
    const [showIndex, setShowIndex] = useState(null);

    // Passing the dummy data to the RestaurantCategory
    const dummy = "Dummy Data";

    if (resInfo === null) return (<Shimmer />);

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info || {};
    const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || {};

    // console.log("All Cards", resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories =
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (c) =>
                c.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );

    // Industry convention to use this ternary operator, but it cannot be used because name cannot be variables cannot be dereferenced.
    return (
        <div className="text-center pb-40">
            <h1 className="font-bold my-10 text-2xl">
                {name}
            </h1>
            <p className="w-6/12 mx-auto my-4 p-4 text-left font-bold text-2xl">
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            {/* Category Accordians */}
            {
                categories.map((category, index) => 
                // Controlled Component - controlled with the help of showIndex
                <RestaurantCategory
                    data={category.card.card}
                    key={category.card.card.categoryId}
                    showItem={index === showIndex ? true : false}
                    setShowIndex={()=>setShowIndex((prev) => prev === index ? null : index)}
                    dummy={dummy}
                />)
            }
        </div>
    );
}

export default RestaurantMenu;