import styled from "styled-components";

export const Container = styled.footer`
    position: absolute;
    bottom: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;

    z-index: 9999;
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