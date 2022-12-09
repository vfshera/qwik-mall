import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <footer class="scecomm-container">
      <div class="info">
        <div class="drive">
          <h3>ABOUT THE SHOP</h3>
          <p>
            <span>Commerce IT Mall</span> is the leading suppliers of
            Stationery, Office Furniture and IT with over 27 years of experience
            in East Africa
          </p>
        </div>

        <div class="copyright">
          &copy; {new Date().getFullYear()} | By Franklin Shera
        </div>
      </div>

      <div class="footer-links">
        <h3>CUSTOMER SERVICE</h3>
        <ul>
          <li>
            <a href="#">How It Works</a>
          </li>
          <li>
            <a href="#">FAQs</a>
          </li>
          <li>
            <a href="#">Delivery & Shipping</a>
          </li>
          <li>
            <a href="#">Payment Policy</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="/">Privacy Policy</a>
          </li>
          <li>
            <a href="/">Terms & Conditions</a>
          </li>
        </ul>
      </div>
    </footer>
  );
});
