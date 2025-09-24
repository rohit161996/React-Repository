import constants from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;

    const styleCard = {
        backgroundColor: "white"
    }

    // Optional Chaining
    const { cloudinaryImageId, name, avgRating, cuisines, areaName, costForTwo } = resData?.info;

    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo"
                alt="res-logo"
                src={
                    // In the utils/constants.js file
                    constants.CDN_URL + cloudinaryImageId} />
            <div className="res-content">
                <h3>{name}</h3>
                <h4>{avgRating}</h4>

                {/* Array's function to arrange the number with , */}
                <h4>{cuisines.join(",")}</h4>
                <p>{areaName}</p>
                <p>{costForTwo}</p>
            </div>
        </div>
    );
};

export default RestaurantCard;