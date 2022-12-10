import { component$, Slot, useContextProvider } from "@builder.io/qwik";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import { GlobalContext, initialState } from "~/GlobalState";

export default component$(() => {
  useContextProvider(GlobalContext, initialState);
  return (
    <>
      <main>
        <Header />
        <section>
          <Slot />
        </section>
      </main>
      <Footer />
    </>
  );
});
