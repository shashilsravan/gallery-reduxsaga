import React from 'react'
import ImageCard from '../helpers/ImageCard';
import './ImagesContainer.css'

export default function ImagesContainer({items, handleDelete, handleEdit}) {
    return (
        <div className="imagesContainer">
            {items && items.length > 0 && items.map((eachItem) => (
                <ImageCard key={eachItem._id} item={eachItem} 
                    handleDelete={handleDelete} handleEdit={handleEdit} />
            ))}
        </div>
    )
}
