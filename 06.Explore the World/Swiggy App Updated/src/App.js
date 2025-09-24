import React from "react";
import ReactDOM from "react-dom/client";
// Named Export
import { Header } from '/src/Components/Header';
import Body from '/src/Components/Body';
import Footer from "/src/Components/Footer";

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
