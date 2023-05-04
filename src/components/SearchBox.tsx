import { component$ } from "@builder.io/qwik";
import { SITE } from "@/data/config";
import { categories } from "@/data/proucts";
import { sentenseCase, slugify } from "./utils/utils";

export default component$(() => {
  return (
    <div class="brand-name-search">
      <a href="/">{SITE.name}</a>
      <form>
        <input type="text" placeholder="Search Items ..." />

        <select name="" id="">
          <option value="">All Categories</option>

          {categories.map((category, index) => (
            <option key={index} value={slugify(category)}>
              {sentenseCase(category)}
            </option>
          ))}
        </select>
        <div>
          <div class="search-results hidden">
            {/* @foreach($searchedProducts as $product) */}
            <p>
              <a href=" ">{"{ $product->title }"}</a>
            </p>
            {/* @endforeach */}
          </div>
        </div>

        <button>
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
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </form>
    </div>
  );
});
