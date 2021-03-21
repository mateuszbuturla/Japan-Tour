import Head from "next/head";
import { Header, SubHeader, JapanMap, Tile } from "components/common";
import {
  Banner,
  PageContainer,
  TilesContainer,
  Container,
} from "components/layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Moja Japonia | Strona główna</title>
      </Head>
      <Banner
        text="Moja Japonia"
        text2="Znajdź cel swojej pordóży!"
        searchBar={true}
      />
      <PageContainer>
        <Container withMargin>
          <Header>Mapa Japonii</Header>
        </Container>
        <JapanMap />
        <SubHeader>Najczęściej odwiedzane</SubHeader>
        <TilesContainer>
          {Array(4)
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
