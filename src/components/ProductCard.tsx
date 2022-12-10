import { component$ } from "@builder.io/qwik";
import { useGlobalState } from "~/GlobalState";
import { slugify } from "./utils/utils";

interface Props {
  product: Product;
}
export default component$(({ product }: Props) => {
  const { cart } = useGlobalState();

  return (
    <div class="relative flex flex-col rounded-md shadow-sm  overflow-hidden group">
      <button class="absolute right-4 top-4 z-10 rounded-full bg-white hover:bg-pink-500 p-1.5 text-gray-900  hover:text-white transition-colors">
        <span class="sr-only">Wishlist</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </button>

      <img
        src={product.image}
        alt={product.title}
        class="object-cover w-full h-48 md:h-56 lg:h-64 transition duration-500 group-hover:scale-105 sm:h-72"
      />

      <div class="relative p-4 md:p-6 flex-1 flex flex-col justify-between bg-white border   border-gray-100">
        <span class="whitespace-nowrap bg-brand-1 w-max text-white px-3 py-1 md:py-1.5 text-xs font-medium">
          New
        </span>

        <a
          href={`/products/${slugify(product.category)}/${product.id}/${slugify(
            product.title
          )}`}
        >
          <p class="mt-4 text-sm md:text-lg font-medium text-gray-900 line-clamp-1">
            {product.title}
          </p>
        </a>

        <p class="mt-1.5 text-sm text-gray-700">${product.price}</p>

        <button
          onClick$={() => {
            cart.push({ item: product, quantity: 1 });
          }}
          class="mt-4 block w-full py-2.5  md:p-4 text-sm font-medium transition bg-brand-1 text-white rounded hover:scale-105"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
});
