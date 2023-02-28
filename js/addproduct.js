document.querySelector(".add-product") .addEventListener("submit",function(event){
  event.preventDefault();
let title = document.querySelector(".title").value;
let price = document.querySelector(".price").value;
let description = document.querySelector(".description").value;
let image = document.querySelector(".image").value;
let category = document.querySelector(".category").value;

let addedproduct = JSON.parse(localStorage.getItem("savedproducts")) || [];
console.log(addedproduct);
  addedproduct.push({ 
    title: title,
    price: price,
    description: description,
    image: image,
    category: category,
  })
  localStorage.setItem("savedproducts", JSON.stringify(addedproduct))
})
