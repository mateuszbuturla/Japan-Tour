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
  cityUrl: string;
  cities: any;
}

function City({ cityUrl, cities }: Props) {
  const thisCity = cities.find((item: any) => item.url === cityUrl);

  return (
    <>
      <PageHeader text={thisCity.name} images={thisCity.img} />
      <StyledPageContainer>
        <StyledText>{thisCity.description}</StyledText>
        <StyledSubHeader>Najciekawsze atrakcje</StyledSubHeader>
        {/* <StyledAttractionTilesContainer>
          {attractions
            .filter(
              (item: any) =>
                item.region.toLowerCase() === thisRegion.name.toLowerCase(),
            )
            .map((item: any) => (
              <AttractionTile attraction={item} />
            ))}
        </StyledAttractionTilesContainer> */}
        <StyledSubHeader>Pozostałe atrakcje</StyledSubHeader>
      </StyledPageContainer>
    </>
  );
}

const mapStateToProps = (state: any) => ({
  cities: state.cities,
});

export default connect(mapStateToProps, null)(City);
