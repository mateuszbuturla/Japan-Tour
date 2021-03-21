import Head from "next/head";
import { useRouter } from "next/router";
import { Header, Description, SubHeader, Tile } from "components/common";
import {
  Banner,
  PageContainer,
  Container,
  TilesContainer,
} from "components/layout";

export default function Attraction() {
  const router = useRouter();
  const { key } = router.query;

  return (
    <>
      <Head>
        <title>Moja Japonia | Tokyo skytree</title>
      </Head>
      <Banner
        text="Tokyo"
        img="https://www.telegraph.co.uk/content/dam/Travel/2019/August/iStock-1047662500.jpg"
      />
      <PageContainer marginTop={true}>
        <Container withMargin>
          <Header>Tokyo skytree</Header>
        </Container>
        <Description />
        <SubHeader>Podobne atrakcje w pobliżu</SubHeader>
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
