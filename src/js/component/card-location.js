import React, { Component } from "react";
import { Link } from "react-router-dom";

export const LocatExtend = ({ location }) => {



    return (
        <>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://picsum.photos/300/300?random" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{location}</h5>
                            <p className="card-text" >Tipo:</p>
                            <p className="card-text" >Dimensión:</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}; 