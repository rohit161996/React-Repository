import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import TopChain from './TopChain'
import { Link } from "react-router-dom";
import constants from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

// Functional Component with the arrow function
const Body = () => {

    // Local State Variable
    // const [listOfRestaurants, setListOfRestaurants] = useState(resObj);

    //  Initialize with the empty array and take data from the fetch() api
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    // State variable for the restaurant search mapped with the input box
    const [searchText, setSearchText] = useState("");

    // Rendering the component on every letter typed in the input box bind to the searchText stateVariable
    // Whenever the state variable updates, react triggers the reconicliation cycle(re-renders) the component.
    console.log("Body Rendered");

    // After rendering the component useEffect will be called and the fetchData() will be called
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            // Fetch the data from the backend with the fetch() superpower
            const data = await fetch(
                constants.CORS_PLUGIN +
                encodeURIComponent(constants.BODY_URL)
            );

            // Convert the data to the json format
            const json = await data.json();
            console.log(json);

            const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
            console.log(restaurants);

            // Update the list of restaurant cards with the live data
            setListOfRestaurants(restaurants || []);
            setFilteredRestaurants(restaurants || []);
        } catch (err) {
            console.log("Error Fetching Swiggy data:", err);
        }
    };

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) return (<h1>Check Your Internet Connection!!!</h1>);

    return (listOfRestaurants.length === 0) ?
        (<Shimmer />) :
        (
            <div className="body">
                <div className="filter flex items-center">
                    {/* Search Bar */}
                    <div className="search m-4 p-4 flex items-center">
                        <input
                            className="border border-solid border-black"
                            type="text"
                            value={searchText}
                            onChange={(e) => {
                                // whenever the input text changes update the state variable
                                setSearchText(e.target.value);
                            }}
                        />
                        <button className="m-4 px-4 py-2 bg-green-200 flex items-center rounded-lg"
                            onClick={() => {
                                // Filter the restaurant cards and update the UI
                                // searchText
                                console.log(searchText);
                                const filteredRestaurant = listOfRestaurants.filter(
                                    // (res) => res.info.name === searchText
                                    // convert both the search option and the name to lowercase
                                    (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                                );
                                setFilteredRestaurants(filteredRestaurant);
                            }}
                        >Search</button>
                    </div>

                    {/* Button to filter the restaturants */}
                    <div>
                        <button className="m-4 px-4 py-2 bg-gray-200 flex items-center rounded-lg"
                            onClick={() => {
                                // Filter logic to filter the restaurants on button click
                                const filteredList = listOfRestaurants.filter(
                                    (res) => res.info.avgRating > 4
                                );
                                setFilteredRestaurants(filteredList);
                            }}>Top Rated Restaurant</button>
                    </div>

                </div>

                <TopChain />

                {/* Restaurant Cards in the Body Component */}
                <div className="res-container flex flex-wrap mr-60 ml-60">
                    {/* Applying the map to loop over the data */}
                    {
                        filteredRestaurants.map((restaurant) => (
                            <Link
                                to={"/restaurants/" + restaurant.info.id}
                                key={restaurant.info.id}>
                                <RestaurantCard
                                    
                                    // When a parent tag is applied key should be in the parent
                                    // key={restaurant.info.id}  // Use a unique identifier
                                    resData={restaurant}
                                />
                            </Link>
                        ))
                    }
                </div>
            </div>
        );
};

export default Body;