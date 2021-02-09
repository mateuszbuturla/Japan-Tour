import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Input, Button, FormList } from 'components/common';
import { useForm, useFieldArray } from 'react-hook-form';
import Api from 'utils/Api';
import TypesElementCategory from 'types/TypesElementCategory';
import AddNotification from 'utils/AddNotification';
import TypesDish from 'types/TypesDish';
import TypesCulture from 'types/TypesCulture';

interface Props {
  api: string;
}

function UpdateCultureDish({ api }: Props) {
  const { id } = useParams();
  const { register, handleSubmit, errors, control } = useForm();
  const [categories, setCategories] = useState();
  const [selectedItem, setSelectedItem] = useState<TypesDish | TypesCulture>();

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
    try {
      const res = await Api.patch(`/${api}/update/${id}`, data);
      if (res.status === 200) {
        AddNotification('Zaktualizowano', 'Zaktualizowano pomyślnie', 'success');
        e.target.reset();
      }
    } catch (err) {
      if (err.response.status === 409) {
        AddNotification('Błąd', 'Wystąpił błąd', 'danger');
      }
    }
  };

  const getCategories = async () => {
    let res = await Api.get(`/categories/${api}`);
    console.log(res.data);
    let newCategories: String[] = [];
    res.data.map((item: TypesElementCategory) => {
      newCategories = [...newCategories, item.key];
    });
    setCategories(newCategories);
  };

  useEffect(() => {
    getCategories();
    getSelecterItemData();
  }, []);

  const getSelecterItemData = async () => {
    const res = await Api.get(`/${api}/${id}`);
    setSelectedItem(res.data);
    const description = res.data.description;
    const otherData = res.data.otherData;
    if (description) {
      description.map((item: any) => {
        descriptionAppend({ type: item.type, value: item.value });
      });
    }
    if (otherData) {
      otherData.map((item: any) => {
        otherDataAppend({ title: item.title, value: item.value });
      });
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

  if (selectedItem !== undefined) {
    return (
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="name"
          label="Nazwa"
          name="name"
          defaultValue={selectedItem.name}
          inputRef={register({ required: true })}
          errorMessage={errors.name ? 'To pole nie może być puste' : ''}
        />
        <Input
          id="category"
          label="Kategoria"
          name="category"
          defaultValue={selectedItem.category}
          inputRef={register({ required: true })}
          errorMessage={errors.section ? 'To pole nie może być puste' : ''}
          type="select"
          options={categories}
        />
        <Input id="img" label="Zdjęcie" name="img" inputRef={register()} type="file" />
        <Input
          id="shortDescription"
          label="Krótki opis"
          name="shortDescription"
          defaultValue={selectedItem.shortDescription}
          inputRef={register({ required: true })}
          errorMessage={errors.name ? 'To pole nie może być puste' : ''}
        />
        <FormList title="Dodatkowe informacje">
          {descriptionFields.map((item, index) => (
            <li key={item.id}>
              <Input
                id={`description[${index}].type`}
                label="Typ"
                name={`description[${index}].type`}
                defaultValue={item.type}
                inputRef={register()}
                type="select"
                options={['text', 'img']}
              />
              <Input
                id={`description[${index}].value`}
                name={`description[${index}].value`}
                defaultValue={item.value}
                label="Wartość"
                inputRef={register()}
              />
              <button type="button" onClick={() => descriptionRemove(index)}>
                Delete
              </button>
            </li>
          ))}
          <Button
            text="Dodaj nowe pole do opisu"
            onClick={(e: any) => addNewInputToDescription(e)}
          />
        </FormList>
        <FormList title="Dodatkowe informacje">
          {otherDataFields.map((item, index) => (
            <li key={item.id}>
              <Input
                id={`otherData[${index}].title`}
                name={`otherData[${index}].title`}
                defaultValue={item.title}
                label="Nazwa"
                inputRef={register()}
              />
              <Input
                id={`otherData[${index}].value`}
                name={`otherData[${index}].value`}
                defaultValue={item.value}
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

  return <p>Trwa pobieranie danych</p>;
}

export default UpdateCultureDish;
