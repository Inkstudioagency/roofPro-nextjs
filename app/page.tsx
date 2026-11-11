import WebflowPage from "@/components/webflow/WebflowPage";

// TEMPORARY (Phase 1 foundation only): replaced by the full home page in Phase 3.
export default function Home() {
  return (
    <>
      <WebflowPage page="index" />
      <main className="main-wrapper" />
    </>
  );
}
