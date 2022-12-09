import { component$, PropFunction } from "@builder.io/qwik";
import CartItem from "./CartItem";

interface CartProps {
  onClose$: PropFunction<() => void>;
}

export default component$((props: CartProps) => {
  return (
    <div class="fixed top-0 left-0 flex justify-center pt-10  bg-gray-900/30 w-full h-full z-50 ">
      <div class="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 rounded drop-shadow bg-gray-50 text-gray-800">
        <h2 class="text-xl font-semibold">Your cart</h2>
        <ul class="flex flex-col divide-y divide-gray-700">
          {[...new Array(3).fill(undefined)].map((cartItem) => (
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
        <div class="flex justify-end space-x-4">
          <button
            onClick$={props.onClose$}
            type="button"
            class="px-6 py-2 border rounded-md border-violet-400"
          >
            Back
            <span class="sr-only sm:not-sr-only">to shop</span>
          </button>
          <button
            type="button"
            class="px-6 py-2 border rounded-md bg-violet-400 text-gray-900 border-violet-400"
          >
            <span class="sr-only sm:not-sr-only">Continue to</span>Checkout
          </button>
        </div>
      </div>
    </div>
  );
});
