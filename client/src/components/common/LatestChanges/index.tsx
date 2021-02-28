import React from 'react';
import {
  StyledLastestChangesContainer,
  StyledLastestChangesElement,
  StyledLastestChangesElementCell,
  StyledLastestChangesCellTitlesContainer,
  StyledLastestChangesCellTitle,
  StyledLastestChangesElementIcon,
} from './StyledLatestChanges';

import CategoryIcon from 'assets/icons/category.svg';
import RegionIcon from 'assets/icons/region.svg';
import CityIcon from 'assets/icons/city.svg';
import AttractionIcon from 'assets/icons/attraction.svg';
import KitchenIcon from 'assets/icons/kitchen.svg';
import CultureIcon from 'assets/icons/culture.svg';
import TypesActionHistory from 'types/TypesActionHistory';

interface Props {
  data: TypesActionHistory[];
}

const elementTypeIcon: any = {
  categories: CategoryIcon,
  regions: RegionIcon,
  cities: CityIcon,
  attractions: AttractionIcon,
  culture: CultureIcon,
  kitchen: KitchenIcon,
};

function LatestChanges({ data }: Props) {
  return (
    <StyledLastestChangesContainer>
      <StyledLastestChangesCellTitlesContainer>
        <StyledLastestChangesCellTitle width="75"></StyledLastestChangesCellTitle>
        <StyledLastestChangesCellTitle width="350">Nazwa</StyledLastestChangesCellTitle>
        <StyledLastestChangesCellTitle width="350">Autor</StyledLastestChangesCellTitle>
        <StyledLastestChangesCellTitle width="200">Data</StyledLastestChangesCellTitle>
        <StyledLastestChangesCellTitle width="200">Akcja</StyledLastestChangesCellTitle>
      </StyledLastestChangesCellTitlesContainer>
      {data.map((item: TypesActionHistory, index: number) => (
        <StyledLastestChangesElement key={index}>
          <StyledLastestChangesElementCell>
            <StyledLastestChangesElementIcon src={elementTypeIcon[item.section]} />
          </StyledLastestChangesElementCell>
          <StyledLastestChangesElementCell>{item.name}</StyledLastestChangesElementCell>
          <StyledLastestChangesElementCell>{item.author}</StyledLastestChangesElementCell>
          <StyledLastestChangesElementCell>{item.date}</StyledLastestChangesElementCell>
          <StyledLastestChangesElementCell>{item.action}</StyledLastestChangesElementCell>
        </StyledLastestChangesElement>
      ))}
    </StyledLastestChangesContainer>
  );
}

export default LatestChanges;
