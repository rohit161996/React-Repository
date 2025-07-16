import RestaurantCard, { withOpenLabel } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import TopChain from './TopChain'
import { Link } from "react-router-dom";
import constants from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
// import MOCK_DATA from "../Components/mocks/mockResListData.json"

// Functional Component with the arrow function
const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    // const [listOfRestaurants, setListOfRestaurants] = useState(MOCK_DATA);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const RestaurantCardOpen = withOpenLabel(RestaurantCard);
    const { setUserName } = useContext(UserContext);
    const { loggedInUser } = useContext(UserContext);

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
            const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
            // console.log(restaurants);

            // Update the list of restaurant cards with the live data
            setListOfRestaurants(restaurants || []);
            setFilteredRestaurants(restaurants || []);
        } catch (err) {
            console.log("Error Fetching Swiggy data:", err);
        }
    };

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) return (<h1 className="font-bold text-center text-2xl p-4 m-4">Check Your Internet Connection!!!</h1>);

    return (listOfRestaurants.length === 0) ?
        (<Shimmer />) :
        (
            <div className="body">
                <div className="flex justify-center items-center">
                    {/* Search Bar */}
                    <div className="search m-4 p-4 flex items-center">
                        <input
                            className="border border-solid border-black p-2 rounded-xl"
                            type="text"
                            value={searchText}
                            data-testid="searchInput"
                            onChange={(e) => {
                                // whenever the input text changes update the state variable
                                setSearchText(e.target.value);
                            }}
                        />
                        <button className="m-4 px-4 py-2 bg-green-200 flex items-center rounded-lg cursor-pointer hover:bg-green-400"
                            onClick={() => {
                                // Filter the restaurant cards and update the UI
                                // searchText
                                // console.log(searchText);
                                const filteredRestaurant = listOfRestaurants.filter(
                                    // (res) => res.info.name === searchText
                                    // convert both the search option and the name to lowercase
                                    (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                                );
                                setFilteredRestaurants(filteredRestaurant);
                            }}
                        >
                            Search
                        </button>
                    </div>

                    {/* Button to filter the restaturants */}
                    <div>
                        <button
                            className="m-4 px-4 py-2 bg-gray-200 flex items-center rounded-lg cursor-pointer hover:bg-gray-400"
                            onClick={() => {
                                // Filter logic to filter the restaurants on button click
                                const filteredList = listOfRestaurants.filter(
                                    (res) => res.info.avgRating > 4
                                );
                                setFilteredRestaurants(filteredList);
                            }}>
                            Top Rated Restaurants
                        </button>
                    </div>

                    {/* User Name Should Change on writing text in this Text Box */}
                    <div>
                        <label htmlFor="">
                            UserName :
                        </label>
                        <input type="text"
                            className="border border-black p-2 rounded-xl"
                            value={loggedInUser}
                            onChange={(event) => setUserName(event.target.value)} />
                    </div>
                </div>

                <div className="text-3xl font-extrabold mr-60 ml-60">
                    <TopChain />
                </div>

                {/* <div className="res-container flex flex-wrap mr-60 ml-60 pb-40"> */}
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 mx-auto max-w-7xl pb-40">
                    {
                        filteredRestaurants.map((restaurant) => (
                            <Link
                                to={"/restaurants/" + restaurant.info.id}
                                key={restaurant.info.id}>
                                {/* Add open label */
                                    restaurant.info.isOpen ?
                                        <RestaurantCardOpen resData={restaurant} /> :
                                        <RestaurantCard resData={restaurant} />
                                }
                            </Link>
                        ))
                    }
                </div>
            </div>
        );
};

export default Body;