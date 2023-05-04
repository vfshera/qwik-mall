import { createContextId, useContext } from "@builder.io/qwik";

export const CONTEXT_NAME = "QWIK_MALL";

export const GlobalContext = createContextId<IGlobalState>(CONTEXT_NAME);

export function useGlobalState(): IGlobalState {
  return useContext(GlobalContext);
}
