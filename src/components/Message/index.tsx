import { useEffect, useState } from 'react';
import { Container } from './styles';

type MessageProps = {
    message: string;
    messageStatus: boolean;
};

export const Message = ({ message, messageStatus }: MessageProps) => {
    const [messageIsActive, setMessageIsActive] = useState(messageStatus);

    useEffect(() => {
        setTimeout(() => {
            setMessageIsActive(false)
        }, 1500);
    }, []);

    return (
        <Container messageStatus={messageIsActive}>
            <h1>{message}</h1>
        </Container>
    );
};
