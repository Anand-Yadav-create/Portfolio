let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
let sections=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>=offset&&top<offset+height){
            navlinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            })
        }
    })
}
menuIcon.onclick=()=>{
    
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('bx');
}

setInterval(()=>{

const radialContainers = document.querySelectorAll('.radial-container');

// Loop through each radial container to animate its progress

radialContainers.forEach((container) => {
  const targetValue = container.dataset.progress; // Get the target progress
  const circle = container.querySelector('.circle');
  const innerCircle = container.querySelector('.inner-circle');
  
  let currentProgress = 0;
  const duration = 2000; // Animation duration in milliseconds
  const interval = 10; // Update interval in milliseconds
  const increment = (targetValue / duration) * interval;

  const updateProgress = setInterval(() => {
    currentProgress += increment;
    if (currentProgress >= targetValue) {
      currentProgress = targetValue;
      clearInterval(updateProgress);
    }
    // Update radial bar and displayed value
    circle.style.setProperty('--progress', `${currentProgress}%`);
    innerCircle.textContent = `${Math.round(currentProgress)}%`;
  }, interval);
});
},3000);


const form=document.querySelector('form');

const Fullname=document.getElementById("name");
const email=document.getElementById("email");
const phone=document.getElementById("phone");
const subject=document.getElementById("subject");
const message=document.getElementById("message");



function sendEmail(){

  const body=`Full Name:${Fullname.value}<br> Email:${email.value} <br> Phone Number: ${phone.value}<br>Message:${message.value}`;

  
  Email.send({
   
}).then(
  message =>{

    
    if(message=="OK"){
      Swal.fire({
        title: "Success",
        text: "Message Sent Successfully!",
        icon: "success"
      });
     
    }else{
      console.log(message);
    }


    }
);
}


function checkInputs(){
  const items=document.querySelectorAll(".item");

  for(const item of items){
   
    if(item.value==""){
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }

    // if(items[1].value!=""){
    //   checkEmail();
    // }

    // items[1].addEventListener("keyup",()=>{
    //   checkEmail();
    // })

    item.addEventListener("keyup",()=>{
      if(item.value!=""){
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      }else{

        item.classList.add("error");
        item.parentElement.classList.add("error");

      }
    });
  }
}

// function checkEmail(){
//   const emailreg=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

//   if(!email.value.match(emailreg)){
//     email.classList.add("error");
//     email.parentElement.classList.add("error");
//   }else{
//     email.classList.remove("error");
//     email.parentElement.classList.remove("error");

//   }
// }




form.addEventListener("submit",(e)=>{
  e.preventDefault();
  checkInputs();

  if(!Fullname.classList.contains("error")&&!email.classList.contains("error")&&!phone.classList.contains("error")&&!subject.classList.contains("error")
  &&!message.classList.contains("error")){

    sendEmail();

     form.reset();
     return false;
}


  
});
  


  
  
  