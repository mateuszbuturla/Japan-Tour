import React, { useState } from 'react';
import { Form, Input, Button, FormList } from 'components/common';
import { useForm, useFieldArray } from 'react-hook-form';
import Api from 'utils/Api';

interface Props {
  api: string;
}

function AddRegion({ api }: Props) {
  const { register, handleSubmit, errors, control } = useForm();
  const [regions, setRegions] = useState();

  const {
    fields: descriptionFields,
    append: descriptionAppend,
    remove: descriptionRemove,
  } = useFieldArray({
    control,
    name: 'description',
  });

  const {
    fields: otherDataFields,
    append: otherDataAppend,
    remove: otherDataRemove,
  } = useFieldArray({
    control,
    name: 'otherData',
  });

  const onSubmit = async (data: any, e: any) => {
    console.log(data);
    const res = await Api.post(`/${api}/create`, data);
  };

  const addNewInputToDescription = (e: any) => {
    e.preventDefault();
    descriptionAppend({ type: 'text', value: '' });
  };

  const addNewInputToOtherData = (e: any) => {
    e.preventDefault();
    otherDataAppend({ title: '', value: '' });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        id="name"
        label="Nazwa"
        name="name"
        inputRef={register({ required: true })}
        errorMessage={errors.name ? 'To pole nie może być puste' : ''}
      />
      <Input
        id="img"
        label="Zdjęcie"
        name="img"
        inputRef={register({ required: true })}
        errorMessage={errors.name ? 'Zdjęcie jest wyamagane' : ''}
        type="file"
      />
      <FormList title="Opis">
        {descriptionFields.map((item, index) => (
          <li key={item.id}>
            <Input
              id={`description[${index}].type`}
              label="Typ"
              name={`description[${index}].type`}
              inputRef={register()}
              type="select"
              options={['text', 'img']}
            />
            <Input
              id={`description[${index}].value`}
              name={`description[${index}].value`}
              label="Wartość"
              inputRef={register()}
            />
            <button type="button" onClick={() => descriptionRemove(index)}>
              Delete
            </button>
          </li>
        ))}
        <Button text="Dodaj nowe pole do opisu" onClick={(e: any) => addNewInputToDescription(e)} />
      </FormList>
      <FormList title="Dodatkowe informacje">
        {otherDataFields.map((item, index) => (
          <li key={item.id}>
            <Input
              id={`otherData[${index}].title`}
              name={`otherData[${index}].title`}
              label="Nazwa"
              inputRef={register()}
            />
            <Input
              id={`otherData[${index}].value`}
              name={`otherData[${index}].value`}
              label="Wartość"
              inputRef={register()}
            />
            <button type="button" onClick={() => otherDataRemove(index)}>
              Delete
            </button>
          </li>
        ))}
        <Button
          text="Dodaj pole to dodatkowych informacji"
          onClick={(e: any) => addNewInputToOtherData(e)}
        />
      </FormList>
      <Button text="Dodaj" />
    </Form>
  );
}

export default AddRegion;
