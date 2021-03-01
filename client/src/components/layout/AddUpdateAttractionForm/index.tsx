import React, { useState, useEffect } from 'react';
import {
  Button,
  Input,
  AdminHeader,
  StyledAdminTopPanel,
  Form,
  StyledFormInputWrapper,
  StyledInputsContainer,
  StyledFromDescriptionOtherDataContainer,
  RichTextEditor,
  StyledOtherDataEditor,
} from 'components/common';
import { stateToHTML } from 'draft-js-export-html';
import UploadImage from 'utils/UploadImage';
import { useFieldArray, useForm } from 'react-hook-form';

import DeleteIcon from 'assets/icons/remove.svg';
import Api from 'utils/Api';
import AddNotification from 'utils/AddNotification';
import { useParams } from 'react-router-dom';
import TypesApplicationState from 'types/TypesApplicationState';
import { useSelector } from 'react-redux';
import TypesCity from 'types/TypesCity';
import { EditorState, ContentState, convertFromHTML } from 'draft-js';
import TypesRegion from 'types/TypesRegion';
import TypesAttraction from 'types/TypesAttraction';
import TypesElementCategory from 'types/TypesElementCategory';

interface Props {
  title: string;
  formType: 'add' | 'update';
  buttonLabel: 'Dodaj' | 'Aktualizuj';
}

