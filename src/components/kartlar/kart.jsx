import React from "react";
import "./kart.css";
import Items from "./items";
const Kart=()=>{

    const list=[<Items/>,<Items/>,<Items/>,<Items/>,<Items/>,<Items/>,<Items/>];

    const getit = () => {
        return list.map((item, index) => (
          <div key={index} className="ss">
            {item}
          </div>
        ));
      };
    return<div>
       <div className="kart">
           <div className="karts">
              {getit()}
           </div>
           <div className="karts">
           <h1>row1</h1>
           </div>
           <div className="karts">
           <h1>row1</h1>
           </div>
       </div>
    </div>
}
export default Kart;
