import React from 'react'
import { Spin } from 'antd';

export default function Loader() {
    return (
        <div style={{width: "100vw", height: "200px"}}>
            <Spin size="large" />
        </div>
    )
}
