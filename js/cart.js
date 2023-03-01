let items = document.getElementById('cart-items')

let cartedItems = JSON.parse(localStorage.getItem('cart-items'))
if(cartedItems){
cartedItems.forEach(element => {
    items.innerHTML+=`
    <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>
    <li>
    
    <div id="theProductiInCart">
            <img class="imgProduct" src="${element.image}" alt="Image of a product" srcset="">
            <p class="productName">${element.title}</p>
            <p class="productPrice">$ ${element.price}</p>
            
            <button id='delete' data-id=${element.id}><i class="fa fa-trash" style="font-size: 2rem;  " aria-hidden="true"></i></button>
            </div>
   
    </li>`
})
}
let deleteBtn = document.querySelectorAll('#delete')
 
deleteBtn.forEach(element => {
    element.addEventListener("click", ()=>{
        let deleteId= element.getAttribute("data-id")
        cartedItems.forEach((element, index) => {
         if(element.id==deleteId){
            cartedItems.splice(index, 1);
            localStorage.setItem("cartedItems", JSON.stringify(cartedItems))
             location.reload()
         }
        });
       
    })
    
});
let displayTotalPrice = document.getElementById("displayTotalPrice")

const totalPrice = cartedItems.reduce((total, product) => total + product.price, 0);

// console.log(totalPrice);
displayTotalPrice.innerHTML= `<h2 id="TotalPrice">Total $ ${totalPrice}<h2>`

let addItem = document.getElementById('addItem')
  addItem.addEventListener('click', ()=>{
    window.location.href = 'addProduct.html'
    })