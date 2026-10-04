import { createFileRoute } from "@tanstack/react-router";
import { StudioPage } from "@/components/studio/studio-page";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <StudioPage />;
}
