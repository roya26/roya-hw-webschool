
 const FormElem ={
 main: document.querySelector("main"),
 form: document.querySelector("#form"), 
 button:document.querySelector(".add-car")

}

const arr =[
    {tittle:"Honda Civic",
    price:"$20,000",
  image:"img1.jpg",
  description:"This is some description abouht this item",
}, 
{tittle:"Porsche",
    price:"$200,000",
  image:"/‏‏assets/img/img1.jpg",
  description:"This is some description abouht this item",
},
{tittle:"Toyota",
    price:"$40,000",
  image:"/‏‏assets/img/img2.jpg",
  description:"This is some description abouht this item",
},
{tittle:"Mazda",
    price:"$22,000",
  image:"/‏‏assets/img/img1.jpg",
  description:"This is some description abouht this item",
},
{tittle:"ferrari",
price:"$15,000",
image:"/‏‏assets/img/img2.jpg",
description:"This is some description abouht this item",
},
{tittle:"Kia",
    price:"$10,000",
  image:"/‏‏assets/img/img1.jpg",
  description:"This is some description abouht this item",
},
{tittle:"Honda Civic",
    price:"$20,000",
  image:"/‏‏assets/img/img2.jpg",
  description:"This is some description abouht this item",
},
{tittle:"Ferrari",
    price:"$200,000",
  image:"/‏‏assets/img/img1.jpg",
  description:"This is some description abouht this item",
}, 
]

function createHTML(){
    var toAppend =""
    Array.forEach(buildCard)
        function buildCard(x,i){
            toAppend +=`<article>
            <i class="fa-solid fa-trash" onclick></i>
        <h2>${x.tittle}</h2>
        <img src="/‏‏assets/img/${x.image}.jpg" alt="">
        <p>${x.description}</p>  
        <h3>${x.price}</h3>  
        <button>Buy Now</button>
        </article> `
        this.i.addEventListener("click", del)

        function del(x){
            this.article.style.display= "none";
        }
        }
    }
main.innnerHTML = toAppend;
   

createHTML()

function toggleForm(x){
    if(FormElem.form.style.display == "none"){  FormElem.form.style.display = "block";
    x.innnerHTML = "Hide Form"}
  
    else FormElem.form.style.display = "none";
}
FormElem.button.addEventListener("click",addCar)

function addCar(){
    var val =FormElem.form.Tittle.value
    array.forEach(val => {
        
    });
    var article = document.createElement("article");
    article.innerHTML()

    createHTML()
}

