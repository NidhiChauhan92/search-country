import React from "react";

function Card({ common , png }) {
    return (
        <>
           
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    border: "2px solid black",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    borderRadius: "5px",
                    height: "200px",
                    width: "200px",

                }}>
                    <img style={{
                        width: "100px",
                        textAlign: "center"
                    }} src={png} />
                    <h2>{common}</h2>
                </div>
            

        </>
    )

}

export default Card;