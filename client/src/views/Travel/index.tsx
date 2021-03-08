import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { PageHeader } from 'components/common';
import {
  StyledPageContainer,
  JapanMap,
  StyledMainContentContainer,
  AsideInfo,
} from 'components/common';
import TypesCategory from 'types/TypesCategory';
import { RegionsCitiesFetcher } from 'fetchers';

interface Props {
  categoryUrl: string;
  categories: any;
  setTitle: Function;
}

function Travel({ categoryUrl, categories, setTitle }: Props) {
  const thisCategory: TypesCategory = categories.find(
    (item: TypesCategory) => item.url === categoryUrl,
  );
  const [data, setData] = useState();

  const getData = async () => {
    const resData = await RegionsCitiesFetcher();
    setData(resData);
  };

  useEffect(() => {
    setTitle('Przewodnik podróży');
    if (!data) {
      getData();
    }
  }, []);

  if (!data) {
    return <p>Loading</p>;
  }

  return (
    <>
      <PageHeader
        text={thisCategory.name}
        img={thisCategory.img}
        locationPathElements={[
          { text: 'Strona główna', url: '/' },
          { text: 'Podróże', url: '/podroze' },
        ]}
      />
      <StyledPageContainer>
        <StyledMainContentContainer>
          <JapanMap data={data} />
        </StyledMainContentContainer>
        <AsideInfo data={[]} />
      </StyledPageContainer>
    </>
  );
}

const mapStateToProps = (state: any) => ({
  categories: state.categories,
});

export default connect(mapStateToProps, null)(Travel);
