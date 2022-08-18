const products = [
    {id: 1, title: 'Notebook', price: 2000, image: 'image/bg-img.jpg'},
    {id: 2, title: 'Mouse', price: 20,image: 'image/bg-img.jpg'},
    {id: 3, title: 'Keyboard', price: 200, image: 'image/bg-img.jpg'},
    {id: 4, title: 'Gamepad', price: 50, image: 'image/bg-img.jpg'},
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (item) => {
    return `<div class="product-item">
                <img src="${item.image}" alt="" class="product-img">
                <h3>${item.title}</h3>
                <p>${item.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};

const renderPage = list => {
    const productsList = list.map(item => renderProduct(item));
    document.querySelector('.products').innerHTML = productsList.join(''); 
};

renderPage(products);