import React from 'react';
import { Form, Input, Button } from 'components/common';
import { useForm } from 'react-hook-form';
import Api from 'utils/Api';
import AddNotification from 'utils/AddNotification';

function AddCategory() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data: any, e: any) => {
    try {
      const res = await Api.post('/categories/create', data);
      if (res.status === 201) {
        AddNotification('Dodano', 'Nowa kategoria została dodana', 'success');
      }
    } catch (err) {
      if (err.response.status === 409) {
        AddNotification('Błąd', 'Taka kategoria już istnieje', 'danger');
      }
    }
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
