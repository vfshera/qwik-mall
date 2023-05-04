import { component$ } from "@builder.io/qwik";
import { SITE } from "@/data/config";

export default component$(() => {
  return (
    <section
      class="showcase scecomm-container bg-no-repeat h-[450px]"
      style="background: url('/images/hero.webp')"
    >
      <div class="flex flex-col justify-center items-center gap-5 h-full">
        <h2 class="text-white text-5xl font-semibold">
          Welcome to {SITE.name}
        </h2>
      </div>
    </section>
  );
});
