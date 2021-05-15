import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { Input } from 'antd';

export default function CustomModal({item, handleEdit}) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [name, setName] = useState(item.name)
    const [url, setUrl] = useState(item.url)

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleClose = () => {
        setIsModalVisible(false);
    };

    const handleUpdate = () => {
        handleEdit({url, name}, item._id)
        setIsModalVisible(false)
    }
    return (
        <div>
            <Button className="width-50" onClick={showModal}>
                Edit
            </Button>
            <Modal title="Edit Image" visible={isModalVisible} onOk={handleClose} onCancel={handleClose}>
                <p>Edit Image name:</p>
                <Input placeholder="Enter Image name" value={name}
                onChange={(e) => setName(e.target.value)} />
                <p></p>
                <p>Edit Image url:</p>
                <Input placeholder="Enter Image url" value={url}
                onChange={(e) => setUrl(e.target.value)} />
                <p></p>
                <Button type="primary" onClick={handleUpdate}> Update </Button>
            </Modal>
        </div>
    )
}
