import React from 'react';
import {
  StyledPageContainer,
  PageHeader,
  StyledText,
  StyledSubHeader,
} from '../../components/common';
import { connect } from 'react-redux';

interface Props {
  regionUrl: string;
  regions: any;
}

function Region({ regionUrl, regions }: Props) {
  const thisRegion = regions.find((item: any) => item.url === regionUrl);

  return (
    <>
      <PageHeader text={thisRegion.name} images={thisRegion.img} />
      <StyledPageContainer>
        <StyledText>{thisRegion.description}</StyledText>
        <StyledSubHeader>Najciekawsze atrakcje</StyledSubHeader>
      </StyledPageContainer>
    </>
  );
}

const mapStateToProps = (state: any) => ({
  regions: state.regions,
});

export default connect(mapStateToProps, null)(Region);
