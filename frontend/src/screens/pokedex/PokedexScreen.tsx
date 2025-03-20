
import { useState } from "react";
import PokedexScreenWrapper from "./pokedexScreen.style"
import PokemonList from "./PokemonList"
import AddPokemonModal from "./AddPokemonModal"

const PokedexScreen = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <PokedexScreenWrapper>

      <div className="actions_container">
        <img onClick={() => setIsModalOpen(true)} src="/assets/images/add_btn.png" className="action_img"/>
      </div>

      <div className="title_section">
        <h2>Pokédex de Impackta</h2>
      </div>

      <PokemonList />

      <AddPokemonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </PokedexScreenWrapper>
  )
}

export default PokedexScreen

