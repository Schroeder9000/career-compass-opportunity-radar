import { notFound } from "next/navigation";
import { EditorWorkspace } from "../editor/workspace";

export const metadata = { title: "Editor Workspace Preview" };

export default function EditorPreviewPage() {
  if (process.env.NODE_ENV === "production") notFound();
  return <EditorWorkspace editor="David Schroeder · Local preview" />;
}
