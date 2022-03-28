import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    background-color: var(--shape);

    padding: 0.8rem;

    max-width: 18rem;
    width: 100%;

    border-radius: 0.3rem;

    margin: .4rem;

    & > h1 {
        font-size: 1.5rem;
        font-weight: 600;

        border-bottom: 0.2rem solid var(--text-title);

        padding-bottom: 0.2rem;

        color: var(--text-title);
    }

    & > div {
        & > p {
            font-weight: 600;
            font-size: 1rem;

            color: var(--text-title);

            & > span {
                font-weight: 400;

                color: var(--text-body);
            }
        }
    }
`;

export const CardButtonArea = styled.div`
    display: flex;
    align-items: center;
    gap: .3rem;

    & > button {
        display: flex;
        align-items: center;
        gap: .3rem;

        padding: 0.4rem;

        border: 0;
        border-radius: .3rem;

        background-color: var(--text-title);
        color: var(--shape)
    }
`;
