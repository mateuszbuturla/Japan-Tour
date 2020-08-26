import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import Modal from "react-modal";

import { Input, Textarea, AdminPanelButton, Select } from "../../common/common";

interface Props {
  isOpen: boolean;
  closeModal: any;
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    boxShadow: "0px 0px 18px 1px rgba(0,0,0,0.5)",
    width: "90vw",
    maxWidth: "300px",
    padding: 0,
    maxHeight: "90vh",
    borderRadius: "0px",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

const Form = styled.form`
  margin: 30px;
  color: #2b2b2b;
`;

function AdminPanelAddAttraction({ isOpen, closeModal }: Props) {
  const { register, handleSubmit, errors } = useForm();

  const onSubmitForm = (e: any) => {
    console.log(e);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Dodaj zbiór atrakcji"
    >
      <Form onSubmit={handleSubmit(onSubmitForm)}>
        <h3>Dodaj atrakcję</h3>
        <Input
          type="text"
          placeholder="nazwa atrakcji"
          id="attractionname"
          name="attractionname"
          ref={register({ required: true })}
        />
        <Select id="group" name="group" ref={register({ required: true })}>
          <option>Group1</option>
          <option>Group2</option>
          <option>Group3</option>
          <option>Group4</option>
        </Select>
        <Textarea
          placeholder="opsi atrakcji"
          id="attractiondescription"
          name="attractiondescription"
          ref={register({ required: true })}
        />
        <AdminPanelButton text="Dodaj" />
      </Form>
    </Modal>
  );
}

export default AdminPanelAddAttraction;
