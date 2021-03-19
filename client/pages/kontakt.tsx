import Head from "next/head";
import { Paragraph, Input, Textarea, SubHeader } from "components/common";
import {
  Banner,
  PageContainer,
  InputContainer,
  Container,
} from "components/layout";
import React from "react";
import { useForm } from "react-hook-form";

export default function Home() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <Head>
        <title>Moja Japonia | Kontakt</title>
      </Head>
      <Banner text="Kontakt" text2="Skontaktuj się z nami!" />
      <PageContainer>
        <Container withMargin>
          <SubHeader>Formularz kontaktowy</SubHeader>
        </Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <Input name="e-mail" placeholder="E-mail" />
          </InputContainer>
          <InputContainer>
            <Textarea name="message" placeholder="Wiadomość" />
          </InputContainer>
        </form>
        <Paragraph>
          Lub napisz na adres:
          <a href="mailto:moja-japonia@gmail.com">moja-japonia@gmail.com</a>
        </Paragraph>
      </PageContainer>
    </>
  );
}
