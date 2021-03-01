import DeleteIcon from 'assets/icons/remove.svg';
import {
  AdminHeader,
  Button,
  Form,
  Input,
  RichTextEditor,
  StyledAdminTopPanel,
  StyledFormInputWrapper,
  StyledFromDescriptionOtherDataContainer,
  StyledInputsContainer,
  StyledOtherDataEditor,
} from 'components/common';
import { ContentState, convertFromHTML, EditorState } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import React, { useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import TypesApplicationState from 'types/TypesApplicationState';
import TypesCulture from 'types/TypesCulture';
import TypesElementCategory from 'types/TypesElementCategory';
import AddNotification from 'utils/AddNotification';
import Api from 'utils/Api';
import UploadImage from 'utils/UploadImage';

interface Props {
  title: string;
  formType: 'add' | 'update';
  buttonLabel: 'Dodaj' | 'Aktualizuj';
}

function AddUpdateCultureForm({ title, formType, buttonLabel }: Props) {
  const { cultures, categories } = useSelector((state: TypesApplicationState) => state.admin);
  const { key } = useParams();
  const [defaultValues, setDefaultValues] = useState<TypesCulture>();
  const { register, handleSubmit, errors, control } = useForm();

  const [cultureDescription, setCultureDescription] = useState();

  const getCategoriesNamesOnly = categories
    .filter((item: TypesElementCategory) => item.section === 'cultures')
    .map((item: TypesElementCategory) => item.name);

  const {
    fields: otherDataFields,
    append: otherDataAppend,
    remove: otherDataRemove,
  } = useFieldArray({
    control,
    name: 'otherData',
  });

  if (!defaultValues && key && formType === 'update') {
    const cultureObj = cultures.filter((item: TypesCulture) => item.key === key)[0];
    setDefaultValues(cultureObj);

    const blocksFromHTML = convertFromHTML(cultureObj.description);

    const content = ContentState.createFromBlockArray(
      blocksFromHTML.contentBlocks,
      blocksFromHTML.entityMap,
    );

    setCultureDescription(EditorState.createWithContent(content));
  }

  const addNewInputToOtherData = (e: any) => {
    e.preventDefault();
    otherDataAppend({ title: '', value: '' });
  };

  const uploadCallback = async (file: any) => {
    const uploadImageRes: any = await UploadImage(file);
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
      newData.category = categories.find((r: TypesElementCategory) => r.name === data.category)._id;
      if (cultureDescription) {
        newData.description = stateToHTML(cultureDescription.getCurrentContent());
      }
      if (formType === 'add') {
        const res = await Api.post('/cultures/create', newData);
        if (res.status === 201) {
          AddNotification('Dodano', 'Nowy wpis o kulturze został dodany pomyślnie', 'success');
          e.target.reset();
        }
      } else if (formType === 'update') {
        if (defaultValues) {
          if (!data.otherData) {
            newData.otherData = defaultValues.otherData;
          }
          const res = await Api.patch(`/cultures/update/${key}`, newData);
          if (res.status === 200) {
            AddNotification('Dodano', 'Wpis o kulturze został zaktualizowany pomyślnie', 'success');
          }
        }
      }
    } catch (err) {
      if (err.response.status === 409) {
        AddNotification('Błąd', 'Wpis o takie nazwie już istnieje', 'danger');
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
              label="Kategoria"
              id="category"
              name="category"
              inputRef={register()}
              options={getCategoriesNamesOnly}
              defaultValue={formType === 'update' && defaultValues ? defaultValues.category : ''}
            />
          </StyledFormInputWrapper>
        </StyledInputsContainer>
        <StyledFromDescriptionOtherDataContainer>
          <RichTextEditor
            editorState={cultureDescription}
            onEditorStateChange={setCultureDescription}
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

export default AddUpdateCultureForm;
