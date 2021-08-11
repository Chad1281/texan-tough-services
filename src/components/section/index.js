import React from "react";
import "./style.css";

export default function Section({sectionClass, bkgdImg, children}) {
    return(
        <div className={sectionClass} style={{ backgroundImage:{bkgdImg} }}>
            {children}
        </div>
    )
}