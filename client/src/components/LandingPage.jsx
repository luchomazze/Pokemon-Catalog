import React from "react";
import {Link} from "react-router-dom"
import styles from "./styles/LandingPage.module.css"

export default function LandingPage() {
    return (
        <div className={styles.Landingpage}>
            <img className={styles.imagen} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png
" alt="" high="1000px" width="1000px"/>
            <h1>Queres ser un maestro pokemon en 4 meses?</h1>
            <h3>En PokeAcademy invertimos en vos</h3>
            <Link to="/home">
                <button className={styles.button}>
            <div className={styles.pokeball}></div>

                </button>
            </Link>
        </div>
    )
}
