import { createContext, useContext } from "@builder.io/qwik";

export const CONTEXT_NAME = "QWIKMALL";

export const GlobalContext = createContext<IGlobalState>(CONTEXT_NAME);

export function useGlobalState(): IGlobalState {
  return useContext(GlobalContext);
}
