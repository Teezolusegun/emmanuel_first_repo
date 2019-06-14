// This displays the greet on the top of the page
const greetings = prompt("Please type your full name here" , "Fullname")
const greet = greetings.split(" ")
const demo = document.querySelector('#pick')
demo.innerHTML = `  Welcome  ${greet[0]} `

const add = document.querySelector(".btn")
add.addEventListener("click", ()=>{
    document.querySelector(".bg-modal").style.display = "flex"
})

const close = document.querySelector(".close")
close.addEventListener("click", ()=>{
    document.querySelector(".bg-modal").style.display = "none"
})
const logout = document.querySelector(".logout")
logout.addEventListener("click", ()=>{
    windows.href = "form.html"
})





//selecting the save button and passing the objects to array
const display = document.getElementById('display')
const save = document.querySelector('.this')
const products = []

save.addEventListener('click' , (e)=>{
let product = {
       'name' : document.getElementById('one').value,
       'price': document.getElementById('two').value,
       'method' : document.getElementById('three').value
   }
   products.push(product)
   localStorage.setItem('product',JSON.stringify(products))
   const theProduct = JSON.parse(localStorage.getItem('product'))
 
   theProduct.forEach((item) => {
 const li = document.createElement('p')
       li.className = 'myProduct'
       li.appendChild(document.createTextNode(item.name))
       li.appendChild(document.createTextNode(item.method))
       li.appendChild(document.createTextNode(item.price))
       display.appendChild(li)

   })
   console.log(theProduct)
   e.preventDefault()
})

  console.log(display)

