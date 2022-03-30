import styled, { css } from 'styled-components';

type MessageProps = {
    messageStatus: boolean;
};

export const Container = styled.div<MessageProps>`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);

    visibility: hidden;

    margin: 0 auto;

    text-align: center;

    padding: 0.8rem 1.2rem;

    background-color: var(--green);

    border-radius: 0.3rem;

    transition: 0.4s;

    box-shadow: 0 0 0.5rem var(--text-title);

    z-index: -99;

    > h1 {
        color: var(--shape);

        font-size: 1.2rem;
    }

    > p {
        font-size: 0.8rem;
    }

    ${({ messageStatus }) =>
        messageStatus &&
        css`
            visibility: visible;

            top: 6.5rem;
        `}
`;
