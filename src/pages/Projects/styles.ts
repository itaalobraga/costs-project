import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    padding: 0 4rem;

    > div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        > h1 {
            font-size: 2.6rem;

            color: var(--text-title);
        }

        > button {
            padding: 1rem 1.5rem;
            margin: 0;
        }
    }

    @media (max-width: 470px) {
        > div {
            justify-content: center;
            flex-wrap: wrap;
            gap: 2rem;
        }
    }

    @media (max-width: 780px) {
        padding: 0;
    }
`;

export const CardsSection = styled.section`
    display: flex;
    justify-content: left;
    flex-wrap: wrap;

    max-width: 100%;
    max-height: 590px;

    overflow: auto;

    padding: 1.2rem;

    background-color: var(--text-title);

    border-radius: 0.3rem;

    box-shadow: 0 0 0.3rem var(--text-title);

    &::-webkit-scrollbar {
        width: 0.4rem;
    }

    &::-webkit-scrollbar-thumb {
        height: 0.4rem;

        border-radius: 0.3rem;

        background-color: var(--text-body);
    }

    &::-webkit-scrollbar-track {
        border-radius: 0.3rem;

        background: var(--shape);
    }

    @media (max-width: 780px) {
        justify-content: center;
    }
`;
