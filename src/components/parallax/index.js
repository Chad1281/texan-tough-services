import React from "react";
import "./style.css";

export default function Parallax({custClass, bkgdImg, children}) {
    return(
        <div className={custClass} style={{
            backgroundImage:`url(${bkgdImg})`
        }}>
            {children}
        </div>
    )
}