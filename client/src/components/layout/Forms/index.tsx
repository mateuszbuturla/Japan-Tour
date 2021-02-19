import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input } from 'components/common';
import Api from 'utils/Api';
import AddNotification from 'utils/AddNotification';
import UploadImage from 'utils/UploadImage';

interface InputType {
  type: 'text' | 'file' | 'select';
  label: string;
  name: string;
  defaultValue: any;
  required: boolean;
  selectInputValues?: string[];
}

interface Props {
  api: string;
  form: InputType[];
  description?: boolean;
  otherData?: boolean;
}

function Forms({ api, form, description, otherData }: Props) {
  const { register, handleSubmit, errors } = useForm();

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

      if (description) {
        newData.description = [];
      }
      if (otherData) {
        newData.otherData = [];
      }

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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {form.map((item: any, index: number) => (
        <Input
          id={item.name}
          type={item.type}
          label={item.label}
          name={item.name}
          defaultValue={item.defaultValue}
          key={index}
          inputRef={register({ required: item.required })}
          errorMessage={errors[item.name] ? 'To pole nie może być puste' : ''}
          options={item.type === 'select' && item.selectInputValues}
        />
      ))}
      <Button text="Wyślij" />
    </form>
  );
}

export default Forms;
