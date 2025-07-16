import constants from "../utils/constants";
// Basic Restaurant Card
const RestaurantCard = (props) => {
    const { resData } = props;

    // console.log(resData);

    // Optional Chaining
    const { cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        areaName,
        costForTwo
    } = resData?.info;

    return (
        <div
            data-testid="resCard"
            className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 h-full flex flex-col justify-between">
                <img className="rounded-lg w-[250px]"
                    alt="res-logo"
                    src={
                        // In the utils/constants.js file
                        constants.CDN_URL + cloudinaryImageId} />
                <div className="res-content">
                    <h3 className="font-bold py-4 text-l">{name}</h3>
                    <h4 className="pl-2">{avgRating}</h4>

                    {/* Array's function to arrange the number with , */}
                    <h4 className="pl-2">{cuisines.join(",")}</h4>
                    <p className="pl-2">{areaName}</p>
                    <p className="pl-2">{costForTwo}</p>
                </div>
        </div>
    );
};

// Higher Order Component which takes restaurant card as an input 
// and gives the enhanced restaurant card.
// Input - RestaurantCard
// Output - Open Restaurant Card
export const withOpenLabel = (RestaurantCard) => {
    // withOpenLabel takes RestaurantCard and add the props to it and sends 
    // the Restaurant Card back -> Pure Functions
    return (props) => {
        // return JSX
        return (
            <div className="h-full flex flex-col justify-between">
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
                    Open
                </label>
                <RestaurantCard {...props} />
            </div>
        );
    }
}
export default RestaurantCard;