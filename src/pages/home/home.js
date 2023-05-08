import { BasicLayout, SearchLayout } from "@/layouts";
import { Home } from "@/components/Home";
import { Button, Container } from "semantic-ui-react";
import { Separator, BarTrust, BannerAd } from "@/components/Shared";
import Link from "next/link";

const categoryId = {
  interior: 1,
  jardin: 2,
  sustratos: 4,
  abonos: 5,
};

export default function HomePage() {
  return (
    <>
      <BasicLayout>
        <SearchLayout />
        <Separator height={50} />
        <Container>
          <Home.LatestProducts title="Productos más vendidos" />
        </Container>

        <Separator height={100} />
        <BarTrust />
        <Separator height={100} />

        <Container>
          <Home.LatestProducts
            title="Plantas de interior"
            limit={3}
            categoryId={categoryId.interior}
          />
          <Separator height={20} />
          <Button>
            <Link href="/">Ver más...</Link>
          </Button>
          <Separator height={50} />
          <Home.LatestProducts
            title="Plantas de jardín"
            limit={3}
            categoryId={categoryId.jardin}
          />
          <Separator height={20} />
          <Button>
            <Link href="/">Ver más...</Link>
          </Button>
          <Separator height={50} />

          <BannerAd btnLink="/account" image="/img/offer-banner.png" />

          <Separator height={50} />
          <Home.LatestProducts
            title="Sustratos"
            limit={3}
            categoryId={categoryId.sustratos}
          />
          <Separator height={20} />
          <Button>
            <Link href="/">Ver más...</Link>
          </Button>
          <Separator height={50} />
          <Home.LatestProducts
            title="Abonos y fertilizantes"
            limit={3}
            categoryId={categoryId.abonos}
          />
          <Separator height={20} />
          <Button>
            <Link href="/">Ver más...</Link>
          </Button>
        </Container>

        <Separator height={50} />
      </BasicLayout>
    </>
  );
}
