import React from 'react'
import { Card, Button } from 'antd';
import './imageCard.css'
import CustomModal from './CustomModal';

export default function ImageCard({item, handleDelete, handleEdit}) {
    const { Meta } = Card;

    const handleClick = () => {
        handleDelete(item._id)
    }
    return (
        <div className="imageCard">
            <Card hoverable style={{ width: 240 }}
                cover={<img alt={item.name} src={item.url} />} >
                <Meta title={item.name} description={`Uploaded on ${(item.createdAt).substring(0, 10)}`} />
            </Card>
            <div className="buttonGroup">
                <CustomModal handleEdit={handleEdit} item={item} className="width-50" />
                <Button onClick={handleClick}>Delete</Button>
            </div>
        </div>
    )
}
