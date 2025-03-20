
import PokedexScreenWrapper from "./pokedexScreen.style"
import PokemonList from "./PokemonList"

const PokedexScreen = () => {
  return (
    <PokedexScreenWrapper>

      <div className="actions_container">
        <img src="/assets/images/add_btn.png" className="action_img"/>
      </div>

      <div className="title_section">
        <h2>Pokédex de Impackta</h2>
      </div>

      <PokemonList />
    </PokedexScreenWrapper>
  )
}

export default PokedexScreen

