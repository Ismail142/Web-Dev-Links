import "../Styles/Footer.css";

function Footer() {
   const date = (
      <strong>
         Nov<sup>6th</sup> , 2023
      </strong>
   );
   return (
      <footer>
         <p>
            Want to contribute to Web Dev Links? Check out the{" "}
            <a
               href="https://github.com/Ismail142/Web-Dev-Links"
               className="link"
               target="_blank"
               rel="noreferrer"
            >
               Github repository.
            </a>
         </p>
         <p>Site last updated on {date}</p>
         <p>Made with ❤️ in Ghana.</p>
      </footer>
   );
}
export default Footer;
