import { component$, PropFunction } from "@builder.io/qwik";
import CartItem from "./CartItem";

interface CartProps {
  onClose$: PropFunction<() => void>;
}

export default component$((props: CartProps) => {
  return (
    <div class="fixed top-0 left-0 flex justify-end  bg-gradient-to-l to-gray-900/50 from-gray-900/90 w-full h-full z-50 ">
      <div class="flex relative flex-col max-w-3xl p-6 space-y-4 sm:p-10 rounded drop-shadow bg-gray-50 text-gray-800">
        <h2 class="text-xl font-semibold">Your cart</h2>

        <button
          class="absolute right-6 text-5xl p-1 cursor-pointer  -translate-y-1/2 top-6"
          onClick$={props.onClose$}
        >
          &times;
        </button>
        <ul class="flex flex-col divide-y divide-gray-700 overflow-y-scroll">
          {[...new Array(5).fill(undefined)].map((cartItem) => (
            <CartItem />
          ))}
        </ul>
        <div class="space-y-1 text-right">
          <p>
            Total amount:
            <span class="font-semibold">357 €</span>
          </p>
          <p class="text-sm text-gray-400">
            Not including taxes and shipping costs
          </p>
        </div>

        <button
          type="button"
          class="px-6 py-2 border rounded-md bg-brand-1 text-white  "
        >
          <span class="sr-only sm:not-sr-only">Continue to</span>Checkout
        </button>
      </div>
    </div>
  );
});
