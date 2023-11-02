import React from "react";
import Images from "./images";
import BgGrid from "./bg-grid"

export default function Content() {
    return (
        <>
            <div className="relative p-10 pb-20">
                <BgGrid />
                <div className="relative flex flex-wrap gap-14 justify-center items-center z-10 top-10">
                    <Images/>
                </div>
            </div>
        </>
    )
} 