import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input } from 'components/common';

interface InputType {
  type: 'text' | 'file' | 'select';
  label: string;
  name: string;
  defaultValue: any;
  required: boolean;
  selectInputValues?: string[];
}

interface Props {
  form: InputType[];
}

function Forms({ form }: Props) {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
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
