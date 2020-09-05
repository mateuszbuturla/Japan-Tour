import React from 'react';
import {
  StyledPageContainer,
  PageHeader,
  StyledText,
  StyledSubHeader,
  StyledAttractionTilesContainer,
  AttractionTile,
} from '../../components/common';
import { connect } from 'react-redux';

interface Props {
  regionUrl: string;
  regions: any;
  attractions: any;
}

function Region({ regionUrl, regions, attractions }: Props) {
  const thisRegion = regions.find((item: any) => item.url === regionUrl);

  return (
    <>
      <PageHeader text={thisRegion.name} images={thisRegion.img} />
      <StyledPageContainer>
        <StyledText>{thisRegion.description}</StyledText>
        <StyledSubHeader>Najciekawsze atrakcje</StyledSubHeader>
        <StyledAttractionTilesContainer>
          {attractions
            .filter(
              (item: any) =>
                item.region.toLowerCase() === thisRegion.key.toLowerCase() &&
                item.bestAttractions,
            )
            .map((item: any) => (
              <AttractionTile attraction={item} />
            ))}
        </StyledAttractionTilesContainer>
      </StyledPageContainer>
    </>
  );
}

const mapStateToProps = (state: any) => ({
  regions: state.regions,
  attractions: state.attractions,
});

export default connect(mapStateToProps, null)(Region);