function AddUpdateAttractionForm({ title, formType, buttonLabel }: Props) {
  const { attractions, cities, regions, categories } = useSelector(
    (state: TypesApplicationState) => state.admin,
  );
  const { key } = useParams();
  const [defaultValues, setDefaultValues] = useState<TypesAttraction>();
  const { register, handleSubmit, errors, control } = useForm();

  const [attractionDescription, setAttractionDescription] = useState();

  const getRegionsNamesOnly = regions.map((item: TypesRegion) => item.name);
  const getCitiesNamesOnly = cities.map((item: TypesCity) => item.name);
  const getCategoriesNamesOnly = categories
    .filter((item: TypesElementCategory) => item.section === 'attractions')
    .map((item: TypesElementCategory) => item.name);

  const getRegionNameById = (id: string) => {
    return regions.filter((item: TypesRegion) => item._id === id)[0].name;
  };

  const getCityNameById = (id: string) => {
    return cities.filter((item: TypesCity) => item._id === id)[0].name;
  };

  const getCategoryNameById = (id: string) => {
    return categories.filter((item: TypesElementCategory) => item._id === id)[0].name;
  };

  const {
    fields: otherDataFields,
    append: otherDataAppend,
    remove: otherDataRemove,
  } = useFieldArray({
    control,
    name: 'otherData',
  });

  if (!defaultValues && key && formType === 'update') {
    const attractionObj = attractions.filter((item: TypesAttraction) => item.key === key)[0];
    setDefaultValues(attractionObj);

    const blocksFromHTML = convertFromHTML(attractionObj.description);

    const content = ContentState.createFromBlockArray(
      blocksFromHTML.contentBlocks,
      blocksFromHTML.entityMap,
    );

    setAttractionDescription(EditorState.createWithContent(content));
  }

  const addNewInputToOtherData = (e: any) => {
    e.preventDefault();
    otherDataAppend({ title: '', value: '' });
  };

  const uploadCallback = async (file: any) => {
    const uploadImageRes: any = await UploadImage(file);
    console.log(uploadImageRes);
    return { data: { link: uploadImageRes.data.data.url } };
  };

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
      newData.region = regions.find((r: TypesRegion) => r.name === data.region)._id;
      newData.city = cities.find((r: TypesCity) => r.name === data.city)._id;
      newData.category = categories.find((r: TypesElementCategory) => r.name === data.category)._id;
      if (attractionDescription) {
        newData.description = stateToHTML(attractionDescription.getCurrentContent());
      }
      if (formType === 'add') {
        const res = await Api.post('/attractions/create', newData);
        if (res.status === 201) {
          AddNotification('Dodano', 'Nowa atrakcja została dodana pomyślnie', 'success');
          e.target.reset();
        }
      } else if (formType === 'update') {
        if (defaultValues) {
          if (!data.otherData) {
            newData.otherData = defaultValues.otherData;
          }
          const res = await Api.patch(`/attractions/update/${key}`, newData);
          if (res.status === 200) {
            AddNotification('Dodano', 'Atrakcja został zaktualizowany pomyślnie', 'success');
          }
        }
      }
    } catch (err) {
      if (err.response.status === 409) {
        AddNotification('Błąd', 'Takie miasto już istnieje', 'danger');
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
              label="Krótki opis"
              id="shortDescription"
              name="shortDescription"
              inputRef={register({ required: true })}
              defaultValue={
                formType === 'update' && defaultValues ? defaultValues.shortDescription : ''
              }
            />
          </StyledFormInputWrapper>
          <StyledFormInputWrapper>
            <Input
              type="select"
              label="Region"
              id="region"
              name="region"
              inputRef={register()}
              options={getRegionsNamesOnly}
              defaultValue={
                formType === 'update' && defaultValues
                  ? getRegionNameById(defaultValues.region)
                  : ''
              }
            />
          </StyledFormInputWrapper>
          <StyledFormInputWrapper>
            <Input
              type="select"
              label="Miasto"
              id="city"
              name="city"
              inputRef={register()}
              options={getCitiesNamesOnly}
              defaultValue={
                formType === 'update' && defaultValues ? getCityNameById(defaultValues.city) : ''
              }
            />
          </StyledFormInputWrapper>
          <StyledFormInputWrapper>
            <Input
              type="select"
              label="Kategoria"
              id="category"
              name="category"
              inputRef={register()}
              options={getCategoriesNamesOnly}
              defaultValue={
                formType === 'update' && defaultValues
                  ? getCategoryNameById(defaultValues.category)
                  : ''
              }
            />
          </StyledFormInputWrapper>
          <StyledFormInputWrapper>
            <Input
              type="checkbox"
              label="Wyróżnij"
              id="highlighted"
              name="highlighted"
              inputRef={register()}
            />
          </StyledFormInputWrapper>
        </StyledInputsContainer>
        <StyledFromDescriptionOtherDataContainer>
          <RichTextEditor
            editorState={attractionDescription}
            onEditorStateChange={setAttractionDescription}
            toolbar={{
              options: ['inline', 'image'],
              inline: {
                options: ['bold', 'italic', 'underline'],
                bold: { className: 'rich-text-icon' },
                italic: { className: 'rich-text-icon' },
                underline: { className: 'rich-text-icon' },
              },
              image: { uploadCallback: uploadCallback, alt: { present: true, mandatory: true } },
            }}
          />
          <StyledOtherDataEditor.StyledOtherDataEditorWrapper>
            <StyledOtherDataEditor.StyledOtherDataEditorItemsList>
              {otherDataFields.map((item: any, index: number) => (
                <StyledOtherDataEditor.StyledOtherDataEditorItem key={item.id}>
                  <Input
                    id={`otherData[${index}].title`}
                    name={`otherData[${index}].title`}
                    label="Nazwa"
                    inputRef={register({ required: true })}
                  />
                  <Input
                    id={`otherData[${index}].value`}
                    name={`otherData[${index}].value`}
                    label="Wartość"
                    inputRef={register({ required: true })}
                  />
                  <StyledOtherDataEditor.StyledOtherDataEditorItemRemoveButton
                    type="button"
                    onClick={() => otherDataRemove(index)}
                  >
                    <StyledOtherDataEditor.StyledOtherDataEditorItemRemoveButtonIcon
                      src={DeleteIcon}
                    />
                  </StyledOtherDataEditor.StyledOtherDataEditorItemRemoveButton>
                </StyledOtherDataEditor.StyledOtherDataEditorItem>
              ))}
            </StyledOtherDataEditor.StyledOtherDataEditorItemsList>
            <Button text="Dodaj pole" onClick={(e: any) => addNewInputToOtherData(e)} />
          </StyledOtherDataEditor.StyledOtherDataEditorWrapper>
        </StyledFromDescriptionOtherDataContainer>
      </Form>
    </>
  );
}

export default AddUpdateAttractionForm;
