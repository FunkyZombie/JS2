Vue.component('cart', {
    props: ['cartItems', 'imgcart', 'visibility'],
    template: `
        <div class="cart-block" v-show="visibility">
            <error v-if="$parent.error"></error>
            <span v-else-if="cartItems.length === 0">Корзина пуста</span>
            <cart-item v-else v-for="item of cartItems" :key="item.id_product" :img="imgcart" :cart-item="item">
            </cart-item>
        </div>
    `
});

Vue.component('cart-item', {
    props: ['imgcart', 'cartItem'],
    template: `
    <div class="cart-item">
        <div class="product-bio">
            <img :src="imgcart" alt="Some img">
            <div class="product-desc">
                <div class="product-title">{{ cartItem.product_name }}</div>
                <div class="product-quantity">Quantity: {{ cartItem.quantity }}</div>
                <div class="product-single-price">$ {{ cartItem.price }} each</div>
            </div>
        </div>
        <div class="right-block">
            <div class="product-price">{{cartItem.quantity*cartItem.price}}</div>
            <button class="del-btn" @click="$root.remove(cartItem)">&times;</button>
        </div>
    </div>
    `
})