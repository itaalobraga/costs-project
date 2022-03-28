import { useEffect, useState } from 'react';
import { Container } from './styles';

type MessageProps = {
    message: string;
};

export const Message = ({ message }: MessageProps) => {
    const [messageActive, setMessageActive] = useState(!!message);

    useEffect(() => {
        const timer = () => {
            setTimeout(() => {
                setMessageActive(false);
            }, 3000);
        };
        timer()
    }, [])

    return (
        <Container messageActive={messageActive}>
            <h1>{message}</h1>
        </Container>
    );
};
