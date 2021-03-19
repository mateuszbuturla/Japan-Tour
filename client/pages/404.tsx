import Head from "next/head";
import { Paragraph } from "components/common";
import { Banner, PageContainer, Container } from "components/layout";
import React from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Moja Japonia | 404</title>
      </Head>
      <Banner text="404" text2="Opsss! Nie znaleziono!" />
      <PageContainer>
        <Container withMargin>
          <Paragraph>
            Podana strona nie istnieje lub została przeniesiona. Sprawdź adres
            strony
          </Paragraph>
        </Container>
      </PageContainer>
    </>
  );
}
