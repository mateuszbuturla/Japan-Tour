import React, { useState } from 'react';
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

interface Props {
  title: string;
}

function AddUpdateRegionForm({ title }: Props) {
  const { register, handleSubmit, errors, control } = useForm();
  const [regionDescription, setRegionDescription] = useState();

  const {
    fields: otherDataFields,
    append: otherDataAppend,
    remove: otherDataRemove,
  } = useFieldArray({
    control,
    name: 'otherData',
  });

  const addNewInputToOtherData = (e: any) => {
    e.preventDefault();
    otherDataAppend({ title: '', value: '' });
  };

  const uploadCallback = async (file: any) => {
    const uploadImageRes: any = await UploadImage(file);
    console.log(uploadImageRes);
    return { data: { link: uploadImageRes.data.data.url } };
  };

  const onSubmit = async (data: any, e: any) => {
    try {
      let newData = data;
      const uploadedImageRes: any = await UploadImage(data.img[0]);
      newData.img = uploadedImageRes.data.data.url;
      if (regionDescription) {
        newData.description = stateToHTML(regionDescription.getCurrentContent());
      }
      const res = await Api.post('/regions/create', newData);
      if (res.status === 201) {
        AddNotification('Dodano', 'Nowy region został dodany pomyślnie', 'success');
        e.target.reset();
      }
    } catch (err) {
      if (err.response.status === 409) {
        AddNotification('Błąd', 'Taki region już istnieje', 'danger');
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
          <Button text="Dodaj" small />
        </StyledAdminTopPanel>
        <StyledInputsContainer>
          <StyledFormInputWrapper>
            <Input label="Nazwa" id="name" name="name" inputRef={register({ required: true })} />
          </StyledFormInputWrapper>
          <StyledFormInputWrapper>
            <Input
              type="file"
              label="Zdjęcie"
              id="img"
              name="img"
              inputRef={register({ required: true })}
            />
          </StyledFormInputWrapper>
        </StyledInputsContainer>
        <StyledFromDescriptionOtherDataContainer>
          <RichTextEditor
            editorState={regionDescription}
            onEditorStateChange={setRegionDescription}
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

export default AddUpdateRegionForm;
