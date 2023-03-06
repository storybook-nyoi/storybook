import React from 'react';

export default function ListItem (props) {
    return (
        <div>
            <button className="btn btn-primary">{props.name}</button>
        </div>
    )
}