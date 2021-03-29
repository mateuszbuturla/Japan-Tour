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

export default function Region({ region, highlighted }) {
  return (
    <>
      <Head>
        <title>
          {config.pageName} | Region {UppercaseFirstLetter(region.name)}
        </title>
      </Head>
      <Banner
        text={UppercaseFirstLetter(region.name)}
        img="https://www.telegraph.co.uk/content/dam/Travel/2019/August/iStock-1047662500.jpg"
      />
      <PageContainer marginTop={true}>
        <Container withMargin>
          <Header>{UppercaseFirstLetter(region.name)}</Header>
        </Container>
        <Description content={region.description} />
        <SubHeader>
          Najciekawsze miejsca w regionie {UppercaseFirstLetter(region.name)}
        </SubHeader>
        <TilesContainer>
          {highlighted.map((item, index: number) => (
            <Tile
              name={item.name}
              img="https://www.telegraph.co.uk/content/dam/Travel/2019/August/iStock-1047662500.jpg"
              description={item.description}
              key={index}
              url={`/miasta/${item.name}`}
            />
          ))}
        </TilesContainer>
      </PageContainer>
    </>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const region = await Api.get(`/region/${params.key}`);
    const cities = await Api.get(`/city?region=${params.key}`);

    return {
      props: {
        region: region.data,
        highlighted: [...cities.data],
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
}
