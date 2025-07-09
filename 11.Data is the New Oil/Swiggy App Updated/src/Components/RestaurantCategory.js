import RestaurantItemCategory from "./RestaurantItemCategory";
import { useState } from "react";

const RestaurantCategory = ({ data, showItem, setShowIndex, dummy }) => {

    // Create a state variable to hide and show the RestaurantItemCategory
    // const [showItem, setShowItems] = useState(false)

    // Show and hide the RestaurantItemCategory on the handleClick function call
    const handleClick = ()=>{
        // setShowItems(!showItem)
        setShowIndex();
    }

    // console.log("Data", data);
    return (
        <div>
            {/* Header */}
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">
                        {data.title} ({data.itemCards.length})
                    </span>
                    <span>{showItem ? "⬆️": "⬇️"}</span>
                </div>

                {/* Show the ItemCategory on clicking the Header of the Restaurant Items */}
                {showItem && <RestaurantItemCategory items={data.itemCards} dummy={dummy} />}          
            
            </div>
        </div>
    );
};

export default RestaurantCategory;