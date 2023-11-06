import "./Styles/App.css";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import Menu from "./Components/Menu";
import jsonData from "./Components/data.json";
import { inject } from '@vercel/analytics';

function App() {
   inject();
   
   const categories = [];
   for (let keys in jsonData){
      categories.push(keys);
   }
   
   return (
      <div>
         <Menu categories={categories}/>
         {categories.map((category, index) => (
            <Card title={category} key={index} jsonData={jsonData[category]}/>
         ))}
         <Footer/>
      </div>
   );
}

export default App;
