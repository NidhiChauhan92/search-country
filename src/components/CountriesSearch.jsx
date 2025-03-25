import React, { useEffect } from "react";
import { useState } from "react";
// import axios from "axios";
import Card from "./Card";




function CountriesSearch() {

    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState("");

    const api = "https://countries-search-data-prod-812920491762.asia-south1.run.app/countries";



    useEffect(() => {
        fetch(api) // API URL
            .then((res) => res.json()) // Convert response to JSON
            .then((data) => {
                setCountries(data);
                // console.log(data);

            })
            .catch((error) => console.error("Error fetching data: ", error));
    }, []);

    // console.log(countries);

    const filteredCountries = countries.filter(country =>
        country.common?.toLowerCase().includes(search.toLowerCase())
    );

    //   console.log(filteredCountries);
    return (
        <>

            <header style={{
                width: "100vw",
                height: "50px",
                backgroundColor: "grey",
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center"


            }}>
                <input style={{
                    width: "480px",
                    height: "20px"

                }} type="text" placeholder="Search for Contries.." value={search} onChange={(e) => setSearch(e.target.value)} />
            </header>
            <div className="countryCard" style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                justifyContent: "center",
                marginTop: "30px"

            }}>
                {filteredCountries.length === 0 ? (
                   <span></span>

                ) : (
                    filteredCountries.map((item) => (
                        <Card flag={item.png} name={item.common} />
                    ))
                )}

            </div>
        </>

    )



}

export default CountriesSearch;