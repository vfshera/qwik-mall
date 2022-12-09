import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="product">
      <img src="#" alt="product image" />
      <div class="product-info">
        <h4>Dola</h4>
        <h3>
          <a href="#">Product </a>
        </h3>
        <p>Ksh.278</p>
      </div>
    </div>
  );
});
