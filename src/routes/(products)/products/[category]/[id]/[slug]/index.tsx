import { component$ } from "@builder.io/qwik";
import { type DocumentHead, routeLoader$ } from "@builder.io/qwik-city";
import NoProduct from "@/components/NoProduct";
import { slugify } from "@/components/utils/utils";
import { products } from "@/data/proucts";
import { useGlobalState } from "@/GlobalState";

export const useProducts = routeLoader$(async ({ params, status }) => {
  const [product] = products.filter((p) => p.id === +params.id);

  if (!product) {
    status(404);
  }

  return product;
});

export const head: DocumentHead = ({ resolveValue }) => {
  const product = resolveValue(useProducts);
  return {
    title: product.title,
    meta: [
      {
        name: "description",
        content: product.description,
      },
    ],
  };
};

export default component$(() => {
  const { cart } = useGlobalState();
  const { value: product } = useProducts();

  return (
    <>
      {product ? (
        <section id="ProductPage" class="my-2">
          <div class="relative mx-auto max-w-screen-xl px-4 py-8">
            <div class="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
              <div class="grid grid-cols-2 gap-4 md:grid-cols-1">
                <img
                  alt={slugify(product.title)}
                  src={product.image}
                  class="aspect-square w-full rounded-xl object-cover"
                />

                <div class="grid grid-cols-2 gap-4 lg:mt-4">
                  {Array.from({ length: 4 }, () => 0).map((_) => (
                    <img
                      alt={slugify(product.title)}
                      src={product.image}
                      class="aspect-square w-full rounded-xl object-cover"
                    />
                  ))}
                </div>
              </div>

              <div class="sticky top-0">
                <strong class="rounded-full border border-brand-1 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-brand-1">
                  Pre Order
                </strong>

                <div class="mt-8 flex justify-between">
                  <div class="max-w-[35ch]">
                    <h1 class="text-2xl font-bold">{product.title}</h1>

                    <p class="mt-0.5 text-sm">Highest Rated Product</p>

                    <div class="mt-2 -ml-0.5 flex">
                      <svg
                        class="h-5 w-5 text-yellow-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>

                      <svg
                        class="h-5 w-5 text-yellow-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>

                      <svg
                        class="h-5 w-5 text-yellow-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>

                      <svg
                        class="h-5 w-5 text-yellow-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>

                      <svg
                        class="h-5 w-5 text-gray-200"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>

                  <p class="text-lg font-bold">${product.price}</p>
                </div>

                <div class="prose max-w-none group-open:hidden">
                  <p>{product.description}</p>
                </div>

                <form class="mt-8">
                  <fieldset>
                    <legend class="mb-1 text-sm font-medium">Category</legend>

                    <div class="flow-root">
                      <div class="-m-0.5 flex flex-wrap">
                        <a
                          href="#"
                          class="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                        >
                          {product.category}
                        </a>
                      </div>
                    </div>
                  </fieldset>

                  <fieldset class="mt-4">
                    <legend class="mb-1 text-sm font-medium">Size</legend>

                    <div class="flow-root">
                      <div class="-m-0.5 flex flex-wrap">
                        <label for="size_xs" class="cursor-pointer p-0.5">
                          <input
                            type="radio"
                            name="size"
                            id="size_xs"
                            class="peer sr-only"
                          />

                          <span class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                            XS
                          </span>
                        </label>

                        <label for="size_s" class="cursor-pointer p-0.5">
                          <input
                            type="radio"
                            name="size"
                            id="size_s"
                            class="peer sr-only"
                          />

                          <span class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                            S
                          </span>
                        </label>

                        <label for="size_m" class="cursor-pointer p-0.5">
                          <input
                            type="radio"
                            name="size"
                            id="size_m"
                            class="peer sr-only"
                          />

                          <span class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                            M
                          </span>
                        </label>

                        <label for="size_l" class="cursor-pointer p-0.5">
                          <input
                            type="radio"
                            name="size"
                            id="size_l"
                            class="peer sr-only"
                          />

                          <span class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                            L
                          </span>
                        </label>

                        <label for="size_xl" class="cursor-pointer p-0.5">
                          <input
                            type="radio"
                            name="size"
                            id="size_xl"
                            class="peer sr-only"
                          />

                          <span class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                            XL
                          </span>
                        </label>
                      </div>
                    </div>
                  </fieldset>

                  <div class="mt-8 flex">
                    <div>
                      <label for="quantity" class="sr-only">
                        Qty
                      </label>

                      <input
                        type="number"
                        id="quantity"
                        min="1"
                        value="1"
                        class="w-12 rounded border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                      />
                    </div>

                    <button
                      type="button"
                      onClick$={() => {
                        cart.push({ item: product, quantity: 1 });
                      }}
                      class="ml-3 block rounded bg-brand-2 px-5 py-3 text-xs   text-gray-700 font-semibold  "
                    >
                      Add to Cart
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <NoProduct />
      )}
    </>
  );
});
