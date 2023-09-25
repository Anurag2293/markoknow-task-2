import React, { useContext } from 'react'
import resultContext from '../context/ResultContext'

const Result = () => {
    const { area } = useContext(resultContext)

    return (
        <div>
            <h1>Area he visited for marketing</h1>
            <h1>{area}</h1>
        </div>
    )
}

export default Result