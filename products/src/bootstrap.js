import faker from 'faker';
 

const mount = el => {
    let products = "";
    
    for (let i = 0; i < 3; i++) {
        const name = faker.commerce.productName()
        products += `<div>${name}</div>`    
    }
    el.innerHTML = products
    //ReactDOM.render(<App />, el)
}

// Durum 1: Development modda izole bir şekilde çalışıldığında (local index.html dosyası kullanıldığında)
// products-dev id'li elemanın kesin var olduğu durumda
if(process.env.NODE_ENV === "development") {

    // Container bu id'li div'e sahip mi değil mi kontrolünün yapılması
    const el = document.querySelector("#products-dev")
    if(el) {
        mount(el)
    }
}

// Durum 2: Development veya production modda olduğumuzda container app aracılığı ile, 
// products-dev id'li elemanın olup olmadığı garanti değilse
// Bu sebeple mount fonksiyonu export edilir ve istenildiği zaman kullanılır
export { mount }