import React from 'react'
import ImageCard from './ImageCard'

const SearchResultsImages = (props) => {

    const images = props.images.map(image => {
        return <ImageCard image={image} key={image.id} />

    })

    return (
        <div className='p-1'>
            {images}
        </div>
    )
}

export default SearchResultsImages