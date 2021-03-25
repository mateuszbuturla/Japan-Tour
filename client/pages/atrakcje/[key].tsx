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

export default function Attraction({ attraction, similaryAttraction }) {
  console.log(attraction);

  console.log(similaryAttraction);

  return (
    <>
      <Head>
        <title>Moja Japonia | {UppercaseFirstLetter(attraction.name)}</title>
      </Head>
      <Banner
        text={UppercaseFirstLetter(attraction.name)}
        img="https://www.telegraph.co.uk/content/dam/Travel/2019/August/iStock-1047662500.jpg"
      />
      <PageContainer marginTop={true}>
        <Container withMargin>
          <Header>{UppercaseFirstLetter(attraction.name)}</Header>
        </Container>
        <Description content={attraction.description} />
        <SubHeader>Podobne atrakcje w pobliżu</SubHeader>
        <TilesContainer>
          {similaryAttraction.map((item, index: number) => (
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
    const attraction = await Api.get(`/attraction/${params.key}`);
    const similaryAttraction = await Api.get(
      `/attraction?categoryId=${attraction.data.category}&prefectureId=${attraction.data.prefecture}`
    );

    return {
      props: {
        attraction: attraction.data,
        similaryAttraction: [...similaryAttraction.data],
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
}
