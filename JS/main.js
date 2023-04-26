//startHeader
let headerMenu=document.querySelector(".header .container .menu i:first-of-type")
let headerMenuX=document.querySelector(".header .container .menu i:last-of-type")
headerMenu.addEventListener("click",function(e){
    headerMenu.nextElementSibling.nextElementSibling.style.display="flex"
    headerMenuX.style.display="block"
    headerMenu.style.display="none"
})
headerMenuX.addEventListener("click",function(e){
    headerMenuX.nextElementSibling.style.display="none"
    headerMenu.style.display="block"
    headerMenuX.style.display="none"
})
let headerItemem=document.querySelectorAll(".header .container .menu ul li")
headerItemem.forEach((el)=>{
    el.addEventListener("click",function(e){
        headerItemem.forEach((el)=>{
            el.firstElementChild.classList.remove("HomeActive")
        })
        e.currentTarget.firstElementChild.classList.add("HomeActive")
        if(screen.width<=992){
            headerMenuX.nextElementSibling.style.display="none"
            headerMenu.style.display="block"
            headerMenuX.style.display="none"
        }
    })
})
//end Header
//startServices
let servicesElements=document.querySelector(".services .container .elements")
let readMore=document.querySelectorAll(".services .container .elements .element .button");
readMore.forEach((col)=>{
    col.addEventListener("click",function(e){
        readMore.forEach((el)=>{
            el.parentElement.style.display="none";
        })
        e.currentTarget.parentElement.style.display="block";
        e.currentTarget.parentElement.nextElementSibling.style.display="block";
        servicesElements.style.gridTemplateColumns="350px calc(100% - 350px)";
        e.currentTarget.parentElement.nextElementSibling.firstElementChild.addEventListener("click",function(ele){
            ele.currentTarget.parentElement.style.display="none";
            readMore.forEach((el)=>{
                el.parentElement.style.display="block";
                servicesElements.style.gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))";
            })
        })
    })
})
//endServices
//startContact
function sendEmail(){
    var params = {
        name:document.querySelector(".contact .container form input:nth-of-type(1)").value,
        email:document.querySelector(".contact .container form input:nth-of-type(2)").value,
        phone:document.querySelector(".contact .container form input:nth-of-type(3)").value,
        subject:document.querySelector(".contact .container form input:nth-of-type(4)").value,
        message:document.querySelector(".contact .container form textarea").value
    };
    const serviceID="service_0vtwbve";
    const templateID="template_va5h4tn";
    emailjs.send(serviceID,templateID,params)
    .then(
        res =>{
            document.querySelector(".contact .container form input:nth-of-type(1)").value="";
            document.querySelector(".contact .container form input:nth-of-type(2)").value="";
            document.querySelector(".contact .container form input:nth-of-type(3)").value="";
            document.querySelector(".contact .container form input:nth-of-type(4)").value="";
            document.querySelector(".contact .container form textarea").value="";
            console.log(res);
            alert("your message sent successfully")
        }
    )
    .catch(err=>console.log(err));
}

//endContact