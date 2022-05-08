import React from "react";

const FourZeroFour = () => {
    return (
        <div className="p-5  text-center">
            <h1 className=" text-center text-2xl text-red-700 font-bold mt-2 m-5">
                Oops!!!404
            </h1>
            <div className="container mx-auto md:w-[40%]">
                <img src="four.png" alt="404"></img>
            </div>
            <h5 className="p-2">
                The requested URL was not found on this server.
            </h5>
        </div>
    );
};

export default FourZeroFour;
