import React from "react";

function BgGrid() {
    return (
        <div className="absolute inset-0 z-0">
            <div className="bg-grid-pattern-gradient relative inset-0 z-0 h-[25%] bg-repeat">
            </div>
            <div className="bg-grid-pattern-solid relative inset-0 z-0 h-[75%] bg-repeat">
            </div>
        </div>
    )
}


export default BgGrid;