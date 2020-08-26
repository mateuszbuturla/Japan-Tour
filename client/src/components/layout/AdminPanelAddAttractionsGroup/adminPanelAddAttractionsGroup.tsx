import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import Modal from "react-modal";

import { Input } from "../../common/common";

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
  },
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
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
          ref={register}
        />
        <Input
          type="textarea"
          placeholder="opsi grupy"
          id="groupdescription"
          name="groupdescription"
          ref={register}
        />

        <input type="submit" value="Dodaj" />
      </Form>
    </Modal>
  );
}

export default AdminPanelAddAttractionsGroup;
