import styled from "styled-components";
import { Pokemon } from "../../redux/PokemonReducer";
import PokemonCard from "./PokemonCard";
import { connect } from "react-redux";
import { RootState } from "../../redux/store";

const Container = styled.div`
    padding:10px;
    background-color:#FFFFFF;
    width:80%;
    height:350px;
    overflow-y:scroll;
    display:flex;
    margin-left:auto;
    margin-right:auto;
    flex-wrap: wrap;
    gap: 10px;
`


type Props = {
    pokemons: Pokemon[]
}

const PokemonList = (props: Props) => {
    return (
        <Container>
            {props.pokemons.map((pokemon) => (
                <PokemonCard {...pokemon} key={pokemon.name} />
            ))}
        </Container>
    )
}

// get the redux store data
const mapStateToProps = (state: RootState) => ({
    pokemons: state.pokemon.pokemons,
    isLoading: state.pokemon.isLoading,
    error: state.pokemon.error
  })


  export default connect(mapStateToProps)(PokemonList)