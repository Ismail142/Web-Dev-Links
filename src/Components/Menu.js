import { useState, useEffect} from "react";
import "../Styles/Menu.css";

function Menu(props) {
   const showMenu = () => {
      document.querySelector("body").classList.toggle("overflow");
      document.querySelector(".show-menu-parent").classList.toggle("activate");
   };

   const [scroll, setScroll] = useState("header");

   const listenScrollEvent = () => {
      window.scrollY > 200 ? setScroll("header stick") : setScroll("header");
   };

   useEffect(() => {
      window.addEventListener("scroll", listenScrollEvent);
      return () => window.removeEventListener("scroll", listenScrollEvent);
   });
   
   return (
      <div>
         <div className={scroll}>
            <div className="mobile-menu" onClick={showMenu}>
               <span className="menu"></span>
               <span className="menu"></span>
               <span style={{ marginBottom: 0 }} className="menu"></span>
               <p>Menu</p>
            </div>
         </div>
         <div className="show-menu-parent">
            <div className="close-button" onClick={showMenu}>
               <p>&times;</p>
            </div>
            <div className="show-menu">
               <div className="show-menu-content">
                  <h3>Menu</h3>
                  <div className="show-menu-container">
                     {props.categories.map((category, index) => {
                        let href = "#" + category;
                        return (
                           <a
                              href={href}
                              className="show-menu-col"
                              onClick={showMenu}
                              key={index}
                           >
                              <p>{category}</p>
                           </a>
                        );
                     })}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Menu;
