import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input } from 'components/common';
import Api from 'utils/Api';
import AddNotification from 'utils/AddNotification';

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
}

function Forms({ api, form }: Props) {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data: any, e: any) => {
    try {
      const res = await Api.post(api, data);
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
