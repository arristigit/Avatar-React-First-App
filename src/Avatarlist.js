import React from 'react';

const Avatarlist = (props) => {
    return (
        <div className="avatar_style ma4 bg-light-purple dib pa3 tc grow shadow-10">
            {/* dib - Display In-line Block */}
            <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="avtar img1" />
            <h1>{props.name}</h1>
            <p>{props.work}</p>
        </div>
    )
}
export default Avatarlist;