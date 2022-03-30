import styled, { css } from 'styled-components';

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    min-height: 6rem;

    padding: 0 5rem;

    background-color: var(--text-title);

    box-shadow: 0 0 0.3rem var(--text-title);

    > img {
        max-width: 100%;
        width: 4rem;
        filter: drop-shadow(0 0 .3rem var(--text-body));

    }

    > button {
        display: none;
    }

    @media (max-width: 960px) {
        > button {
            display: block;

            background-color: transparent;
            color: var(--shape);

            border: 0;

            font-size: 1.8rem;
        }
    }
`;

type NavProps = {
    isActive: boolean;
};

export const Nav = styled.nav<NavProps>`
    display: flex;
    gap: 1.2rem;

    > a {
        position: relative;

        color: var(--shape);

        text-decoration: none;

        transition: 0.1s;

        &::before {
            content: '';

            position: absolute;
            bottom: 0;

            width: 0;
            height: 0.1rem;

            background-color: var(--shape);

            transition: .4s;
        }

        &:hover::before {
            width: 100%;
        }
    }

    @media (max-width: 960px) {
        pointer-events: none;

        visibility: hidden;

        position: absolute;
        top: 5.6rem;
        left: 0;
        right: 0;

        height: 0;

        display: flex;
        flex-direction: column;

        border-bottom-left-radius: 0.3rem;
        border-bottom-right-radius: 0.3rem;

        background-color: var(--text-title);

        transition: all 0.2s ease-in-out;

        ${({ isActive }) =>
            isActive &&
            css`
                top: 5.6rem;

                pointer-events: auto;

                visibility: visible;

                height: 100%;

                padding: 0.8rem;

                border: 1px solid blue;

                > a {
                    padding: 0.8rem;

                    background-color: var(--shape);
                    color: var(--text-title);
                }

            `}
    }
`;
