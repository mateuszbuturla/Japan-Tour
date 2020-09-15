import React from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import TypesApplicationState from 'types/TypesApplicationState';

function PageHelmet() {
  const { title } = useSelector((state: TypesApplicationState) => state.title);

  return (
    <Helmet>
      <title>{title}</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
}

export default PageHelmet;
