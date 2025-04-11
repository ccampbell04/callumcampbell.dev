import { usePreviousTab } from "@/context/previousTab/previousTabProvider";

export function usePreviousTabContext() {
  const editorContext = usePreviousTab();
  if (!editorContext) {
    throw new Error("usePreviousTab must be used within an PreviousTabProvider");
  }
  return editorContext;
}
