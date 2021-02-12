import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Form, Input, Button, FormList } from 'components/common';
import { useForm, useFieldArray } from 'react-hook-form';
import Api from 'utils/Api';
import TypesElementCategory from 'types/TypesElementCategory';
import TypesRegion from 'types/TypesRegion';
import TypesCity from 'types/TypesCity';
import TypesAttraction from 'types/TypesAttraction';
import AddNotification from 'utils/AddNotification';
import UploadImage from 'utils/UploadImage';
import DeleteElement from 'utils/DeleteElement';

interface Props {
  api: string;
}

function UpdateAttraction({ api }: Props) {
  const { id } = useParams();
  const history = useHistory();
  const { register, handleSubmit, errors, control } = useForm();
  const [categories, setCategories] = useState<TypesElementCategory[]>();
  const [regions, setRegions] = useState<TypesRegion[]>();
  const [cities, setCities] = useState<TypesCity[]>();
  const [selectedAttraction, setSelectedAttraction] = useState<TypesAttraction>();

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

  const getCategories = async () => {
    let res = await Api.get(`/categories/${api}`);
    setCategories(res.data);
  };

  const getRegions = async () => {
    let res = await Api.get(`/regions`);
    setRegions(res.data);
  };

  const getCities = async () => {
    let res = await Api.get(`/cities`);
    setCities(res.data);
  };

  const getSelectedAttractionData = async () => {
    const res = await Api.get(`/${api}/${id}`);
    setSelectedAttraction(res.data);
    console.log(res.data);
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
    getCities();
    getCategories();
    getSelectedAttractionData();
  }, []);

  const onSubmit = async (data: any, e: any) => {
    let newData = data;

    const uploadImageRes: any = await UploadImage(data.img[0]);

    if (uploadImageRes && categories && regions && cities) {
      newData.img = uploadImageRes.data.data.url;
      newData.bestAttractions = data.bestAttractions === 'yes' ? true : false;
      const category = categories.filter((obj) => {
        return obj.title === data.category;
      });
      newData.category = category[0]._id;
      const region = regions.filter((obj) => {
        return obj.name === data.region;
      });
      newData.region = region[0]._id;
      const city = cities.filter((obj) => {
        return obj.name === data.city;
      });
      newData.city = city[0]._id;
      try {
        const res = await Api.patch(`/${api}/update/${id}`, newData);
        if (res.status === 200) {
          AddNotification('Zaktualizowano', 'Atrakcja została zaktualizowana', 'success');
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

  const categoriesList = () => {
    if (categories === undefined) {
      return [];
    }

    let categoriesListTitle: string[] = [];

    categories.map((item: TypesElementCategory) => {
      categoriesListTitle = [...categoriesListTitle, item.title];
    });

    return categoriesListTitle;
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

  const citiesList = () => {
    if (cities === undefined) {
      return [];
    }

    let citiesListTitle: string[] = [];

    cities.map((item: TypesCity) => {
      citiesListTitle = [...citiesListTitle, item.name];
    });

    return citiesListTitle;
  };

  if (selectedAttraction !== undefined && categories && regions && cities) {
    console.log(selectedAttraction._id);
    return (
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="name"
          label="Nazwa"
          name="name"
          defaultValue={selectedAttraction.name}
          inputRef={register({ required: true })}
          errorMessage={errors.name ? 'To pole nie może być puste' : ''}
        />
        <Input id="img" label="Zdjęcie" name="img" inputRef={register()} type="file" />
        <Input
          id="shortDescription"
          label="Krótki opis"
          name="shortDescription"
          defaultValue={selectedAttraction.shortDescription}
          inputRef={register({ required: true })}
          errorMessage={errors.name ? 'To pole nie może być puste' : ''}
        />
        <Input
          id="bestAttractions"
          label="Topowa atrakcja"
          name="bestAttractions"
          defaultValue={selectedAttraction.bestAttractions ? 'yes' : 'no'}
          inputRef={register({ required: true })}
          errorMessage={errors.section ? 'To pole nie może być puste' : ''}
          type="select"
          options={['yes', 'no']}
        />
        <Input
          id="category"
          label="Kategoria"
          name="category"
          defaultValue={
            categories.filter((obj) => obj._id === selectedAttraction.category)[0].title
          }
          inputRef={register({ required: true })}
          errorMessage={errors.section ? 'To pole nie może być puste' : ''}
          type="select"
          options={categoriesList()}
        />
        <Input
          id="region"
          label="Region"
          name="region"
          defaultValue={regions.filter((obj) => obj._id === selectedAttraction.region)[0].name}
          inputRef={register({ required: true })}
          errorMessage={errors.section ? 'To pole nie może być puste' : ''}
          type="select"
          options={regionsList()}
        />
        <Input
          id="city"
          label="Miasto"
          name="city"
          defaultValue={cities.filter((obj) => obj._id === selectedAttraction.city)[0].name}
          inputRef={register({ required: true })}
          errorMessage={errors.section ? 'To pole nie może być puste' : ''}
          type="select"
          options={citiesList()}
        />
        <FormList title="Opis">
          {descriptionFields.map((item, index) => (
            <li key={item.id}>
              <Input
                id={`description[${index}].type`}
                label="Typ"
                name={`description[${index}].type`}
                inputRef={register()}
                defaultValue={item.type}
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
              const res = await DeleteElement(api, selectedAttraction._id);
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

export default UpdateAttraction;
