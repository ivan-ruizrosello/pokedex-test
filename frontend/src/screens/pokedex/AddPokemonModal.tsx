import React, { useState } from "react";
import styled from "styled-components";
import { createPokemon } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";

interface PokemonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Overlay = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  text-align: center;
`;

const CloseButton = styled.button`
  background: red;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 5px;
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  background: green;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  width: 100%;
  padding: 5px 10px;
`;

const AddPokemonModal = ({ isOpen, onClose }: PokemonModalProps) => {
  const dispatch: AppDispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    height: 0,
    number: 0,
    health: 0,
    weight: 0,
    url: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createPokemon(formData));
    onClose();
  };

  return (
    <Overlay isOpen={isOpen} onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <h2>Add Pokémon</h2>
        <Form onSubmit={handleSubmit}>
          <Input type="text" name="name" placeholder="Name" onChange={handleChange} required />
          <Input type="number" name="number" placeholder="Number" onChange={handleChange} required />
          <Input type="number" name="height" placeholder="Height (cm)" onChange={handleChange} required />
          <Input type="number" name="weight" placeholder="Weight (kg)" onChange={handleChange} required />
          <Input type="number" name="health" placeholder="Health" onChange={handleChange} required />
          <Input type="text" name="url" placeholder="Image URL" onChange={handleChange} required />
          <SubmitButton type="submit">Add Pokémon</SubmitButton>
        </Form>
        <CloseButton onClick={onClose}>Close</CloseButton>
      </ModalContainer>
    </Overlay>
  );
};

export default AddPokemonModal;