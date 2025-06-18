import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Header } from '/src/Components/Header';
import Body from '/src/Components/Body';
import Footer from "/src/Components/Footer";
import Contact from "../src/Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(()=> import("./components/About"))

const AppLayout = () => {
    return (
        <div className="app">
            <Header />

            {/* if path = / */}
            {/* <Body /> */}

            {/* if path = /about */}
            {/* <About /> */}

            {/* if path = /contact */}
            {/* <Contact /> */}

            <Outlet />

            <Footer />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <Suspense fallback={<h1>The Grocery Page is Loading!!!</h1>}>
                            <About />
                        </Suspense>,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />,
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>The Grocery Page is Loading!!!</h1>}>
                            <Grocery />
                        </Suspense>,
            },
        ],
        errorElement: <Error />,

    },
])


const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);

