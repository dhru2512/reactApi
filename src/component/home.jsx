import React from "react";
import About from "./main/about";
import Banner from "./main/banner";
import Post from "./main/post";

function Home() {

    return (
        <div className="container mt-5">
            <Banner />
            <Post />
            <About />
        </div>
    )
}

export default Home;