import { useEffect, useState } from "react";
import constants from "./constants";

// It only fetches the data of the RestaurantMenu
// Making the API call and getting the data
const useRestaurantMenu = (resId) => {
    // Create state variable to hold the data
    const[resInfo, setResInfo] = useState(null);

    // Fetches the data, fetching the data only once so we will write empty square bracket
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            constants.CORS_PLUGIN + 
            constants.URL + 
            resId + 
            constants.REMAINING_URL
        );
        const json = await data.json();
        setResInfo(json.data);
    }

    return resInfo;
}

export default useRestaurantMenu;