import React from "react";
import "./style.css";

export default function Section({children}) {
    return(
        <div className="section">
            {children}
        </div>
    )
}