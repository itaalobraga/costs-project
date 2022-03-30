import styled from "styled-components";
import { darken } from 'polished'

type ButtonProps = {
    padding?: string;
}

export const Container = styled.button<ButtonProps>`
    padding: ${({ padding }) => padding};
    margin-bottom: 1rem;

    background-color: var(--text-title);

    border: 0;
    border-radius: 0.3rem;

    box-shadow: 0 0 0.3rem var(--text-title);

    transition: 0.4s;

    &:hover {
        background-color: ${darken(.06, '#363f5f')};
    }

    > a {
        color: var(--shape);

        text-decoration: none;
    }
`;