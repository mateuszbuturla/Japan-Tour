import React from 'react';
import { AdminHeader, Button, StyledAdminTopPanel } from 'components/common';
import {
  StyledAdminElementsListContainer,
  StyledAdminElementsListCellsTitles,
  StyledAdminElementsListCell,
  StyledAdminElementsListElement,
  StyledAdminElementsListElementCell,
  StyledAdminElementsListActionButton,
  StyledAdminElementsListActionButtonIcon,
} from './StyledAdminElementsList';
import Api from 'utils/Api';
import AddNotification from 'utils/AddNotification';
import { deleteElement } from 'utils/ApiRequests';

import RemoveIcon from 'assets/icons/remove.svg';
import EditIcon from 'assets/icons/edit.svg';

interface DataProps {
  _id: string;
  name: string;
  author: string;
  date: string;
  key: string;
}

interface Props {
  data: DataProps[];
  title: string;
  api: string;
}

function AdminElementsList({ title, data, api }: Props) {
  const handleRemoveClick = async (id: string) => {
    try {
      const res = await deleteElement(api, id);
      if (res.status === 200) {
        AddNotification('Sukces', 'Usunięto pomyślnie', 'success');
      }
    } catch (err) {
      AddNotification('Błąd', 'Wystąpił błąd', 'danger');
    }
  };

  return (
    <>
      <StyledAdminTopPanel>
        <AdminHeader text={title} />
        <Button text="Dodaj" small />
      </StyledAdminTopPanel>
      <StyledAdminElementsListContainer>
        <StyledAdminElementsListCellsTitles>
          <StyledAdminElementsListCell width="450px">Nazwa</StyledAdminElementsListCell>
          <StyledAdminElementsListCell width="400px">Autor</StyledAdminElementsListCell>
          <StyledAdminElementsListCell width="200px">Data</StyledAdminElementsListCell>
          <StyledAdminElementsListCell width="200px">Akcje</StyledAdminElementsListCell>
        </StyledAdminElementsListCellsTitles>
        {data.map((item: DataProps, index: number) => (
          <StyledAdminElementsListElement key={index}>
            <StyledAdminElementsListElementCell width="450px">
              {item.name}
            </StyledAdminElementsListElementCell>
            <StyledAdminElementsListElementCell width="400px">
              {item.author}
            </StyledAdminElementsListElementCell>
            <StyledAdminElementsListElementCell width="200px">
              {item.date}
            </StyledAdminElementsListElementCell>
            <StyledAdminElementsListElementCell width="200px">
              <StyledAdminElementsListActionButton>
                <StyledAdminElementsListActionButtonIcon src={EditIcon} />
              </StyledAdminElementsListActionButton>
              <StyledAdminElementsListActionButton onClick={() => handleRemoveClick(item._id)}>
                <StyledAdminElementsListActionButtonIcon src={RemoveIcon} />
              </StyledAdminElementsListActionButton>
            </StyledAdminElementsListElementCell>
          </StyledAdminElementsListElement>
        ))}
      </StyledAdminElementsListContainer>
    </>
  );
}

export default AdminElementsList;
