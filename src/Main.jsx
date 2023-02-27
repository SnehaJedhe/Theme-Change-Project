import React from "react";
import "./Main.css"


function Main({darkTheme,setDarkTheme}) {

    return(
        <>
         <div className="mainDiv">
           <div className="btn">
             <h1 style={{color:(darkTheme==false)? "black":"white"}}>Overreacted</h1>
             <button style={{color:(darkTheme==false)? "black":"white"}} onClick={()=>{
                setDarkTheme(!darkTheme)
                
             }
             
            } >Click Me</button>
           </div>
          <div className="contain">
          
            <div className="containe-child">
            <h2>The WET Codbase</h2>
            <span style={{color:(darkTheme==false)? "black":"white"}}>Sunday 4th 2020 11min read</span>
            </div>
            <div className="containe-child">
            <h2>Goodby, clean code</h2>
            <span style={{color:(darkTheme==false)? "black":"white"}}>Sunday 4th 2020 11min read</span>
            </div>
            <div className="containe-child">
            <h2>My Decade in Review</h2>
            <span style={{color:(darkTheme==false)? "black":"white"}}>Saturday 11th 2018 5min read</span>
            </div>
            <div className="containe-child">
            <h2>What are the React Team</h2>
            <span style={{color:(darkTheme==false)? "black":"white"}}>Thursday 4th 2015 5min</span>
            </div>
        </div>
            </div>       
    
                         


         

        </>

    );
}
    
export default Main;