import {
  AdminHeader,
  Button,
  Form,
  Input,
  StyledAdminTopPanel,
  StyledFormInputWrapper,
  StyledInputsContainer,
} from 'components/common';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import TypesApplicationState from 'types/TypesApplicationState';
import TypesElementCategory from 'types/TypesElementCategory';
import AddNotification from 'utils/AddNotification';
import Api from 'utils/Api';
import UploadImage from 'utils/UploadImage';

interface Props {
  title: string;
  formType: 'add' | 'update';
  buttonLabel: 'Dodaj' | 'Aktualizuj';
}

function AddUpdateCategoryForm({ title, formType, buttonLabel }: Props) {
  const { categories } = useSelector((state: TypesApplicationState) => state.admin);
  const { key } = useParams();
  const [defaultValues, setDefaultValues] = useState<TypesElementCategory>();
  const { register, handleSubmit, errors, control } = useForm();

  if (!defaultValues && key && formType === 'update') {
    const categoryObj = categories.filter((item: TypesElementCategory) => item.key === key)[0];
    setDefaultValues(categoryObj);
  }
  const sendImage = async (file: any) => {
    if (file.length === 1) {
      const uploadedImageRes: any = await UploadImage(file[0]);
      return uploadedImageRes.data.data.url;
    } else {
      return null;
    }
  };

  const onSubmit = async (data: any, e: any) => {
    try {
      let newData = data;
      const imgUrl = await sendImage(data.img);
      newData.img = imgUrl !== null ? imgUrl : defaultValues && defaultValues.img;
      if (formType === 'add') {
        const res = await Api.post('/categories/create', newData);
        if (res.status === 201) {
          AddNotification('Dodano', 'Nowa kategoria została dodana pomyślnie', 'success');
          e.target.reset();
        }
      } else if (formType === 'update') {
        if (defaultValues) {
          const res = await Api.patch(`/categories/update/${key}`, newData);
          if (res.status === 200) {
            AddNotification('Dodano', 'Kategoria została zaktualizowana pomyślnie', 'success');
          }
        }
      }
    } catch (err) {
      if (err.response.status === 409) {
        AddNotification('Błąd', 'Taka kategoria już istnieje', 'danger');
      } else {
        AddNotification('Błąd', 'Wystąpił błąd po stronie serwera', 'danger');
      }
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <StyledAdminTopPanel>
          <AdminHeader text={title} />
          <Button text={buttonLabel} small />
        </StyledAdminTopPanel>
        <StyledInputsContainer>
          <StyledFormInputWrapper>
            <Input
              label="Nazwa"
              id="name"
              name="name"
              inputRef={register({ required: true })}
              defaultValue={formType === 'update' && defaultValues ? defaultValues.name : ''}
            />
          </StyledFormInputWrapper>
          <StyledFormInputWrapper>
            <Input
              type="file"
              label="Zdjęcie"
              id="img"
              name="img"
              inputRef={register({ required: formType === 'add' })}
            />
          </StyledFormInputWrapper>
          <StyledFormInputWrapper>
            <Input
              type="select"
              label="Sekcja"
              id="section"
              name="section"
              inputRef={register()}
              options={['attractions', 'cultures', 'kitchens']}
              defaultValue={formType === 'update' && defaultValues ? defaultValues.section : ''}
            />
          </StyledFormInputWrapper>
        </StyledInputsContainer>
      </Form>
    </>
  );
}

export default AddUpdateCategoryForm;
