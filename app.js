Vue.component('Product', {
  template: `<div id="app">
      <div class="product">
        <div class="product-image">
          <img :src="image" alt="images" />
        </div>
        <div class="product-info">
          <h1>{{title}}</h1>
          <p v-if="inStock">In Stock</p>
          <p v-else>Out of stock</p>

          <ul>
            <li v-for="detail in details">{{detail}}</li>
          </ul>
          <ul>
            <div
              v-for="(variant, index) in variants"
              :key="variant.variantId"
              class="color-box"
              :style="{backgroundColor: variant.variantColor}"
              @mouseover="updateProduct(index)"
            >
              <!-- <p > -->
              <!-- {{variant.variantColor}} -->
              <!-- </p> -->
            </div>
          </ul>
        </div>
      </div>
      <div class="cart">
        <p>Cart({{ cart }})</p>
      </div>
      <button @click="addToCart">Add to cart</button>
      <button @click="subtractFromCart">Reduce cart</button>
    </div>`,
  data() {
    return {
      brand: 'Vue Mastery',
      product: 'Socks',
      selectedVariant: 0,
      inventory: 4,
      details: ['80% cotton', '20% polyester', 'Gender-neutral'],
      variants: [
        {
          variantId: 2234,
          variantColor: 'green',
          variantImage: 'socks.jpg',
          variantQuantity: 10,
        },
        {
          variantId: 2235,
          variantColor: 'blue',
          variantImage: 'bluesocks.jpg',
          variantQuantity: 0,
        },
      ],
      cart: 0,
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateProduct(index) {
      this.selectedVariant = index;
    },
    subtractFromCart() {
      this.cart -= 1;
    },
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
  },
});

const app = new Vue({
  el: '#app',
});
