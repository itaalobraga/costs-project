import styled from 'styled-components';

export const Container = styled.div`
    padding: 0 4rem;

    > div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        > h1 {
            font-size: 2.6rem;
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
`;

export const CardsSection = styled.section`
    display: flex;
    justify-content: left;
    flex-wrap: wrap;

    max-width: 100%;
    max-height: 590px;

    overflow: auto;

    padding: 1.2rem;
    margin-top: 2rem;

    background-color: var(--text-title);

    border-radius: 0.3rem;

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
`;
