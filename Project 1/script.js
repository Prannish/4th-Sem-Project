
//mode changer
   let modebtn=document.querySelector("#mode");
  let currentmode="dark";
  
  modebtn.addEventListener("click",()=>{
    if(currentmode==="light"){
        currentmode="dark";
        document.querySelector("body").style.backgroundColor="#296eb4";
        document.querySelector(".navbar").style.backgroundColor="#1789fc";
        document.querySelector(".headingdiv").style.backgroundColor="#4075c8";
        document.querySelector("marquee").style.backgroundColor="#1789fc";


    }else{
        currentmode="light";
        document.querySelector("body").style.backgroundColor="#42213D";
        document.querySelector(".navbar").style.backgroundColor="#683257";
        document.querySelector(".headingdiv").style.backgroundColor="#683257";
        document.querySelector("marquee").style.backgroundColor="#BD4089";


    }
   });
   console.log(currentmode);
