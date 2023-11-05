
// let title = document.getElementById('title');
// let price = document.getElementById('price');
// let taxes = document.getElementById('taxes');
// let ads = document.getElementById('ads');
// let discount = document.getElementById('discount');
// let total = document.getElementById('total');
// let count = document.getElementById('count');
// let category = document.getElementById('category');
// let submit = document.getElementById('submit');
// let mood ;
// let tmp;

// function getTotal(){
//     if(price.value !=''){
//         let result = (+price.value + +taxes.value + +ads.value)- +discount.value;
//         total.innerHTML = result;
//         total.style.background = 'green'
//     }
//     else
//     {
//         total.innerHTML = '';
//         total.style.background = 'crimson'
//     }
    
// }

// let arrOfProducts;

// if(localStorage.getItem('product') != null){
//     arrOfProducts=JSON.parse(localStorage.getItem('product'))
// }else
// {
//     arrOfProducts=[]
// }

// submit.addEventListener('click',function(){
//     let product={
//         title:title.value,
//         price:price.value,
//         taxes:taxes.value,
//         ads:ads.value,
//         discount:discount.value,
//         total:total.innerHTML,
//         count:count.value,
//         category:category.value,
//     }
//     if(title.value != '' && price.value != '' && category.value != '' && product.count < 100){
//         if(mood === 'create'){
//             if(product.count > 1){
//                 for(let i=0; i < product.count; i++){
//                     arrOfProducts.push(product);
//                 }
//                 }else
//                 {
//                     arrOfProducts.push(product);
//                 }
//             }
//             else{
//                 arrOfProducts[tmp] = product;
//                 mood = 'create';
//                 submit.innerHTML = 'create';
//                 count.style.display = 'block';
//             }   
//         }

//     localStorage.setItem('product',JSON.stringify(arrOfProducts))
//     clearData();

//     showData();

// })

// function clearData(){
//     title.value = '';
//     price.value = '';
//     taxes.value = '';
//     title.value = '';
//     ads.value = '';
//     discount.value = '';
//     total.innerHTML = '';
//     count.value = '';
//     category.value = '';
// }

// function showData(){
    
//     let cartona=``;
//     for(let i = 0 ; i < arrOfProducts.length;i++){
//         cartona +=`
//                     <tr>
//                         <td>${i+1}</td>
//                         <td>${arrOfProducts[i].title}</td>
//                         <td>${arrOfProducts[i].price}</td>
//                         <td>${arrOfProducts[i].ads}</td>
//                         <td>${arrOfProducts[i].discount}</td>
//                         <td>${arrOfProducts[i].total}</td>
//                         <td>${arrOfProducts[i].category}</td>
//                         <td><button onclick="updateProduct(${i})" id="update" class="text-white">update</button></td>
//                         <td><button onclick="deleteProduct(${i})" id="delete" class="text-white">delete</button></td>
//                     </tr>
//                     `
//     }
//     document.getElementById('tableBody').innerHTML = cartona;

//     let deleteBtn = document.getElementById('deleteAll')
//     if(arrOfProducts.length > 0){
//         deleteBtn.innerHTML = `
//         <button onclick="deleteAll()" class="text-white">delete All (${arrOfProducts.length})</button>
//         `
//     }
//     else
//     {
//         deleteBtn.innerHTML = ''
//     }
// }
// showData();

// function deleteProduct(index){
//     arrOfProducts.splice(index,1);
//     localStorage.product = JSON.stringify(arrOfProducts);
//     showData();
// }

// function deleteAll(){
//     localStorage.clear();
//     arrOfProducts.splice(0);
//     showData();
// }

// function updateProduct(i){
//     title.value = arrOfProducts[i].title;
//     price.value = arrOfProducts[i].price;
//     taxes.value = arrOfProducts[i].taxes;
//     ads.value = arrOfProducts[i].ads;
//     discount.value = arrOfProducts[i].discount;
//     getTotal();
//     count.style.display = 'none'
//     category.value = arrOfProducts[i].category;
//     submit.innerHTML = 'update';
//     mood = 'update';
//     tmp = i;
//     scroll({
//         top:0,
//         behavior:'smooth'
//     })
// }

// let searchMood = 'title';
// function getSearchMood(id){
//     let search = document.getElementById('search');
//     if(id == 'searchByTitle'){
//         searchMood = 'title';
//     }else
//     {
//         searchMood = 'category';
//     }
//     search.placeholder = 'search by '+searchMood;
//     search.focus();
//     search.value = '';
//     showData();
// }

// function searchData(value){
//     let cartona=``;
//     if(searchMood == 'title'){
//         for(let i = 0 ; i < arrOfProducts.length;i++){
//             if(arrOfProducts[i].title.toLowerCase().includes(value.toLowerCase())){
//                 cartona+=`
//                     <tr>
//                         <td>${i}</td>
//                         <td>${arrOfProducts[i].title}</td>
//                         <td>${arrOfProducts[i].price}</td>
//                         <td>${arrOfProducts[i].ads}</td>
//                         <td>${arrOfProducts[i].discount}</td>
//                         <td>${arrOfProducts[i].total}</td>
//                         <td>${arrOfProducts[i].category}</td>
//                         <td><button onclick="updateProduct(${i})" id="update" class="text-white">update</button></td>
//                         <td><button onclick="deleteProduct(${i})" id="delete" class="text-white">delete</button></td>
//                     </tr>
//                     `
//                 }
//             }
//             }
//             else{
//                 for(let i = 0 ; i < arrOfProducts.length;i++){
//                     if(arrOfProducts[i].category.toLowerCase().includes(value.toLowerCase())){
//                         cartona+=`
//                             <tr>
//                                 <td>${i}</td>
//                                 <td>${arrOfProducts[i].title}</td>
//                                 <td>${arrOfProducts[i].price}</td>
//                                 <td>${arrOfProducts[i].ads}</td>
//                                 <td>${arrOfProducts[i].discount}</td>
//                                 <td>${arrOfProducts[i].total}</td>
//                                 <td>${arrOfProducts[i].category}</td>
//                                 <td><button onclick="updateProduct(${i})" id="update" class="text-white">update</button></td>
//                                 <td><button onclick="deleteProduct(${i})" id="delete" class="text-white">delete</button></td>
//                             </tr>
//                             `
//                         }
//                     }
//             }
//             document.getElementById('tableBody').innerHTML = cartona;

            
// }
////////////////////////////////////////////////////////////////


