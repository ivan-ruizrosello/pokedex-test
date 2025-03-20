import styled from "styled-components";
import { createPokemon } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { useState } from "react";
import { showPokemonAddedToast } from "../../toast/successToast";

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

const defaultFormData = {
  name: "",
  height: 0,
  number: 0,
  health: 0,
  weight: 0,
  url: "",
};

const AddPokemonModal = ({ isOpen, onClose }: PokemonModalProps) => {
  const dispatch: AppDispatch = useDispatch();
  const [formData, setFormData] = useState(defaultFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.type === "number" ? parseInt(e.target.value) : e.target.value;

    console.log(value);
    setFormData({ ...formData, [e.target.name]: value });
  };

  const clearForm = () => {
    setFormData(defaultFormData);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createPokemon(formData));
    clearForm()
    showPokemonAddedToast(formData.name);
    onClose();
  };

  return (
    <Overlay isOpen={isOpen} onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <h2>Add Pokémon</h2>
        <Form onSubmit={handleSubmit}>
          <Input type="text" name="name" placeholder="Name" onChange={handleChange} value={formData.name} required />
          <Input type="number" name="number" placeholder="Number" onChange={handleChange} value={formData.number}  required />
          <Input type="number" name="height" placeholder="Height (cm)" onChange={handleChange} value={formData.height}  required />
          <Input type="number" name="weight" placeholder="Weight (kg)" onChange={handleChange} value={formData.weight}  required />
          <Input type="number" name="health" placeholder="Health" onChange={handleChange} value={formData.health}  required />
          <Input type="text" name="url" placeholder="Image URL" onChange={handleChange} value={formData.url}  required />
          <SubmitButton type="submit">Add Pokémon</SubmitButton>
        </Form>
        <CloseButton onClick={onClose}>Close</CloseButton>
      </ModalContainer>
    </Overlay>
  );
};

export default AddPokemonModal;