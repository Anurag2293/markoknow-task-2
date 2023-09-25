import React, { useContext } from 'react'
import resultContext from '../context/ResultContext'
import { Link } from 'react-router-dom'

const Home = () => {
    const {area, setArea} = useContext(resultContext)

    return (
        <>
            <h3>{"Area he visited yesterday for marketing"}</h3>
            <input name="myInput" value={area} onChange={(e) => {setArea(e.target.value)}} />
            <Link to={"/show-result"}>Next</Link>
        </>
    )
}

export default Home