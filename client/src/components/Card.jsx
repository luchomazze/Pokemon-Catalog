import React from 'react'
import styles from "./styles/Card.module.css"



export default function Card({name, image, types, id}) {
    return (
        <div className={styles.card} key={id}>
            <div className="card_name">
            <h3>{name}</h3>
            </div>
            <div className="card_img">
            <img className={styles.imagen} src={image} alt="not found" width="150px" height="150px" key={id}/>
            </div>
            <div >
            <h5>{types?.map(type => <div className={styles.types}> {type}</div>)}</h5>
            </div>
            {/* <img src={image} alt="image not found" /> */}

        </div>
    )
}
