import React, { useState } from "react";

import ResultContext from "./ResultContext";

const ResultState = (props) => {
    const [area, setArea] = useState("demo")

    const handleOnChange = (e) => {
        e.preventDefault()
        
    }

    return (
        <ResultContext.Provider value={{ area, setArea }}>
            {props.children}
        </ResultContext.Provider>
    )
}

export default ResultState