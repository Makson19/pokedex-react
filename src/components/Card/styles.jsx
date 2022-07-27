import styled, { keyframes } from 'styled-components';

const fade = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`;

export const Container = styled.div`
    display: ${props => props.showStats ? 'flex' : 'none'};
    flex-direction: column;
    padding: 2.5rem 2rem;
    height: 100%;

    .title {
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap: 4rem;
        margin-bottom: 2rem;
        animation: ${fade} 0.8s ease-in-out;

        h2,
        span {
            text-transform: uppercase;
            font-size: 2.5rem;
            font-weight: 500;
        }
    }

    img {
        max-height: 18rem;
        width: 100%;
        animation: ${fade} 0.8s ease-in-out;
    }

    .description {
        margin-top: 2rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 1fr);
        grid-template-areas: "l1c1 l1c2"
                             "l2c1 l2c2"
                             "l3c1 l3c2";
        gap: 1rem;
        animation: ${fade} 0.8s ease-in-out;

        span {
            font-size: 1.8rem;
        }

        .type {
            grid-area: l1c1;
            font-weight: 500;
            justify-self: end;
        }

        .weight {
            grid-area: l2c1;
            font-weight: 500;
            justify-self: end;
        }

        .height {
            grid-area: l3c1;
            font-weight: 500;
            justify-self: end;
        }

        .type-value {
            grid-area: l1c2;
            justify-self: start;
        }

        .weight-value {
            grid-area: l2c2;
            justify-self: start;
        }

        .height-value {
            grid-area: l3c2;
            justify-self: start;
        }
    }
    
    &.steel {
        background-color: #f4f4f4;
    }
  
    &.fire {
        background-color: #fddfdf;
    }
  
    &.grass {
        background-color: #defde0;
    }
  
    &.electric {
        background-color: #fcf7de;
    }
  
    &.water,
    &.ice {
        background-color: #def3fd;
    }
  
    &.ground {
        background-color: #f4e7da;
    }
  
    &.rock {
        background-color: #d5d5d4;
    }
  
    &.fairy {
        background-color: #fceaff;
    }
  
    &.poison {
        background-color: #98d7a5;
    }
  
    &.bug {
        background-color: #f8d5a3;
    }
  
    &.dragon {
        background-color: #97b3e6;
    }
  
    &.psychic {
        background-color: #eaeda1;
    }
  
    &.flying {
        background-color: #f5f5f5;
    }
  
    &.fighting {
        background-color: #e6e0d4;
    }
  
    &.normal {
        background-color: #f5f5f5;
    }

    &.ghost {
        background-color: #9688aa;
    }
`;