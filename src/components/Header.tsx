import { $, component$, useSignal } from "@builder.io/qwik";
import Cart from "./Cart";
import SearchBox from "./SearchBox";
import SpecialOffer from "./SpecialOffer";

export default component$(() => {
  const showCart = useSignal(false);

  const close$ = $(() => {
    showCart.value = false;
  });
  return (
    <div class="navbar-wrapper">
      <header>
        <SpecialOffer />
        <SearchBox />
      </header>

      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Categories</a>
          </li>
          <li>
            <a href="/">Featured</a>
          </li>
          <li>
            <a href="/">About Us</a>
          </li>
        </ul>

        <ul>
          <button
            onClick$={() => {
              showCart.value = !showCart.value;
            }}
            class="cart-icon mx-6 cursor-pointer flex gap-1"
          >
            Cart{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button>
          <div class="space-x-4 self-end">
            <a
              href="#"
              class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
            >
              Log in
            </a>

            <a
              href="#"
              class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
            >
              Register
            </a>
          </div>
        </ul>
      </nav>

      {showCart.value && <Cart onClose$={close$} />}
    </div>
  );
});
