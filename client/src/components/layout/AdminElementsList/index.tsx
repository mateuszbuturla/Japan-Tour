import React, { useState } from 'react';
import { AdminHeader, Button, StyledAdminTopPanel, ActionDialog } from 'components/common';
import {
  StyledAdminElementsListContainer,
  StyledAdminElementsListCellsTitles,
  StyledAdminElementsListCell,
  StyledAdminElementsListElement,
  StyledAdminElementsListElementCell,
  StyledAdminElementsListActionButton,
  StyledAdminElementsListActionButtonIcon,
} from './StyledAdminElementsList';
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
  removeFromAppState?: (id: string) => void;
}

function AdminElementsList({ title, data, api, removeFromAppState }: Props) {
  const [removeModal, setRemoveModal] = useState<any>(null);

  const handleRemoveClick = async (id: string) => {
    if (removeFromAppState) {
      try {
        const res = await deleteElement(api, id);
        if (res.status === 200) {
          removeFromAppState(id);
          AddNotification('Sukces', 'Usunięto pomyślnie', 'success');
        }
      } catch (err) {
        AddNotification('Błąd', 'Wystąpił błąd', 'danger');
      }
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
              <StyledAdminElementsListActionButton onClick={() => setRemoveModal(item._id)}>
                <StyledAdminElementsListActionButtonIcon src={RemoveIcon} />
              </StyledAdminElementsListActionButton>
            </StyledAdminElementsListElementCell>
          </StyledAdminElementsListElement>
        ))}
      </StyledAdminElementsListContainer>
      <ActionDialog
        isShow={removeModal === null ? false : true}
        title="Potwierdź usunięcie"
        content="Czy na pewno chcesz usunąć?"
        onCancel={() => {
          setRemoveModal(null);
        }}
        onAccept={() => {
          handleRemoveClick(removeModal);
        }}
      />
    </>
  );
}

export default AdminElementsList;
