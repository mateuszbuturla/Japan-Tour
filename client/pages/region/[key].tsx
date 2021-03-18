import Head from "next/head";
import { useRouter } from "next/router";
import { Header, Description, SubHeader, Tile } from "components/common";
import {
  Banner,
  PageContainer,
  Container,
  TilesContainer,
} from "components/layout";

export default function Region() {
  const router = useRouter();
  const { key } = router.query;

  return (
    <>
      <Head>
        <title>Moja Japonia | Region Hokkaido</title>
      </Head>
      <Banner
        text="Hokkaido"
        img="https://www.telegraph.co.uk/content/dam/Travel/2019/August/iStock-1047662500.jpg"
      />
      <PageContainer marginTop={true}>
        <Container withMargin>
          <Header>Hokkaido</Header>
        </Container>
        <Description />
        <SubHeader>Najciekawsze miejsca w regionie Hokkaido</SubHeader>
        <TilesContainer>
          {Array(7)
            .fill(0)
            .map((item: any, index: number) => (
              <Tile
                name="Tokyo"
                img="https://www.telegraph.co.uk/content/dam/Travel/2019/August/iStock-1047662500.jpg"
                key={index}
              />
            ))}
        </TilesContainer>
      </PageContainer>
    </>
  );
}
