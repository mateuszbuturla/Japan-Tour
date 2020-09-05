import React from 'react';
import {
  StyledPageContainer,
  PageHeader,
  StyledText,
} from '../../components/common';
import { connect } from 'react-redux';

interface Props {
  attractionUrl: string;
  attractions: any;
}

function Attraction({ attractionUrl, attractions }: Props) {
  const thisAttraction = attractions.find(
    (item: any) => item.url === attractionUrl,
  );

  return (
    <>
      <PageHeader text={thisAttraction.name} images={thisAttraction.img} />
      <StyledPageContainer>
        <StyledText>{thisAttraction.description}</StyledText>
      </StyledPageContainer>
    </>
  );
}

const mapStateToProps = (state: any) => ({
  attractions: state.attractions,
});

export default connect(mapStateToProps, null)(Attraction);
