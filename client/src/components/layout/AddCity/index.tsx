import React, { useState, useEffect } from 'react';
import { Form, Input, Button, FormList } from 'components/common';
import { useForm, useFieldArray } from 'react-hook-form';
import Api from 'utils/Api';
import TypesRegion from 'types/TypesRegion';
import AddNotification from 'utils/AddNotification';
import UploadImage from 'utils/UploadImage';

interface Props {
  api: string;
}

function AddCity({ api }: Props) {
  const { register, handleSubmit, errors, control } = useForm();
  const [regions, setRegions] = useState<TypesRegion[]>();

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

  const getRegions = async () => {
    let res = await Api.get(`/regions`);
    setRegions(res.data);
  };

  useEffect(() => {
    getRegions();
  }, []);

  const onSubmit = async (data: any, e: any) => {
    let newData = data;

    const uploadImageRes: any = await UploadImage(data.img[0]);

    if (uploadImageRes && regions) {
      newData.img = uploadImageRes.data.data.url;
      const region = regions.filter((obj) => {
        return obj.name === data.region;
      });
      newData.region = region[0]._id;
      try {
        const res = await Api.post(`/${api}/create`, newData);
        if (res.status === 201) {
          AddNotification('Dodano', 'Nowe miasto zostało dodane', 'success');
          e.target.reset();
        }
      } catch (err) {
        if (err.response.status === 409) {
          AddNotification('Błąd', 'Takie miasto już istnieje', 'danger');
        }
      }
    } else {
      AddNotification('Błąd', 'Wystąpił błąd po stronie serwera', 'danger');
    }
  };

  const addNewInputToDescription = (e: any) => {
    e.preventDefault();
    descriptionAppend({ type: 'text', value: '' });
  };

  const addNewInputToOtherData = (e: any) => {
    e.preventDefault();
    otherDataAppend({ title: '', value: '' });
  };

  const regionsList = () => {
    if (regions === undefined) {
      return [];
    }

    let regionsListTitle: string[] = [];

    regions.map((item: TypesRegion) => {
      regionsListTitle = [...regionsListTitle, item.name];
    });

    return regionsListTitle;
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
        id="region"
        label="Region"
        name="region"
        inputRef={register({ required: true })}
        errorMessage={errors.section ? 'To pole nie może być puste' : ''}
        type="select"
        options={regionsList()}
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

export default AddCity;
