import { useState,useEffect } from "react";
import constants from "../utils/constants";

const TopChain = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    // After rendering the component useEffect will be called and the fetchData() will be called
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            // Fetch the data from the backend with the fetch() superpower
            const data = await fetch( 
                constants.CORS_PLUGIN + 
                encodeURIComponent(constants.BODY_URL));

            // Convert the data to the json format
            const json = await data.json();

            // Check console if the data is accessed or not.
            // console.log("Top Chain", json);

            const restaurants = json.data.cards[1].card.card.header.title;
            // const restaurants = json.data.cards[1].card.card.header.title;
            
            // console.log(restaurants);

            // Update the list of restaurant cards with the live data
            setListOfRestaurants(restaurants || []);
        } catch (err) {
            console.log("Error Fetching Swiggy data:", err);
        }
    };

    return (listOfRestaurants.length === 0) ? (<h1><strike>Top Chain Not Available</strike></h1>) : (
        <div className="topchain">
                <h3>{listOfRestaurants}</h3>
        </div>
    );
}

export default TopChain;
