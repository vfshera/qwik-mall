import { component$, useSignal } from "@builder.io/qwik";
import Cart from "./Cart";
import SearchBox from "./SearchBox";
import SpecialOffer from "./SpecialOffer";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  const showCart = useSignal(false);

  return (
    <div class="navbar-wrapper">
      <header>
        <SpecialOffer />
        <SearchBox />
      </header>

      <nav class=" border-b border-brand-4/40 flex justify-between items-center bg-white  px-5 md:px-[50px] h-16  w-full">
        <ul class="w-full flex items-center gap-3 md:gap-[30px] [&>li]:list-none [&_a]:text-sm md:[&_a]:text-base [&_span]:text-brand-4  [&_a]:text-brand-4  [&_span]:text-base">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li class="hidden md:block">
            <Link href="/">Categories</Link>
          </li>
          <li class="hidden md:block">
            <Link href="/">Featured</Link>
          </li>
          <li class="hidden md:block">
            <Link href="/">About Us</Link>
          </li>
        </ul>

        <ul class="w-full flex items-center justify-end gap-3 md:gap-[30px] [&>li]:list-none [&_a]:text-sm md:[&_a]:text-base [&_span]:text-brand-4  [&_a]:text-brand-4  [&_span]:text-sm md:[&_span]:text-base">
          <button
            onClick$={() => {
              showCart.value = !showCart.value;
            }}
            class="cart-icon mx-6 text-sm md:text-base text-brand-4 relative cursor-pointer flex items-center gap-1"
          >
            Cart
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
          <div class="space-x-4 self-end  [&_a]:text-sm md:[&_a]:text-base   [&_a]:text-brand-4  ">
            <Link
              href="#"
              class="whitespace-nowrap font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
            >
              Log in
            </Link>

            <Link
              href="#"
              class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
            >
              Register
            </Link>
          </div>
        </ul>
      </nav>

      {showCart.value && (
        <Cart
          onClose$={() => {
            showCart.value = false;
          }}
        />
      )}
    </div>
  );
});
