import React from 'react'

export default function Card({name, image, types, id}) {
    return (
        <div>
            <h3>{name}</h3>
            <h5>{types?.map(type => <a> {type}</a>)}</h5>
            <img src={image} alt="image not found" width="150px" height="150px" key={id}/>
            {/* <img src={image} alt="image not found" /> */}

        </div>
    )
}
