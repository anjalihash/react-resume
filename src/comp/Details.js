import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Hobbies from "./Hobbies.js";

function Details(){
    return(
        <section class="experience section-padding w-100">
  	<div class="row">
      {/* <Experience /> */}
      <Education />
      <Skills />
      <Hobbies />

      
      
     
      
  	</div>
  </section>
  
  
  );
}

export default Details;

    
