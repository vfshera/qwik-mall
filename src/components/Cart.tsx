import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="cart-wrapper">
      <section class="shopping-cart">
        <div class="cart-header">
          <h6>
            Shopping Cart <span>3 Items</span>
          </h6>
          <a href="/" class="full-cart">
            {" "}
            Full View
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </a>
        </div>

        <div class="cart-items ">
          <div class="labels">
            <span>Image</span>
            <span>Product</span>
            <span>Qty</span>
            <span>Price</span>
          </div>
          <ul>
            {/* @foreach( $cart as $cartItem) */}

            <li>
              <div class="glimpse">Baking Soda</div>

              <div class="product-image">
                <img src="{{ asset('storage/images/products/product' . rand(1,6) .'.webp')  }}" />
              </div>
              <span class="title">
                <a href="{{ route('collections.product-view',['product' => $cartItem,'productSlug' => $cartItem->slug]) }}">
                  Title here...{" "}
                </a>
              </span>
              <span class="quantity pl-1">5</span>
              <span class="price ">488 Ksh</span>
            </li>

            {/* @endforeach */}
          </ul>
        </div>

        <div class="action">
          <div class="total">Total 1,000 Ksh.</div>

          <button>Checkout</button>
        </div>
      </section>
    </div>
  );
});
