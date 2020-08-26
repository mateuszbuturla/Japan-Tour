import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import Modal from "react-modal";

import { Input, Textarea, AdminPanelButton } from "../../common/common";

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

function AdminPanelAddAttractionsGroup({ isOpen, closeModal }: Props) {
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
        <h3>Dodaj zbiór atrakcji</h3>
        <Input
          type="text"
          placeholder="nazwa groupy"
          id="groupname"
          name="groupname"
          ref={register({ required: true })}
        />
        <Textarea
          placeholder="opsi grupy"
          id="groupdescription"
          name="groupdescription"
          ref={register({ required: true })}
        />
        <AdminPanelButton text="Dodaj" />
      </Form>
    </Modal>
  );
}

export default AdminPanelAddAttractionsGroup;
