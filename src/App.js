import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Konum from "./components/konum/konum";
import İlt from "./components/iletişim/ilt";
import Urunler from  "./components/ürünler/ürünler";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
         <Routes>
             <Route  path="/konum" element={<><Konum/></>}/>
             <Route  path="/iletişim" element={<><İlt/></>}/>
             <Route  path="/ürünler" element={<><Urunler/></>}/>

         </Routes>

      </Router>
       
    </div>
  );
}

export default App;
