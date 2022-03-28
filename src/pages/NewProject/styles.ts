import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 1.2rem;

    > h1 {
        font-weight: 600;
        font-size: 2.6rem;

        color: var(--text-title);
    }

    > p {
        font-size: 1rem;

        margin-bottom: .6rem;
    }
`;