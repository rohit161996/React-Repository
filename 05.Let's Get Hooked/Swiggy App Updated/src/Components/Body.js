import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockdata";
import { useState } from "react";

// Functional Component with the arrow function
const Body = () => {

    // Local State Variable
    // const [listOfRestaurants, setListOfRestaurants] = useState([
    //     {
    //         info: {
    //             id: "804724",
    //             name: "KFC",
    //             cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/9dbea919-e4a4-4a05-9708-0476ad6dbf35_804724.JPG",
    //             areaName: "Chandni Chowk",
    //             costForTwo: "₹400 for two",
    //             cuisines: [
    //                 "Burgers",
    //                 "Rolls & Wraps",
    //                 "Fast Food"
    //             ],
    //             avgRating: 3.5
    //         },
    //     },
    //     {
    //         info: {
    //             id: "967051",
    //             name: "McDonald's",
    //             cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/6b40cfcf-8901-49c9-af50-f44066d319d4_967051.JPG",
    //             areaName: "Chandni Chowk",
    //             costForTwo: "₹400 for two",
    //             cuisines: [
    //                 "American",
    //                 "Fast Food"
    //             ],
    //             avgRating: 4.2
    //         }
    //     },
    //     {
    //         info: {
    //             id: "807783",
    //             name: "Burger King",
    //             cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/24/1c5ccfb1-dca7-4919-9977-964275d6db05_807783.jpg",
    //             areaName: "Chandni Chowk",
    //             costForTwo: "₹350 for two",
    //             cuisines: [
    //                 "Burgers",
    //                 "American"
    //             ],
    //             avgRating: 4.3,
    //         },
    //     }
    // ]);

    const[listOfRestaurants, setListOfRestaurants] = useState(resObj);

    // Normal JS Variable
    // let listOfRestaurants

    // Normal JS Variable
    let listOfRestaurants2 = [
        {
            info: {
                id: "804724",
                name: "KFC",
                cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/9dbea919-e4a4-4a05-9708-0476ad6dbf35_804724.JPG",
                areaName: "Chandni Chowk",
                costForTwo: "₹400 for two",
                cuisines: [
                    "Burgers",
                    "Rolls & Wraps",
                    "Fast Food"
                ],
                avgRating: 3.5
            },
        },
        {
            info: {
                id: "967051",
                name: "McDonald's",
                cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/6b40cfcf-8901-49c9-af50-f44066d319d4_967051.JPG",
                areaName: "Chandni Chowk",
                costForTwo: "₹400 for two",
                cuisines: [
                    "American",
                    "Fast Food"
                ],
                avgRating: 4.2
            }
        },
        {
            info: {
                id: "807783",
                name: "Burger King",
                cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/24/1c5ccfb1-dca7-4919-9977-964275d6db05_807783.jpg",
                areaName: "Chandni Chowk",
                costForTwo: "₹350 for two",
                cuisines: [
                    "Burgers",
                    "American"
                ],
                avgRating: 4.3,
            },
        }
    ];

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    // Filter logic to filter the restaurants on button click
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4
                    );
                    setListOfRestaurants(filteredList);
                }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {/* Applying the map to loop over the data */}
                {
                    listOfRestaurants.map((restaurant) => (
                        <RestaurantCard
                            key={restaurant.info.id}  // Use a unique identifier
                            resData={restaurant}
                        />
                    ))}
            </div>
        </div>
    );
};

export default Body;