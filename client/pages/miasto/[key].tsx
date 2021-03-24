import Head from "next/head";
import { useRouter } from "next/router";
import { Header, Description, SubHeader, Tile, Map } from "components/common";
import {
  Banner,
  PageContainer,
  Container,
  TilesContainer,
} from "components/layout";

export default function City() {
  const router = useRouter();
  const { key } = router.query;

  return (
    <>
      <Head>
        <title>Moja Japonia | Tokyo</title>
      </Head>
      <Banner
        text="Tokyo"
        img="https://www.telegraph.co.uk/content/dam/Travel/2019/August/iStock-1047662500.jpg"
      />
      <PageContainer marginTop={true}>
        <Container withMargin>
          <Header>Tokyo</Header>
        </Container>
        <Description />
        <SubHeader>Najciekawsze miejsca w Tokyo</SubHeader>
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
