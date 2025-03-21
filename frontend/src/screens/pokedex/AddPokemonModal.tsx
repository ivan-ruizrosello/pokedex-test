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

const ModalTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 15px;
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
  width: 100%;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: left;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 4px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
`;

const SubmitButton = styled.button`
  background: green;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  width: 100%;
  padding: 8px 10px;
  margin-top: 5px;
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
        <ModalTitle>Add Pokémon</ModalTitle>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor="name">Name</Label>
            <Input 
              id="name"
              type="text" 
              name="name" 
              placeholder="Enter Pokémon name" 
              onChange={handleChange} 
              value={formData.name} 
              required 
            />
          </InputGroup>
          
          <InputGroup>
            <Label htmlFor="number">Number</Label>
            <Input 
              id="number"
              type="number" 
              name="number" 
              placeholder="Enter Pokédex number" 
              onChange={handleChange} 
              value={formData.number} 
              required 
            />
          </InputGroup>
          
          <InputGroup>
            <Label htmlFor="height">Height (cm)</Label>
            <Input 
              id="height"
              type="number" 
              name="height" 
              placeholder="Enter height in cm" 
              onChange={handleChange} 
              value={formData.height} 
              required 
            />
          </InputGroup>
          
          <InputGroup>
            <Label htmlFor="weight">Weight (kg)</Label>
            <Input 
              id="weight"
              type="number" 
              name="weight" 
              placeholder="Enter weight in kg" 
              onChange={handleChange} 
              value={formData.weight} 
              required 
            />
          </InputGroup>
          
          <InputGroup>
            <Label htmlFor="health">Health Points</Label>
            <Input 
              id="health"
              type="number" 
              name="health" 
              placeholder="Enter HP value" 
              onChange={handleChange} 
              value={formData.health} 
              required 
            />
          </InputGroup>
          
          <InputGroup>
            <Label htmlFor="url">Image URL</Label>
            <Input 
              id="url"
              type="text" 
              name="url" 
              placeholder="Enter image URL" 
              onChange={handleChange} 
              value={formData.url} 
              required 
            />
          </InputGroup>
          
          <SubmitButton type="submit">Add Pokémon</SubmitButton>
        </Form>
        <CloseButton onClick={onClose}>Close</CloseButton>
      </ModalContainer>
    </Overlay>
  );
};

export default AddPokemonModal;