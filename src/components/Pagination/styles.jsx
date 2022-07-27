import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    gap: 1rem;

    .previous,
    .next {
        cursor: pointer;
        font-size: 1.8rem;
        font-weight: 700;
        border: none;
        border-radius: 1rem;
        outline: none;
        height: 4rem;
        width: 100%;
        box-shadow: 0.3rem 0.4rem 0.5rem 0.1rem ${props => props.theme.bdColorPrimary};
        transition: background-color 0.3s ease-in-out;

        &:hover {
            background-color: ${props => props.theme.bgBtnHover};
        }
    }
`;