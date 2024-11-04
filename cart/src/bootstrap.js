import faker from 'faker';
 
const mount = el => {

    let cartText = ""
    
    cartText += `<div>You have ${faker.random.number()} item</div>`    
    
    el.innerHTML = cartText
}

// Durum 1: Development modda izole bir şekilde çalışıldığında (local index.html dosyası kullanıldığında)
// cart-dev id'li elemanın kesin var olduğu durumda
if(process.env.NODE_ENV === "development") {

    // Container bu id'li div'e sahip mi değil mi kontrolünün yapılması
    const el = document.querySelector("#cart-dev")
    if(el) {
        mount(el)
    }
}

// Durum 2: Development veya production modda olduğumuzda container app aracılığı ile, 
// cart-dev id'li elemanın olup olmadığı garanti değilse
// Bu sebeple mount fonksiyonu export edilir ve istenildiği zaman kullanılır
export { mount }