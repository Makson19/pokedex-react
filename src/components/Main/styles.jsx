import styled from 'styled-components';

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    background-color: ${props => props.theme.bgPokedex};
    padding: 1.5rem;
    margin: 2rem;
    border: 0.5rem outset ${props => props.theme.bdColorPrimary};
    border-radius: 1rem;
    box-shadow: 0.3rem 0.4rem 0.5rem 0.1rem ${props => props.theme.bdColorPrimary};

    .pokemon {
        width: 100%;

        .card-container {
            height: 46.6rem;
            background-color: ${props => props.theme.bgCard};

            border-radius: 1rem;
            border: 0.5rem inset ${props => props.theme.bdColorSecondary};
        }
    }

    .pokemon-list {
        padding: 2.5rem 0 1rem;
        width: 100%;

        .pokedex {
            margin-bottom: 2rem;
            background-color: ${props => props.theme.bgPokedexList};
            border: 0.5rem inset ${props => props.theme.bdColorSecondary};
            border-radius: 1rem;
            color: ${props => props.theme.colorText};

            .options {
                padding: 1rem 0 1rem 1rem;
                font-size: 1.9rem;
                font-weight: 700;
                text-transform: uppercase;
            }

            .pokedex-list {
                list-style: none;
                width: 100%;
                padding: 1rem 3rem 1rem;
                display: flex;
                flex-direction: column;

                li {
                    font-size: 1.8rem;
                    font-weight: 400;
                    text-transform: capitalize;
                    margin-bottom: 1rem;
                    cursor: pointer;
                    transition: 0.3s ease-in-out;
                    transition-property: color, background-color;

                    &:hover {
                        color: ${props => props.theme.colorTextHover};
                        background-color: ${props => props.theme.bgPokedexListHover};
                    }
                }
            }
        }
    }

    @media (min-width: 768px) {
        flex-direction: row;
        gap: 4rem;
        padding: 2.5rem;

        .pokemon > .card-container {
            height: 40rem;
        }

        .pokemon-list {
            padding: 0;

            .pokedex > .pokedex-list {
                padding: 1rem 5rem;
            }
        }
    }
`;