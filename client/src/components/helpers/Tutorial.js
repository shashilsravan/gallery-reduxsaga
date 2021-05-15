import React from 'react'
import { Steps } from 'antd';

export default function Tutorial() {
    const { Step } = Steps;
    return (
        <div>
            <Steps direction="horizontal" current={0} responsive={true}>
                <Step title="Step-1" description="Upload your images on any website" />
                <Step title="Step-2" description="Copy the url of uploaded image" />
                <Step title="Step-3" description="Paste the url below and submit" />
            </Steps>
        </div>
    )
}
