import Head from "next/head";
import { useRouter } from "next/router";
import {
  Header,
  Description,
  RegionHeader,
  MostVisitedTile,
} from "components/common";
import {
  Banner,
  PageContainer,
  Container,
  TilesContainer,
  MostVisitedTilesContainer,
} from "components/layout";

export default function Attraction() {
  const router = useRouter();
  const { key } = router.query;

  return (
    <>
      <Head>
        <title>Moja Japonia | Zamki</title>
      </Head>
      <Banner
        text="Zamki"
        img="https://www.telegraph.co.uk/content/dam/Travel/2019/August/iStock-1047662500.jpg"
      />
      <PageContainer marginTop={true}>
        <Container withMargin>
          <Header>Zamki</Header>
        </Container>
        <Description />
        <RegionHeader region="Hokkaido" />
        <MostVisitedTilesContainer>
          {Array(4)
            .fill(0)
            .map((item: any, index: number) => (
              <MostVisitedTile
                img="https://www.telegraph.co.uk/content/dam/Travel/2019/August/iStock-1047662500.jpg"
                name="Sapporo"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              />
            ))}
        </MostVisitedTilesContainer>
        <RegionHeader region="Tohoku" />
        <MostVisitedTilesContainer>
          {Array(4)
            .fill(0)
            .map((item: any, index: number) => (
              <MostVisitedTile
                img="https://www.telegraph.co.uk/content/dam/Travel/2019/August/iStock-1047662500.jpg"
                name="Sapporo"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              />
            ))}
        </MostVisitedTilesContainer>
        <RegionHeader region="Kanto" />
        <MostVisitedTilesContainer>
          {Array(4)
            .fill(0)
            .map((item: any, index: number) => (
              <MostVisitedTile
                img="https://www.telegraph.co.uk/content/dam/Travel/2019/August/iStock-1047662500.jpg"
                name="Sapporo"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              />
            ))}
        </MostVisitedTilesContainer>
        <RegionHeader region="Chubu" />
        <MostVisitedTilesContainer>
          {Array(4)
            .fill(0)
            .map((item: any, index: number) => (
              <MostVisitedTile
                img="https://www.telegraph.co.uk/content/dam/Travel/2019/August/iStock-1047662500.jpg"
                name="Sapporo"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              />
            ))}
        </MostVisitedTilesContainer>
      </PageContainer>
    </>
  );
}
