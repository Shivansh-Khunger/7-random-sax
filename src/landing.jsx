import React from "react";

function Landing() {
    return (
        <section className="h-[25vh] flex justify-center items-center prose prose-xl min-w-full hover:drop-shadow-lg shadow-cyan-300">
            <h1 className="">7 random pics are ...</h1>
            <h4 className="text-primary">powered by <a className="text-primary" href="https://unsplash.com/" target="_blank">Unsplash</a></h4>
        </section>
    )
}

export default Landing;