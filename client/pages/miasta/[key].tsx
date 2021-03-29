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
import config from "config/config";

export default function City({ city, highlighted }) {
  return (
    <>
      <Head>
        <title>
          {config.pageName} | {UppercaseFirstLetter(city.name)}
        </title>
      </Head>
      <Banner
        text={UppercaseFirstLetter(city.name)}
        img="https://www.telegraph.co.uk/content/dam/Travel/2019/August/iStock-1047662500.jpg"
      />
      <PageContainer marginTop={true}>
        <Container withMargin>
          <Header>{UppercaseFirstLetter(city.name)}</Header>
        </Container>
        <Description content={city.description} />
        <SubHeader>
          Najciekawsze miejsca w {UppercaseFirstLetter(city.name)}
        </SubHeader>
        <TilesContainer>
          {highlighted.map((item, index: number) => (
            <Tile
              name={item.name}
              img="https://www.telegraph.co.uk/content/dam/Travel/2019/August/iStock-1047662500.jpg"
              description={item.description}
              key={index}
              url={`/atrakcje/${item.key}`}
            />
          ))}
        </TilesContainer>
      </PageContainer>
    </>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const city = await Api.get(`/city/${params.key}`);
    const attractions = await Api.get(`/attraction?city=${params.key}`);

    return {
      props: {
        city: city.data,
        highlighted: [...attractions.data],
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
}
