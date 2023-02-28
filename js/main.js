class Cart {
    constructor(product) {
        this.product = product;
        this.productInCart = [];
    }

    removeFromCart() {}

    addToCart() {}

    setAmountItem () {}

    clearCart() {}

    renderCart() {}
}

class ProductList {
    constructor (container = ".products") {
        this.container = container;
        this.products = [];
        this._fetchProducts();
        this.render();
    }

    _fetchProducts() {
        this.products = [
            {id: 1, title: 'Notebook', price: 2000, image: 'image/bg-img.jpg'},
            {id: 2, title: 'Mouse', price: 150, image: 'image/bg-img.jpg'},
            {id: 3, title: 'Keyboard', price: 200, image: 'image/bg-img.jpg'},
            {id: 4, title: 'Gamepad', price: 120, image: 'image/bg-img.jpg'},
        ];
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.products) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML('beforeend', item.getHTML());
        }
    }

    getSumAllProducts() {
        return this.products.reduce((acc, value) => {
            return acc += value.price;
        }, 0)
    }
}

class ProductItem {
    constructor(product) {
        this.id = product.id;
        this.title = product.title;
        this.price = product.price;
        this.image = product.image;
    }

    getHTML = () => {
        return `<div class="product-item">
                    <img src="${this.image}">
                    <h3>${this.title}</h3>
                    <p>${this.price}</p>
                    <button class="buy-btn">Купить</button>
                </div>`;
    }
}

const list = new ProductList();
console.log('Сумма товаров в каталоге:', list.getSumAllProducts());