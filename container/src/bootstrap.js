import { mount as productMount } from 'productsApp/ProductsIndex'
import { mount as cardMount } from 'cartsApp/CartShow'

console.log("Container!")
productMount(document.querySelector("#my-products"))
cardMount(document.querySelector("#my-card"))