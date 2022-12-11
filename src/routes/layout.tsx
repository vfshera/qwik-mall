import {
  component$,
  Slot,
  useContextProvider,
  useStore,
} from "@builder.io/qwik";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import { GlobalContext } from "~/GlobalState";

export default component$(() => {
  const initialState = useStore<IGlobalState>({
    cart: [],
  });
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
