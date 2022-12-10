import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Assurances from "~/components/Assurances";
import ProductCard from "~/components/ProductCard";
import Showcase from "~/components/Showcase";
import { categories, products } from "~/data/proucts";

export const head: DocumentHead = {
  title: "Home",
  meta: [
    {
      name: "Commerce IT Mall",
      content: "Your Shopping Destination!",
    },
  ],
};
export default component$(() => {
  return (
    <main id="HomePage">
      <Showcase />

      <section class="featured products-view scecomm-container">
        <div class="title-action">
          <h3>Featured Products</h3>
          <a href="{{ route('collections.featured') }}">
            View All
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

        <div class="product-list">
          {products.map((product, i) => (
            <ProductCard product={product} key={i} />
          ))}
        </div>
      </section>

      <Assurances />
    </main>
  );
});
