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
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five "
                key={index}
              />
            ))}
        </TilesContainer>
      </PageContainer>
    </>
  );
}
