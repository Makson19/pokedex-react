import React, { useState, useEffect } from 'react';
import { Container } from './styles';

import Card from '../Card';
import Pagination from '../Pagination';

function Main() {
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?offset=0&limit=8");
    const [prevUrl, setPrevUrl] = useState(null);
    const [nextUrl, setNextUrl] = useState(null);
    const [pokeList, setPokeList] = useState([]);
    const [cardPokemon, setCardPokemon] = useState(false);
    const [urlPokemon, setUrlPokemon] = useState(null);
    const [pokemonItem, setPokemonItem] = useState({
        id: '',
        name: '',
        image: '',
        type: ['', ''],
        height: '',
        weight: ''
    });

    useEffect(() => {
        const fetchPokeList = (url) => {
            fetch(url)
            .then(res => res.json())
            .then(data => {
                const {results, previous, next} = data;
                setPrevUrl(previous);
                setNextUrl(next);
                let idArray = [];

                for(let item of results) {
                    const urlArray = item.url.split('/');
                    const idItem = urlArray[urlArray.length - 2];
                    idArray.push(idItem);
                }

                const items = results.map((elem, index) => ({
                    "id": idArray[index],
                    "name": elem.name,
                    "url": elem.url
                }))

                setPokeList(items);
            })
        }

        fetchPokeList(url);
    }, [url]);


    useEffect(() => {
        const fetchPokemon = (i) => {
            if(i) {
                fetch(i)
                .then(res => res.json())
                .then(data => {
                    const item = {
                        "id": data.id,
                        "name": data.name,
                        "image": data.sprites.other.dream_world['front_default'],
                        "type": data.types.map(type => type.type.name),
                        "height": data.height,
                        "weight": data.weight
                    }
    
                    setPokemonItem(() => {
                        return item;
                    });
                })
            }
        }

        fetchPokemon(urlPokemon);
    }, [urlPokemon, cardPokemon])

    const prevList = () => {
        if(prevUrl) {
            setUrl(prevUrl);
        }
    }

    const nextList = () => {
        if(nextUrl) {
            setUrl(nextUrl);
        }
    }

    const showCard = (a) => {
        setUrlPokemon(a);
        setCardPokemon(true);
    }

  return (
    <Container>
        <div className="pokemon">
            <div className="card-container">
                <Card item={pokemonItem} show={cardPokemon}/>
            </div>
        </div>

        <div className="pokemon-list">
            <div className="pokedex">
                <p className="options">
                    Escolha um dos Pokemons abaixo:
                </p>

                <ul className="pokedex-list">
                    {pokeList.map((pokemon) => {
                        return <li key={pokemon.id} 
                                   className="pokemon-item"
                                   onClick={() => showCard(pokemon.url)}
                                >
                                    {pokemon.id}. {pokemon.name}
                                </li>
                    })}
                </ul>
            </div>
            
            <Pagination prevList={prevList} nextList={nextList}/>
        </div>
    </Container>
  )
}

export default Main;