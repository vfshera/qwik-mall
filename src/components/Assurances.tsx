import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section class="my-20   flex w-full scecomm-container">
      <div class="w-1/4 p-4 flex gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-16 h-16 stroke-brand-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
          />
        </svg>

        <div class="flex flex-col gap-1">
          <h3 class="text-brand-1  w-full text-base">Secure Payments</h3>
          <p class="text-brand-4  w-full text-base">M-Pesa or Cash on Pickup</p>
        </div>
      </div>
      <div class="w-1/4 p-4 flex gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-16 h-16 stroke-brand-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>

        <div class="flex flex-col gap-1">
          <h3 class="text-brand-1  w-full text-base">100% Authentic</h3>
          <p class="text-brand-4  w-full text-base">
            Guaranteed high quality with genuine brands
          </p>
        </div>
      </div>
      <div class="w-1/4 p-4 flex gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-16 h-16 stroke-brand-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
          />
        </svg>

        <div class="flex flex-col gap-1">
          <h3 class="text-brand-1  w-full text-base">Top-Notch Support</h3>
          <p class="text-brand-4  w-full text-base">
            Over 27 years of excellent customer satisfaction
          </p>
        </div>
      </div>
      <div class="w-1/4 p-4 flex gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-16 h-16 stroke-brand-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
          />
        </svg>

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
