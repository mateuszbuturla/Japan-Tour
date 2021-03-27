import Head from "next/head";
import { Header, RegionHeader, MostVisitedTile } from "components/common";
import {
  Banner,
  PageContainer,
  MostVisitedTilesContainer,
  Container,
  TilesWithHeaderContainer,
} from "components/layout";
import config from "config/config";

export default function MostVisited() {
  return (
    <>
      <Head>
        <title>{config.pageName} | Najczęściej odwiedzane</title>
      </Head>
      <Banner
        text="Moja Japonia"
        text2="Znajdź cel swojej pordóży!"
        searchBar={true}
      />
      <PageContainer>
        <Container withMargin>
          <Header>Najczęściej odwiedzane</Header>
        </Container>
        <TilesWithHeaderContainer>
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
        </TilesWithHeaderContainer>
        <TilesWithHeaderContainer>
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
        </TilesWithHeaderContainer>
        <TilesWithHeaderContainer>
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
        </TilesWithHeaderContainer>
        <TilesWithHeaderContainer>
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
        </TilesWithHeaderContainer>
        <TilesWithHeaderContainer>
          <RegionHeader region="Kansai" />
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
        </TilesWithHeaderContainer>
        <TilesWithHeaderContainer>
          <RegionHeader region="Chugoku" />
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
        </TilesWithHeaderContainer>
        <TilesWithHeaderContainer>
          <RegionHeader region="Shikoku" />
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
        </TilesWithHeaderContainer>
        <TilesWithHeaderContainer>
          <RegionHeader region="Kyushu" />
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
        </TilesWithHeaderContainer>
      </PageContainer>
    </>
  );
}
