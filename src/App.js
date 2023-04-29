import React, { useState } from 'react'
import Navbar from './components/NAVBAR'
import DisplayCards from './components/DisplayCards'
import apidata from './components/API'
import 'bootstrap/dist/css/bootstrap.css'

const App = () => {



    const [data, setData] = useState(apidata)

    function updateCategory(catg) {
        console.log('catg : ', catg)

        console.log("apidata : ", apidata);

        let newdata = apidata.filter(ele => {
            return ele.category.includes(catg)
        })

        console.log('newdata : ', newdata)

        setData(newdata)
    }


    

    return (
        <>
            <Navbar updateCategory={updateCategory} />
            <DisplayCards data={data} />
        </>
    )
}

export default App
