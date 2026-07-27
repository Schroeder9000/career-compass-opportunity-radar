import { requireChatGPTUser } from "../chatgpt-auth";
import { EditorWorkspace } from "./workspace";

export const dynamic = "force-dynamic";
export const metadata = { title: "Editor workspace" };

export default async function EditorPage() {
  const user = await requireChatGPTUser("/editor");
  return <EditorWorkspace editor={user.displayName || user.email || "Editor"} />;
}
