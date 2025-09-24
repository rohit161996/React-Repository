import { useState,useEffect } from "react";

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
                "https://corsproxy.io/?" +
                encodeURIComponent("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
            );

            // Convert the data to the json format
            const json = await data.json();

            // Check console if the data is accessed or not.
            // console.log(json);

            const restaurants = json.data.cards[0].card.card.header.title;
            // const restaurants = json.data.cards[1].card.card.header.title;
            
            console.log(restaurants);

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
