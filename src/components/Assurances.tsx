import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section class="mt-16 flex w-full scecomm-container">
      <div class="w-1/4 p-4 flex">
        <i class="ti-credit-card"></i>
        <div class="flex flex-col gap-1">
          <h3 class="text-brand-1  w-full text-base">Secure Payments</h3>
          <p class="text-brand-4  w-full text-base">M-Pesa or Cash on Pickup</p>
        </div>
      </div>
      <div class="w-1/4 p-4 flex">
        <i class="ti-credit-card"></i>
        <div class="flex flex-col gap-1">
          <h3 class="text-brand-1  w-full text-base">100% Authentic</h3>
          <p class="text-brand-4  w-full text-base">
            Guaranteed high quality with genuine brands
          </p>
        </div>
      </div>
      <div class="w-1/4 p-4 flex">
        <i class="ti-credit-card"></i>
        <div class="flex flex-col gap-1">
          <h3 class="text-brand-1  w-full text-base">Top-Notch Support</h3>
          <p class="text-brand-4  w-full text-base">
            Over 27 years of excellent customer satisfaction
          </p>
        </div>
      </div>
      <div class="w-1/4 p-4 flex">
        <i class="ti-credit-card"></i>
        <div class="flex flex-col gap-1">
          <h3 class="text-brand-1  w-full text-base">Reliable delivery</h3>
          <p class="text-brand-4  w-full text-base">
            Fast and on-time deliveries to keep you going
          </p>
        </div>
      </div>
    </section>
  );
});
