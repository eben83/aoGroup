import React, {useEffect, useState} from "react";
import axios from 'axios'
import Heading from "../components/heading";

const Work = () => {

    const [photos, setPhotos] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=9')
        .then(res => {
            setPhotos(res.data)
        }) .catch (err => {
            console.log(err)
        })
    })
    return (
        <>
            <Heading title="Our Work" text='What we have done for people' />
            
            <div className='d-flex flex-wrap w-50 m-auto mb-5'>
                {photos.map( photo => (
                    <img className='p-1 d-flex items-center' src={photo.thumbnailUrl} alt={photo.title}/>
                ))}
            </div>
        </>
    )
}

export default Work