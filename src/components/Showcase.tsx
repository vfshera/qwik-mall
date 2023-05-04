import { component$ } from "@builder.io/qwik";
import { SITE } from "@/data/config";

export default component$(() => {
  return (
    <section
      class="showcase scecomm-container bg-no-repeat h-[450px]"
      style="background: url('/images/hero.webp')"
    >
      <div class="flex flex-col justify-center items-center gap-5 h-full">
        <h2 class="text-white text-2xl md:text-3xl  text-center font-semibold">
          Welcome to <br />
          <span class=" mt-0.5 block text-4xl   md:text-5xl">{SITE.name}</span>
        </h2>
      </div>
    </section>
  );
});
