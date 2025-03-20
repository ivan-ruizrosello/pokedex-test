import styled from "styled-components"

type Props = {
    name: string;
    height: number;
    number: number;
    health: number;
    weight: number;
    url: string;
}

const Card = styled.div`
    background-color: #FFFFFF;
    width: 180px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 8px;
`

const PokemonImage = styled.img`
    width: 100px;
    height: 100px;
`

const PokemonCard = (props: Props) => {
    return (
        <Card>
            <PokemonImage src={props.url} alt={props.name} />
            <span>name: {props.name}</span>
            <span>height: {props.height}</span>
            <span>number: {props.number}</span>
            <span>health: {props.health}</span>
            <span>weight: {props.weight}</span>
        </Card>
    );
};

export default PokemonCard;