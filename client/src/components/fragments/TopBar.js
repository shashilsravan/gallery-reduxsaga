import React from 'react'
import './TopBar.css'
import Tutorial from '../helpers/Tutorial';

export default function TopBar() {
    
    return (
        <>
            <div className="topBar">
                SS Gallery
            </div>
            <div className="tutorial">
                <Tutorial />
            </div>
        </>
    )
}
