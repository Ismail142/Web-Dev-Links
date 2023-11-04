import "../../Styles/Card.css";
import jsonData from "../JSON/data.json";

function Card(props) {
   const imgUrl = "/assets/Images/colors/";
   const datas = jsonData[props.title];

   const content = (params,key) => {
      return (
         <div className="col" key={key}>
            <a
               href={params.url}
               className="col-link"
               target="_blank"
               rel="noreferrer"
            >
               <div className="col-img">
                  <img
                     src={imgUrl + "/" + params.imageName}
                     alt={params.imageName}
                  />
               </div>
               <div className="col-title">
                  <h3>{params.title}</h3>
               </div>
               <div className="col-description">
                  <p>{params.description}</p>
               </div>
            </a>
         </div>
      );
   };

   return (
      <div className="card" id={props.title}>
         <h1>{props.title.toUpperCase()}</h1>
         <div className="container">
            {datas.map((data, index) => {
               return content(data,index);
            })}
         </div>
      </div>
   );
}
export default Card;
