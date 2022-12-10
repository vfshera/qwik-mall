import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="flex flex-col h-screen bg-white">
      <img
        src="/images/hero.webp"
        alt="No product"
        class="object-cover w-full h-64"
      />

      <div class="flex items-center justify-center flex-1">
        <div class="max-w-xl px-4 py-8 mx-auto text-center">
          <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            We can't find that product.
          </h1>

          <p class="mt-4 text-gray-500">
            Try searching again, or return home to start from the beginning.
          </p>

          <a
            href="/"
            class="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-brand-1 rounded hover:bg-brand-1/90 focus:outline-none focus:ring"
          >
            Go Back Home
          </a>
        </div>
      </div>
    </div>
  );
});
