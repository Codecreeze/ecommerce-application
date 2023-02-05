import React from "react";
import Footer from "../components/footer/Footer";
import ImageSlider from "../components/Front/ImageSlider";
import ProductList from "../components/Front/ProductList";
import NavBar from "../components/header/NavBar";
import Search from "../components/search/Search";


function Homepage() {
    return (
        <React.Fragment>
            <div style={{ background: "#ffcc66", minHeight: "90vh" }}>
                <NavBar />
                <Search />
                <ImageSlider />
            </div>
            <div>
                <ProductList />
                <Footer />
            </div>
        </React.Fragment>
    );
}

export default Homepage;
