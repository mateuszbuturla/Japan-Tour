import Head from "next/head";
import { Header, Description, SubHeader, Tile } from "components/common";
import {
  Banner,
  PageContainer,
  Container,
  TilesContainer,
} from "components/layout";
import Api from "utils/Api";
import UppercaseFirstLetter from "utils/UppercaseFirstLetter";

export default function City({ prefecture, highlighted }) {
  return (
    <>
      <Head>
        <title>Moja Japonia | {UppercaseFirstLetter(prefecture.name)}</title>
      </Head>
      <Banner
        text="Tokyo"
        img="https://www.telegraph.co.uk/content/dam/Travel/2019/August/iStock-1047662500.jpg"
      />
      <PageContainer marginTop={true}>
        <Container withMargin>
          <Header>{UppercaseFirstLetter(prefecture.name)}</Header>
        </Container>
        <Description content={prefecture.description} />
        <SubHeader>
          Najciekawsze miejsca w prefekturze{" "}
          {UppercaseFirstLetter(prefecture.name)}
        </SubHeader>
        <TilesContainer>
          {highlighted.map((item, index: number) => (
            <Tile
              name={item.name}
              img="https://www.telegraph.co.uk/content/dam/Travel/2019/August/iStock-1047662500.jpg"
              description={item.description}
              key={index}
            />
          ))}
        </TilesContainer>
      </PageContainer>
    </>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const prefecture = await Api.get(`/prefecture/${params.key}`);
    const cities = await Api.get(`/city?prefecture=${params.key}`);

    return {
      props: {
        prefecture: prefecture.data,
        highlighted: [...cities.data],
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
}
