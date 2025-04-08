import { useEditor } from "@/context/editor/editorProvider";

export function useEditorContext() {
  const editorContext = useEditor();
  if (!editorContext) {
    throw new Error("useEditor must be used within an EditorProvider");
  }
  return editorContext;
}
