import styled, { css } from 'styled-components';

export const Container = styled.form`
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
        }

        > select {
            width: 100%;

            border: 0;

            padding: 0.6rem;

            color: var(--text-title);

            font-weight: 600;
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
