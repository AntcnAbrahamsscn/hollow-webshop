import {  Outlet } from "react-router-dom";
import React from "react";



const Root = () => {
    return (
        <div >
            <main >
                <Outlet />
            </main>
           
        </div>
    );
};

export default Root;
