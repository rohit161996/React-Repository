import React from "react";
import ReactDOM from "react-dom/client";

/*
### Components in Our App
1. Header
   1.1. Logo 
   1.2. Nav Items

2. Body
   2.1. Search
   2.2. Restaurant  Container
        2.2.1. Restaurant Card
               2.2.1.1. Image
               2.2.1.2. Name of Restaurant
               2.2.1.3. Star Rating 
               2.2.1.4  Cuisine etc.

3. Footer
   3.1. Copyright
   3.2. Links
   3.3. Address
   3.4. Contact

*/

// Functional Component with the arrow function
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://thumbs.dreamstime.com/b/food-delivery-logo-template-vector-icon-illustration-170869600.jpg" alt="" />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    );
}

// Array of Data
const resObj = [
    {
        info: {
            id: "804724",
            name: "KFC",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/9dbea919-e4a4-4a05-9708-0476ad6dbf35_804724.JPG",
            locality: "Kaccha Bagh",
            areaName: "Chandni Chowk",
            costForTwo: "₹400 for two",
            cuisines: [
                "Burgers",
                "Rolls & Wraps",
                "Fast Food"
            ],
            avgRating: 4.1,
            parentId: "547",
            avgRatingString: "4.1",
            totalRatingsString: "98",
            sla: {
                deliveryTime: 47,
                lastMileTravel: 1.3,
                serviceability: "SERVICEABLE",
                slaString: "45-50 mins",
                lastMileTravelString: "1.3 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2025-05-27 23:59:00",
                opened: true
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "Rxawards/_CATEGORY-Burger.png",
                        description: "Delivery!"
                    }
                ]
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "Delivery!",
                                    imageId: "Rxawards/_CATEGORY-Burger.png"
                                }
                            }
                        ]
                    },
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "40% OFF",
                subHeader: "UPTO ₹80"
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--"
                }
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        analytics: {
            context: "seo-data-59684207-761d-4d2e-98f3-fc718b8f6141"
        },
        cta: {},
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        info: {
            id: "967051",
            name: "McDonald's",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/6b40cfcf-8901-49c9-af50-f44066d319d4_967051.JPG",
            locality: "Omaxe Mall",
            areaName: "Chandni Chowk",
            costForTwo: "₹400 for two",
            cuisines: [
                "American",
                "Fast Food"
            ],
            avgRating: 4.2,
            parentId: "630",
            avgRatingString: "4.2",
            totalRatingsString: "158",
            sla: {
                deliveryTime: 41,
                lastMileTravel: 1.3,
                serviceability: "SERVICEABLE",
                slaString: "40-45 mins",
                lastMileTravelString: "1.3 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2025-05-27 23:00:00",
                opened: true
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹91"
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--"
                }
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        analytics: {
            context: "seo-data-59684207-761d-4d2e-98f3-fc718b8f6141"
        },
        cta: {
            link: "https://www.swiggy.com/city/delhi/mcdonalds-omaxe-mall-chandni-chowk-rest967051",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        info: {
            id: "807783",
            name: "Burger King",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/24/1c5ccfb1-dca7-4919-9977-964275d6db05_807783.jpg",
            locality: "Omaxe Mall",
            areaName: "Chandni Chowk",
            costForTwo: "₹350 for two",
            cuisines: [
                "Burgers",
                "American"
            ],
            avgRating: 4.3,
            parentId: "166",
            avgRatingString: "4.3",
            totalRatingsString: "632",
            sla: {},
            availability: {
                nextCloseTime: "2025-05-27 23:59:00",
                opened: true
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "60% OFF",
                subHeader: "UPTO ₹120"
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--"
                }
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        analytics: {
            context: "seo-data-59684207-761d-4d2e-98f3-fc718b8f6141"
        },
        cta: {
            link: "https://www.swiggy.com/city/delhi/burger-king-omaxe-mall-chandni-chowk-rest807783",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        info: {
            id: "1098045",
            name: "Theobroma",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/20/e70addd5-c9c4-4e7b-a6a4-4ab8588a5866_1098045.jpg",
            locality: "Eldeco Junction",
            areaName: "Kashmiri Gate Metro Station",
            costForTwo: "₹300 for two",
            cuisines: [
                "Bakery",
                "Desserts",
                "Beverages"
            ],
            avgRating: 4.6,
            parentId: "1040",
            avgRatingString: "4.6",
            totalRatingsString: "<3",
            sla: {
                deliveryTime: 40,
                lastMileTravel: 3,
                serviceability: "SERVICEABLE",
                slaString: "40-45 mins",
                lastMileTravelString: "3.0 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2025-05-27 23:00:00",
                opened: true
            },
            badges: {},
            isOpen: true,
            aggregatedDiscountInfoV2: {},
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--"
                }
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        analytics: {
            context: "seo-data-59684207-761d-4d2e-98f3-fc718b8f6141"
        },
        cta: {
            link: "https://www.swiggy.com/city/delhi/theobroma-eldeco-junction-kashmiri-gate-metro-station-rest1098045",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        info: {
            id: "38925",
            name: "Domino's Pizza",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/17/230e09a8-903f-42eb-b04a-f8abade1559b_38925.JPG",
            locality: "Netaji Subhash Marg",
            areaName: "Daryaganj",
            costForTwo: "₹400 for two",
            cuisines: [
                "Pizzas",
                "Italian",
                "Pastas",
                "Desserts"
            ],
            avgRating: 4.3,
            parentId: "2456",
            avgRatingString: "4.3",
            totalRatingsString: "12K+",
            sla: {
                deliveryTime: 25,
                lastMileTravel: 7.5,
                serviceability: "SERVICEABLE",
                slaString: "20-25 mins",
                lastMileTravelString: "7.5 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2025-05-27 23:59:00",
                opened: true
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹75"
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--"
                }
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        analytics: {
            context: "seo-data-59684207-761d-4d2e-98f3-fc718b8f6141"
        },
        cta: {
            link: "https://www.swiggy.com/city/delhi/dominos-pizza-netaji-subhash-marg-daryaganj-rest38925",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        info: {
            id: "804071",
            name: "Pizza Hut",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/22/45f8d538-70e2-429d-8b4a-e942d657a7d9_804071.JPG",
            locality: "H.C. Sen Marg",
            areaName: "Omaxe ChandniChowk",
            costForTwo: "₹350 for two",
            cuisines: [
                "Pizzas"
            ],
            avgRating: 4.2,
            parentId: "721",
            avgRatingString: "4.2",
            totalRatingsString: "310",
            sla: {
                deliveryTime: 42,
                lastMileTravel: 1.4,
                serviceability: "SERVICEABLE",
                slaString: "40-45 mins",
                lastMileTravelString: "1.4 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2025-05-27 23:00:00",
                opened: true
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹79"
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--"
                }
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        analytics: {
            context: "seo-data-59684207-761d-4d2e-98f3-fc718b8f6141"
        },
        cta: {
            link: "https://www.swiggy.com/city/delhi/pizza-hut-h-c-sen-marg-omaxe-chandnichowk-rest804071",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        info: {
            id: "831065",
            name: "Chinese Wok",
            cloudinaryImageId: "f996b31033fd07603bfb28cb4e526683",
            locality: "Chandni Chowk",
            areaName: "Omaxe mall",
            costForTwo: "₹250 for two",
            cuisines: [
                "Chinese",
                "Asian",
                "Tibetan",
                "Desserts"
            ],
            avgRating: 4.1,
            parentId: "61955",
            avgRatingString: "4.1",
            totalRatingsString: "351",
            sla: {
                deliveryTime: 51,
                lastMileTravel: 1.4,
                serviceability: "SERVICEABLE",
                slaString: "50-55 mins",
                lastMileTravelString: "1.4 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2025-05-27 23:00:00",
                opened: true
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹129"
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--"
                }
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        analytics: {
            context: "seo-data-59684207-761d-4d2e-98f3-fc718b8f6141"
        },
        cta: {
            link: "https://www.swiggy.com/city/delhi/chinese-wok-chandni-chowk-omaxe-mall-rest831065",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        info: {
            id: "798674",
            name: "Wow! Momo",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/21/62282c4d-3894-489a-bfb8-733037284978_798674.jpg",
            locality: "Chandni Chowk",
            areaName: "Omaxe Chowk",
            costForTwo: "₹300 for two",
            cuisines: [
                "Momos",
                "Chinese",
                "fastfood",
                "Asian",
                "Beverages"
            ],
            avgRating: 4,
            parentId: "1776",
            avgRatingString: "4.0",
            totalRatingsString: "121",
            sla: {
                deliveryTime: 46,
                lastMileTravel: 1.3,
                serviceability: "SERVICEABLE",
                slaString: "45-50 mins",
                lastMileTravelString: "1.3 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2025-05-27 23:59:00",
                opened: true
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "Rxawards/_CATEGORY-Chinese.png",
                        description: "Delivery!"
                    },
                    {
                        imageId: "Ratnesh_Badges/Rx_Awards_2025/Momo.png",
                        description: "Delivery!"
                    }
                ]
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "Delivery!",
                                    imageId: "Rxawards/_CATEGORY-Chinese.png"
                                }
                            },
                            {
                                attributes: {
                                    description: "Delivery!",
                                    imageId: "Ratnesh_Badges/Rx_Awards_2025/Momo.png"
                                }
                            }
                        ]
                    },
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹99"
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--"
                }
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        analytics: {
            context: "seo-data-59684207-761d-4d2e-98f3-fc718b8f6141"
        },
        cta: {
            link: "https://www.swiggy.com/city/delhi/wow-momo-chandni-chowk-omaxe-chowk-rest798674",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }];

const RestaurantCard = (props) => {
    const { resData } = props;

    const styleCard = {
        backgroundColor: "lightgreen"
    }

    // Optional Chaining
    const { cloudinaryImageId, name, avgRating, cuisines, areaName, costForTwo } = resData?.info;

    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo"
                alt="res-logo"
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{avgRating}</h4>

            {/* Array's function to arrange the number with , */}
            <h4>{cuisines.join(",")}</h4>
            <h4>{areaName}</h4>
            <h4>{costForTwo}</h4>
        </div>
    );
};

// Functional Component with the arrow function
const Body = () => {
    return (
        <div className="body">
            <div className="Search">Search</div>
            <div className="res-container">
                {/* Applying the map to loop over the data */}
                {
                resObj.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant.info.id}  // Use a unique identifier
                        resData={restaurant}
                    />
                ))}
            </div>
        </div>
    );
};

const Footer = () => {
    return (
        <div className="Footer">
            <h1>Footer</h1>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
