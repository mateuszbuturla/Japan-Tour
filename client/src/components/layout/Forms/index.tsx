import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button, Input } from 'components/common';
import { Editor } from 'react-draft-wysiwyg';
import { stateToHTML } from 'draft-js-export-html';
import Api from 'utils/Api';
import AddNotification from 'utils/AddNotification';
import UploadImage from 'utils/UploadImage';
import TypesElementCategory from 'types/TypesElementCategory';
import TypesRegion from 'types/TypesRegion';
import TypesCity from 'types/TypesCity';

interface InputType {
  type: 'text' | 'file' | 'select' | 'checkbox';
  label: string;
  name: string;
  defaultValue: any;
  required: boolean;
  selectInputValues?: string[];
}

interface DataFromApiType {
  categories?: TypesElementCategory[];
  regions?: TypesRegion[];
  cities?: TypesCity[];
}

interface Props {
  api: string;
  form: InputType[];
  description?: boolean;
  otherData?: boolean;
  dataFromApi?: DataFromApiType;
  defaultValues?: TypesElementCategory | TypesRegion | TypesCity;
  getElementDefaultValueFunction?: (id: string) => void;
}

function Forms({
  api,
  form,
  description,
  otherData,
  dataFromApi,
  defaultValues,
  getElementDefaultValueFunction,
}: Props) {
  const { id } = useParams();
  const [elementDescription, setElementDescription] = useState();
  const { register, handleSubmit, errors } = useForm();
  const [defaultValuesFromApi, setDefaultValuesFromApi] = useState<any>();

  const getData = async () => {
    if (getElementDefaultValueFunction) {
      const res = await getElementDefaultValueFunction(id);
      setDefaultValuesFromApi(res);
    }
  };

  useEffect(() => {
    if (!defaultValuesFromApi) {
      getData();
    }
  });

  const uploadImages = async (data: any) => {
    let newData = data;
    await form.map(async (item) => {
      if (item.type === 'file') {
        const uploadImageRes: any = await UploadImage(data[item.name][0]);
        console.log(uploadImageRes);
        if (uploadImageRes) {
          newData[item.name] = uploadImageRes.data.data.url;
        } else {
          AddNotification('Błąd', 'Wystąpił błąd', 'danger');
        }
      }
    });
    return newData;
  };

  const onSubmit = async (data: any, e: any) => {
    try {
      let newData = data;

      const promisesUploadImages = form
        .filter((a) => a.type === 'file')
        .map(async (item) => {
          if (item.type === 'file') {
            const uploadImageRes: any = await UploadImage(data[item.name][0]);
            console.log(uploadImageRes);
            if (uploadImageRes) {
              return { name: item.name, value: uploadImageRes.data.data.url };
            } else {
              AddNotification('Błąd', 'Wystąpił błąd', 'danger');
            }
          }
        });

      const uploadedImages = await Promise.all(promisesUploadImages);

      if (uploadedImages.length > 0) {
        uploadedImages.map((item) => {
          if (item) {
            newData[item.name] = item.value;
          }
        });
      }
      if (dataFromApi) {
        if (data.category && dataFromApi.categories) {
          const category = dataFromApi.categories.filter((obj) => {
            return obj.name === data.category;
          });
          newData.category = category[0]._id;
        }
        if (data.region && dataFromApi.regions) {
          const region = dataFromApi.regions.filter((obj) => {
            return obj.name === data.region;
          });
          newData.region = region[0]._id;
        }
        if (data.city && dataFromApi.cities) {
          const city = dataFromApi.cities.filter((obj) => {
            return obj.name === data.city;
          });
          newData.city = city[0]._id;
        }
      }

      if (description && elementDescription) {
        newData.description = stateToHTML(elementDescription.getCurrentContent());
      }

      if (otherData) {
        newData.otherData = [];
      }

      console.log(newData);

      const res = await Api.post(api, newData);
      if (res.status === 201) {
        AddNotification('Dodano', 'Wykonano pomyślnie', 'success');
        e.target.reset();
      }
    } catch (err) {
      if (err.response.status === 409) {
        AddNotification('Błąd', 'Wystąpił błąd', 'danger');
      }
    }
  };

  const uploadCallback = async (file: any) => {
    const uploadImageRes: any = await UploadImage(file);
    console.log(uploadImageRes);
    return { data: { link: uploadImageRes.data.data.url } };
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {form.map((item: any, index: number) => (
        <Input
          id={item.name}
          type={item.type}
          label={item.label}
          name={item.name}
          defaultValue={defaultValuesFromApi && defaultValuesFromApi.data[item.name]}
          key={index}
          inputRef={register({ required: item.required })}
          errorMessage={errors[item.name] ? 'To pole nie może być puste' : ''}
          options={item.type === 'select' && item.selectInputValues}
        />
      ))}
      {description && (
        <Editor
          editorState={elementDescription}
          onEditorStateChange={setElementDescription}
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
      )}
      <Button text="Wyślij" />
    </form>
  );
}

export default Forms;
