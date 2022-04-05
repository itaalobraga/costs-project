import styled from "styled-components";

export const Container = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;

    margin-top: 2rem;
    `;

export const Icons = styled.div`
    display: flex;
    gap: 0.6rem;

    a > svg {
        font-size: 1.8rem;

        transition: 0.4s;

        color: var(--text-body);

        &:hover {
            color: var(--text-title);
        }
    }
`;