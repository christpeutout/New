import React, { useEffect } from 'react';
import axios from "axios";
const Country = () => {
    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all").then((res)=> console.log);
    },[ ]
    )
    return (
        <div className="countries">
            <h1>COUNTRIES   </h1>
        </div>
    );
};

export default Country;