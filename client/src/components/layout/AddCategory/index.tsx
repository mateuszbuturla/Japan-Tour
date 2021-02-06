import React from 'react';
import { Form, Input, Button } from 'components/common';
import { useForm } from 'react-hook-form';
import Api from 'utils/Api';

function AddCategory() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data: any, e: any) => {
    const res = await Api.post('/categories/create', data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        id="addCategory-title"
        label="Nazwa kategori"
        name="title"
        inputRef={register({ required: true })}
        errorMessage={errors.title ? 'To pole nie może być puste' : ''}
      />
      <Input
        id="addCategory-section"
        label="Sekcja"
        name="section"
        inputRef={register({ required: true })}
        errorMessage={errors.section ? 'To pole nie może być puste' : ''}
        type="select"
        options={['dishes', 'cultures', 'attractions']}
      />
      <Button text="Dodaj" />
    </Form>
  );
}

export default AddCategory;
