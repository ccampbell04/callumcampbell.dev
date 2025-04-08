import { useActive } from "@/context/active/activeProvider";

export function useActiveContext() {
  const activeContext = useActive();
  if (!activeContext) {
    throw new Error("useActive must be used within an ActiveProvider");
  }
  return activeContext;
}
