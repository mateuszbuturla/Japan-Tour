import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Form, Input, Button, FormList } from 'components/common';
import { useForm, useFieldArray } from 'react-hook-form';
import Api from 'utils/Api';
import TypesRegion from 'types/TypesRegion';
import AddNotification from 'utils/AddNotification';
import TypesCity from 'types/TypesCity';
import UploadImage from 'utils/UploadImage';
import DeleteElement from 'utils/DeleteElement';

interface Props {
  api: string;
}

function UpdateCity({ api }: Props) {
  const { id } = useParams();
  const history = useHistory();
  const { register, handleSubmit, errors, control } = useForm();
  const [regions, setRegions] = useState();
  const [selectedCity, setSelectedCity] = useState<TypesCity>();

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
    let newRegions: String[] = [];
    res.data.map((item: TypesRegion) => {
      newRegions = [...newRegions, item.key];
    });
    setRegions(newRegions);
  };

  const getSelectedCityData = async () => {
    const res = await Api.get(`/${api}/${id}`);
    setSelectedCity(res.data);
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

  useEffect(() => {
    getRegions();
    getSelectedCityData();
  }, []);

  const onSubmit = async (data: any, e: any) => {
    let newData = data;

    const uploadImageRes: any = await UploadImage(data.img[0]);

    if (uploadImageRes) {
      newData.img = uploadImageRes.data.data.url;

      try {
        const res = await Api.patch(`/${api}/update/${id}`, newData);
        if (res.status === 200) {
          AddNotification('Zaktualizowano', 'Miasto zostało zaktualizowane', 'success');
          e.target.reset();
        }
      } catch (err) {
        if (err.response.status === 409) {
          AddNotification('Błąd', 'Wystąpił błąd', 'danger');
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

  if (selectedCity !== undefined) {
    return (
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="name"
          label="Nazwa"
          name="name"
          defaultValue={selectedCity.name}
          inputRef={register({ required: true })}
          errorMessage={errors.name ? 'To pole nie może być puste' : ''}
        />
        <Input
          id="region"
          label="Region"
          name="region"
          defaultValue={selectedCity.region}
          inputRef={register({ required: true })}
          errorMessage={errors.section ? 'To pole nie może być puste' : ''}
          type="select"
          options={regions}
        />
        <Input id="img" label="Zdjęcie" name="img" inputRef={register()} type="file" />
        <FormList title="Opis">
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
        <Button
          text="Usuń"
          bgColor="red"
          onClick={async (e: any) => {
            e.preventDefault();
            try {
              const res = await DeleteElement(api, selectedCity._id);
              if (res.status === 200) {
                history.push('/admin');
              }
            } catch (err) {
              AddNotification('Błąd', 'Wystąpił błąd', 'danger');
            }
          }}
        />
      </Form>
    );
  }

  return <p>Trwa pobieranie danych</p>;
}

export default UpdateCity;
