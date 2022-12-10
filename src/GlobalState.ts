import { createContext, useContext } from "@builder.io/qwik";

export const CONTEXT_NAME = "QWIKMALL";

export const GlobalContext = createContext<GlobalState>(CONTEXT_NAME);

export const initialState: GlobalState = { cart: [] };

export function useGlobalState(): GlobalState {
  return useContext(GlobalContext);
}
