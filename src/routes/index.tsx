import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import ProductCard from "~/components/ProductCard";

export const head: DocumentHead = {
  title: "Home - Commerce IT Mall",
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
      <section
        class="showcase scecomm-container"
        style="background: url('{{ asset('storage/images/showcase.webp')}}') no-repeat  center"
      >
        <div class="showcase-content">
          <h2>Office & School Stationery, IT & Furniture</h2>
          <p>Everything you need to operate seamlessly</p>
          <button>BROWSE</button>
        </div>
      </section>

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
          {[...new Array(6).fill(undefined)].map((p) => (
            <ProductCard />
          ))}
        </div>
      </section>

      <section class="shop-by-category scecomm-container">
        <div class="title-action">
          <h3>Shop by Category</h3>
          <a href="{{ route('collections.categories') }}">
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

        <div class="category-list">
          <div class="category">
            <img
              src="storage/images/categories/copypaper_300x.webp"
              alt="Printer & Copier Paper"
            />

            <h3>Printer & Copier Paper</h3>
          </div>

          <div class="category">
            <img
              src="storage/images/categories/binders_300x.webp"
              alt="Files & Folders"
            />

            <h3>Files & Folders</h3>
          </div>

          <div class="category">
            <img
              src="storage/images/categories/hp-ink_300x.webp"
              alt="Toners & Catriges"
            />

            <h3>Toners & Catriges</h3>
          </div>

          <div class="category">
            <img
              src="storage/images/categories/officechair_300x.webp"
              alt="Chairs"
            />

            <h3>Chairs</h3>
          </div>

          <div class="category">
            <img
              src="storage/images/categories/Pen_300x.webp"
              alt="Pens & Ink"
            />

            <h3>Pens & Ink</h3>
          </div>

          <div class="category">
            <img
              src="storage/images/categories/School_Supplies_300x.webp"
              alt="Its Back to SChool 2021..."
            />

            <h3>Its Back to SChool 2021...</h3>
          </div>
        </div>
      </section>

      <section class="our-assurances scecomm-container">
        <div class="assurance">
          <i class="ti-credit-card"></i>
          <div class="claim">
            <h3>Secure Payments</h3>
            <p>M-Pesa or Cash on Pickup</p>
          </div>
        </div>

        <div class="assurance">
          <i class="ti-medall"></i>
          <div class="claim">
            <h3>100% Authentic</h3>
            <p>Guaranteed high quality with genuine brands</p>
          </div>
        </div>

        <div class="assurance">
          <i class="ti-headphone-alt"></i>
          <div class="claim">
            <h3>Top-Notch Support</h3>
            <p>Over 27 years of excellent customer satisfaction</p>
          </div>
        </div>

        <div class="assurance">
          <i class="ti-package"></i>
          <div class="claim">
            <h3>Reliable delivery</h3>
            <p>Fast and on-time deliveries to keep you going</p>
          </div>
        </div>
      </section>

      <section class="divider-section scecomm-container">
        <hr />
      </section>
    </main>
  );
});