let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');
let arrOfProducts;
let tableBody = document.getElementById('tableBody');
let deleteBtn = document.getElementById('deleteBtn');
let mood = 'create';
let tmp;
let search = document.getElementById("search");

if(localStorage.pro != null){
    arrOfProducts = JSON.parse(localStorage.pro);
    showData();
}else
{
    arrOfProducts=[]
}

function getTotal(){
    if(price.value != ''){
           let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
        total.innerHTML = result;
        total.style.background = 'green' ;
    }else
    {
        total.innerHTML = '';
        total.style.background = 'crimson'
    }

}

submit.addEventListener('click',function(){
    let product = {
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value,
    }
    if(title.value != '' && price.value != '' && category.value != '' && count.value < 100){
          if(mood === 'create'){
            if(product.count > 1){
                for(let i = 0; i < product.count; i++){
                    arrOfProducts.push(product);
                }
                }else
                {
                    arrOfProducts.push(product);
                } 
                }else
                {
                    arrOfProducts[tmp] = product;
                    mood = 'create'; 
                    submit.innerHTML = 'create';
                    count.style.display = 'block'
                } 
                clearData();
    }
 
    
    
    localStorage.setItem('pro',JSON.stringify(arrOfProducts));
    showData();
    
})

function clearData(){
    title.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    discount.value = '';
    count.value = '';
    total.innerHTML = '';
    category.value = '';
}

function showData(){
    getTotal();
    let cartona = ``;
    for(let i = 0; i < arrOfProducts.length; i++){
        cartona +=`
                    <tr>
                        <td>${i+1}</td>
                        <td>${arrOfProducts[i].title}</td>
                        <td>${arrOfProducts[i].price}</td>
                        <td>${arrOfProducts[i].ads}</td>
                        <td>${arrOfProducts[i].discount}</td>
                        <td>${arrOfProducts[i].total}</td>
                        <td>${arrOfProducts[i].category}</td>
                        <td><button onclick = "updateProduct(${i})">update</button></td>
                        <td><button onclick = "deleteProduct(${i})">delete</button></td>
                    </tr>
                `
    }
    tableBody.innerHTML = cartona;

    if(arrOfProducts.length > 0){
        deleteBtn.innerHTML = `<button onclick = "deleteAll()" >delete All (${arrOfProducts.length})</button>`
    }
    else
    {
        deleteBtn.innerHTML = ''
    }
}
showData();

function deleteProduct(index){
    arrOfProducts.splice(index , 1);
    localStorage.pro = JSON.stringify(arrOfProducts);
    showData();
}

function deleteAll(){
    localStorage.clear();
    arrOfProducts.splice(0);
    showData();
}

function updateProduct(i){
    title.value = arrOfProducts[i].title;
    price.value = arrOfProducts[i].price;
    taxes.value = arrOfProducts[i].taxes;
    ads.value = arrOfProducts[i].ads;
    discount.value = arrOfProducts[i].discount;
    getTotal();
    count.style.display = 'none';
    category.value = arrOfProducts[i].category;
    submit.innerHTML = 'update';
    mood = 'update';
    tmp=i;
    scroll({
        top:0,
        behavior:'smooth',
    })
}

let searchMood = 'title'

function getSearchMood(id){
    if(id == 'searchByTitle'){
        searchMood = 'title'
    }else
    {
        searchMood = 'category'
    }
    search.placeholder = 'search by '+ searchMood;
    search.focus();
    search.value = '';
    showData();
}

function searchData(value){
    let cartona = ``;
    for(let i = 0;i < arrOfProducts.length;i++){
    if(searchMood == 'title')
    {
            if(arrOfProducts[i].title.toLowerCase().includes(value.toLowerCase())){
                    cartona +=`
                                <tr>
                                    <td>${i}</td>
                                    <td>${arrOfProducts[i].title}</td>
                                    <td>${arrOfProducts[i].price}</td>
                                    <td>${arrOfProducts[i].ads}</td>
                                    <td>${arrOfProducts[i].discount}</td>
                                    <td>${arrOfProducts[i].total}</td>
                                    <td>${arrOfProducts[i].category}</td>
                                    <td><button onclick = "updateProduct(${i})">update</button></td>
                                    <td><button onclick = "deleteProduct(${i})">delete</button></td>
                                </tr>
                            `
            }
        
    }
    else
    {
            if(arrOfProducts[i].category.toLowerCase().includes(value.toLowerCase())){
                    cartona +=`
                                <tr>
                                    <td>${i}</td>
                                    <td>${arrOfProducts[i].title}</td>
                                    <td>${arrOfProducts[i].price}</td>
                                    <td>${arrOfProducts[i].ads}</td>
                                    <td>${arrOfProducts[i].discount}</td>
                                    <td>${arrOfProducts[i].total}</td>
                                    <td>${arrOfProducts[i].category}</td>
                                    <td><button onclick = "updateProduct(${i})">update</button></td>
                                    <td><button onclick = "deleteProduct(${i})">delete</button></td>
                                </tr>
                            `
            }
        
    }
    }
    tableBody.innerHTML = cartona;

}