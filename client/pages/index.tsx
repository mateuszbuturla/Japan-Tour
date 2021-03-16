import Head from "next/head";
import { Header, SubHeader, JapanMap, Tile } from "components/common";
import { Banner, PageContainer, TilesContainer } from "components/layout";

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
        <Header>Mapa Japonii</Header>
        <JapanMap />
        <SubHeader>Najczęściej odwiedzane</SubHeader>
        <TilesContainer>
          {Array(4)
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
