import Head from "next/head";
import { Header, Description, SubHeader, Tile } from "components/common";
import {
  Banner,
  PageContainer,
  Container,
  TilesContainer,
} from "components/layout";
import Api from "utils/Api";

export default function Attraction({ attraction, similaryAttraction }) {
  console.log(attraction);

  console.log(similaryAttraction);

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
