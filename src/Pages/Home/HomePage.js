import Navigation from "../Nav/Navigation";
import BlogSection from "./Blog/BlogSection";
import SearchHeader from "./Header/SearchHeader";


function HomePage() {
  return (
   <div style={{padding:"60px"}}>
   
      <SearchHeader />
      <br></br>
      <br></br>
      <BlogSection/>
     
   
    </div>
     
    
  );
}

export default HomePage;
