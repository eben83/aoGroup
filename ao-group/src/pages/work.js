import React, {useEffect, useState} from "react";
import axios from 'axios'

const Work = () => {

    const [photos, setPhotos] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=9')
        .then(res => {
            console.log(res)
            setPhotos(res.data)
        }) .catch (err => {
            console.log(err)
        })
    })
    return (
        <>
            <div className="w3-container" style={{padding:"128px 16px"}} id="work">
                <h3 className="w3-center">OUR WORK</h3>
                <p className="w3-center w3-large">What we've done for people</p>
            </div>
            <div className='d-flex flex-wrap w-50 m-auto mb-5'>
                {photos.map( photo => (
                    <img className='p-1 d-flex items-center' src={photo.thumbnailUrl} alt={photo.title}/>
                ))}
            </div>
        </>
    )
}

export default Work