import { BasicLayout, SearchLayout } from "@/layouts";

export default function HomePage() {
  return (
    <BasicLayout>
      <SearchLayout />
      <h1 style={{ paddingTop: 100 }}>Estamos en home</h1>
    </BasicLayout>
  );
}
