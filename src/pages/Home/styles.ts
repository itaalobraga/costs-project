import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 1.2rem;

    h1 {
        font-weight: 600;
        font-size: 2.6rem;

        color: var(--text-title);

        > span {
            background-color: var(--text-title);
            color: var(--shape);

            border-radius: 0.3rem;

            padding: 0 .6rem;
        }
    }

    > p {
        font-size: 1rem;
    }

    > img {
        margin-top: 4rem;

        max-width: 100%;
        width: 25rem;
    }
`;