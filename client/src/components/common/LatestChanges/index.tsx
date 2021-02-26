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

interface DataProps {
  elementType: string;
  name: string;
  author: string;
  date: string;
  action: string;
}

interface Props {
  data: DataProps[];
}

const elementTypeIcon: any = {
  category: CategoryIcon,
  region: RegionIcon,
  city: CityIcon,
  attraction: AttractionIcon,
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
      {data.map((item: DataProps, index: number) => (
        <StyledLastestChangesElement key={index}>
          <StyledLastestChangesElementCell>
            <StyledLastestChangesElementIcon src={elementTypeIcon[item.elementType]} />
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
