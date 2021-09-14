import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/Header.module.css";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <nav>
   <Link to="/home"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png
" alt="" high="100px" width="100px"/></Link>
     
     <ul>
        <li>
          <Link to="/create"> <img src=" https://fontmeme.com/permalink/210913/9bb8b855c15c20565c93abd19189106a.png
" alt="" high="100px" width="120px"/></Link>
         
        </li>
      
      </ul>
      <div className={styles.searchBar}>
        <SearchBar />
      </div>
    </nav>
  );
}
