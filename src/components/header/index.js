import React from "react";
import "./style.css";

export default function Header({bkgdImg, children}) {

    return(
        <div className="header" style={{
            backgroundImage:`url(${bkgdImg})`
        }}>
            {/* <img src={imgSrc} alt={imgAlt} /> */}
            {children}
        </div>
    )
}