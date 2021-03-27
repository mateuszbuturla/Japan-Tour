import Head from "next/head";
import {
  Header,
  Description,
  RegionHeader,
  MostVisitedTile,
} from "components/common";
import {
  Banner,
  PageContainer,
  Container,
  MostVisitedTilesContainer,
  TilesWithHeaderContainer,
} from "components/layout";
import Api from "utils/Api";
import UppercaseFirstLetter from "utils/UppercaseFirstLetter";
import config from "config/config";

export default function Attraction({ category, regions, attractions }) {
  return (
    <>
      <Head>
        <title>
          {config.pageName} | {UppercaseFirstLetter(category.name)}
        </title>
      </Head>
      <Banner
        text={UppercaseFirstLetter(category.name)}
        img="https://www.telegraph.co.uk/content/dam/Travel/2019/August/iStock-1047662500.jpg"
      />
      <PageContainer marginTop={true}>
        <Container withMargin>
          <Header>{UppercaseFirstLetter(category.name)}</Header>
        </Container>
        <Description content={category.description} />
        {regions.map((region, index: number) => (
          <TilesWithHeaderContainer key={index}>
            <RegionHeader region={UppercaseFirstLetter(region.name)} />
            <MostVisitedTilesContainer>
              {attractions
                .filter((item) => item.region === region.id)
                .map((item, index: number) => (
                  <MostVisitedTile
                    name={item.name}
                    img="https://www.telegraph.co.uk/content/dam/Travel/2019/August/iStock-1047662500.jpg"
                    description={item.description}
                    key={index}
                  />
                ))}
            </MostVisitedTilesContainer>
          </TilesWithHeaderContainer>
        ))}
      </PageContainer>
    </>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const category = await Api.get(`/category/${params.key}`);
    const regions = await Api.get("/region");
    const attractions = await Api.get(`/attraction`);

    return {
      props: {
        category: category.data,
        regions: regions.data,
        attractions: [...attractions.data],
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
}
