import { Link } from "react-router-dom";
import "./sidewiedget.css"
function ImportPageList()
{
    return (
        <>
          <h2 className="LargeHeading">Pages : ❤️</h2>
          <ul className="pageBox">
           <Link to={""}> <li>Home</li></Link>
           <Link to={""}> <li>Blog</li></Link>
           <Link to={""}> <li>About</li></Link>
           <Link to={""}> <li>Contact</li></Link>
           <Link to={""}> <li>Disclaimer</li></Link>
           <Link to={""}> <li>Privacy Policy</li></Link>
          </ul>
        
        </>
    )
}

export default ImportPageList;