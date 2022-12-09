import { component$ } from "@builder.io/qwik";

export const SearchBox = component$(() => {
  return (
    <div class="brand-name-search">
      <a href="{{ route('welcome') }}">E-Comm Store</a>
      <form>
        <input type="text" placeholder="Search Items ..." />

        <select name="" id="">
          <option value="">All Categories</option>

          {/* @foreach($categories as $category) */}
          <option value="{{ $category->id }}">Category 1</option>
          {/* @endforeach */}
        </select>
        <div>
          <div class="search-results">
            {/* @foreach($searchedProducts as $product) */}
            <p>
              <a href=" ">{"{ $product->title }"}</a>
            </p>
            {/* @endforeach */}
          </div>
        </div>

        <button>
          <i class="ti-search"></i>
        </button>
      </form>
    </div>
  );
});
