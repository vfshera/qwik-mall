import { component$, type PropFunction } from "@builder.io/qwik";
import { useGlobalState } from "@/GlobalState";
import CartItem from "./CartItem";
import { getUSD } from "./utils/utils";

interface CartProps {
  onClose$: PropFunction<() => void>;
}

export default component$((props: CartProps) => {
  const { cart } = useGlobalState();

  return (
    <div class="fixed top-0 left-0 flex justify-end  bg-gradient-to-l to-gray-900/50 from-gray-900/90 w-full h-full z-50 ">
      <div class="flex relative flex-col max-w-2xl h-full min-w-[25%] p-6 space-y-4 sm:p-10  drop-shadow bg-gray-50 text-gray-800">
        {cart.length > 0 && (
          <h2 class="text-xl font-semibold">
            Items in your cart : {cart.length}
          </h2>
        )}

        <button
          class="absolute right-6 text-5xl p-1 cursor-pointer  -translate-y-1/2 top-6"
          onClick$={props.onClose$}
        >
          &times;
        </button>

        <ul class="flex flex-col divide-y divide-gray-700 flex-1 overflow-y-scroll">
          {cart.map((cartItem, index) => (
            <CartItem key={index} cartItem={cartItem} />
          ))}
        </ul>

        {cart.length > 0 ? (
          <>
            <div class="py-1 text-right mt-auto">
              <p>
                Total amount:
                <span class="font-semibold">
                  {getUSD(
                    cart
                      .map((i) => i.item.price)
                      .reduce((prev, curr) => prev + curr, 0)
                  )}
                </span>
              </p>
              <p class="text-sm text-gray-400">
                Not including taxes and shipping costs
              </p>
            </div>

            <button
              type="button"
              class="px-6 py-2 border rounded-md bg-brand-1 text-white"
            >
              <span class="sr-only sm:not-sr-only">Continue to</span>Checkout
            </button>
          </>
        ) : (
          <section class="px-2 flex flex-col h-full justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 64 64"
            >
              <linearGradient
                id="fCQHAf8lngMR5mlY2uRy_a"
                x1="32"
                x2="32"
                y1="31.5"
                y2="42.432"
                gradientUnits="userSpaceOnUse"
                spreadMethod="reflect"
              >
                <stop offset="0" stop-color="#6dc7ff" />
                <stop offset="1" stop-color="#e6abff" />
              </linearGradient>
              <path
                fill="url(#fCQHAf8lngMR5mlY2uRy_a)"
                d="M36,41c0,0.552-0.448,1-1,1h-6c-0.552,0-1-0.448-1-1v-8c0-0.552,0.448-1,1-1h6 c0.552,0,1,0.448,1,1V41z"
              />
              <linearGradient
                id="fCQHAf8lngMR5mlY2uRy_b"
                x1="42.91"
                x2="42.91"
                y1="31.5"
                y2="42.432"
                gradientUnits="userSpaceOnUse"
                spreadMethod="reflect"
              >
                <stop offset="0" stop-color="#6dc7ff" />
                <stop offset="1" stop-color="#e6abff" />
              </linearGradient>
              <path
                fill="url(#fCQHAf8lngMR5mlY2uRy_b)"
                d="M43.153,42H41c-0.552,0-1-0.448-1-1v-8c0-0.552,0.448-1,1-1h3.82 c0.618,0,1.088,0.555,0.986,1.164l-1.667,8C44.059,41.647,43.642,42,43.153,42z"
              />
              <linearGradient
                id="fCQHAf8lngMR5mlY2uRy_c"
                x1="21.09"
                x2="21.09"
                y1="31.5"
                y2="42.432"
                gradientUnits="userSpaceOnUse"
                spreadMethod="reflect"
              >
                <stop offset="0" stop-color="#6dc7ff" />
                <stop offset="1" stop-color="#e6abff" />
              </linearGradient>
              <path
                fill="url(#fCQHAf8lngMR5mlY2uRy_c)"
                d="M23,42h-2.153c-0.489,0-0.906-0.353-0.986-0.836l-1.667-8C18.092,32.555,18.562,32,19.18,32 H23c0.552,0,1,0.448,1,1v8C24,41.552,23.552,42,23,42z"
              />
              <linearGradient
                id="fCQHAf8lngMR5mlY2uRy_d"
                x1="32"
                x2="32"
                y1="9.667"
                y2="14.393"
                gradientUnits="userSpaceOnUse"
                spreadMethod="reflect"
              >
                <stop offset="0" stop-color="#6dc7ff" />
                <stop offset="1" stop-color="#e6abff" />
              </linearGradient>
              <path
                fill="url(#fCQHAf8lngMR5mlY2uRy_d)"
                d="M39,12c0,1.105-0.895,2-2,2H27c-1.105,0-2-0.895-2-2v0c0-1.105,0.895-2,2-2h10 C38.105,10,39,10.895,39,12L39,12z"
              />
              <linearGradient
                id="fCQHAf8lngMR5mlY2uRy_e"
                x1="32"
                x2="32"
                y1="8.333"
                y2="54.93"
                gradientUnits="userSpaceOnUse"
                spreadMethod="reflect"
              >
                <stop offset="0" stop-color="#1a6dff" />
                <stop offset="1" stop-color="#c822ff" />
              </linearGradient>
              <path
                fill="url(#fCQHAf8lngMR5mlY2uRy_e)"
                d="M56,21h-8c0-1.103-0.897-2-2-2h-0.856l-1.758-5.86c-0.384-1.28-1.539-2.14-2.875-2.14h-0.695 C39.402,9.838,38.302,9,37,9H27c-1.302,0-2.402,0.838-2.816,2h-0.695c-1.336,0-2.491,0.859-2.875,2.14L18.856,19H18 c-1.103,0-2,0.897-2,2H8c-1.103,0-2,0.897-2,2v4c0,1.103,0.897,2,2,2h0.166l3.253,17.894C11.851,49.273,13.92,51,16.339,51h0.762 c0.465,2.279,2.484,4,4.899,4s4.434-1.721,4.899-4h10.202c0.465,2.279,2.484,4,4.899,4s4.434-1.721,4.899-4h0.762 c2.417,0,4.486-1.727,4.92-4.106L55.834,29H56c1.103,0,2-0.897,2-2v-4C58,21.897,57.103,21,56,21z M27,11h10c0.552,0,1,0.448,1,1 s-0.448,1-1,1H27c-0.552,0-1-0.448-1-1S26.448,11,27,11z M22.53,13.714C22.656,13.294,23.051,13,23.489,13h0.695 c0.414,1.162,1.514,2,2.816,2h10c1.302,0,2.402-0.838,2.816-2h0.695c0.438,0,0.833,0.294,0.959,0.714L43.056,19H42 c-1.103,0-2,0.897-2,2H24c0-1.103-0.897-2-2-2h-1.056L22.53,13.714z M22,53c-1.654,0-3-1.346-3-3s1.346-3,3-3s3,1.346,3,3 S23.654,53,22,53z M42,53c-1.654,0-3-1.346-3-3s1.346-3,3-3s3,1.346,3,3S43.654,53,42,53z M50.614,46.535 C50.354,47.964,49.112,49,47.661,49h-0.762c-0.465-2.279-2.484-4-4.899-4s-4.434,1.721-4.899,4H26.899c-0.465-2.279-2.484-4-4.899-4 s-4.434,1.721-4.899,4h-0.762c-1.451,0-2.693-1.036-2.953-2.464L10.198,29h43.604L50.614,46.535z M56,27H8v-4h48V27z"
              />
              <linearGradient
                id="fCQHAf8lngMR5mlY2uRy_f"
                x1="32"
                x2="32"
                y1="8.333"
                y2="54.93"
                gradientUnits="userSpaceOnUse"
                spreadMethod="reflect"
              >
                <stop offset="0" stop-color="#1a6dff" />
                <stop offset="1" stop-color="#c822ff" />
              </linearGradient>
              <path
                fill="url(#fCQHAf8lngMR5mlY2uRy_f)"
                d="M29,43h6c1.103,0,2-0.897,2-2v-8c0-1.103-0.897-2-2-2h-6c-1.103,0-2,0.897-2,2v8 C27,42.103,27.897,43,29,43z M29,33h6v8h-6V33z"
              />
              <linearGradient
                id="fCQHAf8lngMR5mlY2uRy_g"
                x1="42.91"
                x2="42.91"
                y1="8.333"
                y2="54.93"
                gradientUnits="userSpaceOnUse"
                spreadMethod="reflect"
              >
                <stop offset="0" stop-color="#1a6dff" />
                <stop offset="1" stop-color="#c822ff" />
              </linearGradient>
              <path
                fill="url(#fCQHAf8lngMR5mlY2uRy_g)"
                d="M41,43h2.153c0.98,0,1.81-0.702,1.965-1.632l1.674-8.04c0.097-0.581-0.065-1.172-0.446-1.621 S45.408,31,44.819,31H41c-1.103,0-2,0.897-2,2v8C39,42.103,39.897,43,41,43z M41,33l3.827-0.04L43.152,41H41V33z"
              />
              <linearGradient
                id="fCQHAf8lngMR5mlY2uRy_h"
                x1="21.092"
                x2="21.092"
                y1="8.333"
                y2="54.93"
                gradientUnits="userSpaceOnUse"
                spreadMethod="reflect"
              >
                <stop offset="0" stop-color="#1a6dff" />
                <stop offset="1" stop-color="#c822ff" />
              </linearGradient>
              <path
                fill="url(#fCQHAf8lngMR5mlY2uRy_h)"
                d="M18.874,41.33c0.163,0.968,0.992,1.67,1.973,1.67H23c1.103,0,2-0.897,2-2v-8 c0-1.103-0.897-2-2-2h-3.819c-0.589,0-1.146,0.258-1.526,0.707s-0.543,1.04-0.438,1.661L18.874,41.33z M23,33l0.002,8l-2.163-0.04 L19.181,33H23z"
              />
            </svg>
            <h1 class="font-bold text-2xl">Your Cart is Empty!</h1>
          </section>
        )}
      </div>
    </div>
  );
});
