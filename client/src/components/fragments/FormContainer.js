import React, { useState } from 'react'
import './FormContainer.css'
import { Input, Button, Space, message } from 'antd';

export default function FormContainer({ handlePost }) {
    const [url, setUrl] = useState("")
    const [name, setName] = useState("")
    const handleClick = () => {
        if (url === "" || name === ""){
            message.error(`Please fill both values`)
        }
        else{
            handlePost(url, name)
            setUrl("")
            setName("")
            message.success("successfully submitted")
        }
    }
    return (
        <div className="formContainer">
            <Space>
                <Input placeholder="Image Url" allowClear value={url}
                    onChange={(e) => setUrl(e.target.value)} />
                <Input placeholder="Image Name" allowClear value={name}
                    onChange={(e) => setName(e.target.value)} />
                <Button type="primary" 
                    onClick={handleClick}> Submit </Button>
            </Space>
        </div>
    )
}
