import React, { useEffect, useState } from "react";
import Card from "./Card";

function CountriesSearch() {
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState("");

    const api = "https://countries-search-data-prod-812920491762.asia-south1.run.app/countries";

    useEffect(() => {
        fetch(api)
            .then((res) => res.json())
            .then((data) => {
                console.log("Fetched Data:", data); // Debug API response
                setCountries(data);
            })
            .catch((error) => console.error("Error fetching data: ", error));
    }, []);

    // Filtering based on 'name.common'
    const filteredCountries = countries.filter(country =>
        country.name?.common?.toLowerCase().includes(search.toLowerCase())
    );

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
                }} type="text" 
                    placeholder="Search for Countries..."
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)} 
                />
            </header>

            <div className="countryCard" style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                justifyContent: "center",
                marginTop: "30px"
            }}>
                {filteredCountries.length > 0 ? (
                    filteredCountries.map((item, index) => (
                        <Card key={index} flag={item.flags?.png} name={item.name?.common} />
                    ))
                ) : ""}
            </div>
        </>
    );
}

export default CountriesSearch;
