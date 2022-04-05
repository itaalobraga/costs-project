import styled from 'styled-components';
import { transparentize } from 'polished';


export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background-color: ${transparentize(0.4, '#363f5f')};
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;

    position: relative;

    max-width: 24rem;
    width: 100%;

    padding: 1.2rem;

    background-color: var(--text-body);

    box-shadow: 0 0 0.3rem var(--text-title);

    border-radius: 0.3rem;

    & > button {
        display: flex;
        align-items: center;

        position: absolute;
        top: 0.6rem;
        right: 1rem;

        background-color: transparent;

        border: 0;

        & > svg {
            font-size: 1.8rem;
            color: var(--text-title);
        }
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.6rem;

    max-width: 19rem;
    width: 100%;

    > div {
        display: flex;
        flex-direction: column;
        gap: 0.6rem;

        > label {
            font-size: 1.2rem;
            font-weight: 600;

            color: var(--text-title);
        }

        > input {
            border: 0;

            padding: 0.6rem;

            text-anchor: none;
        }

        > select {
            width: 100%;

            border: 0;

            padding: 0.6rem;

            color: var(--text-title);

            font-weight: 600;
            
            &:first-child {
                color: var(--text-body);
            }
        }

    }

    > button {
        align-self: center;

        width: 50%;

        padding: 0.6rem;

        border: 0;
        border-radius: 0.3rem;

        background-color: var(--text-title);
        color: var(--shape);
    }
`;
