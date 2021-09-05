import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { Pressable } from 'react-native';
import { useAnimationState } from 'moti';

import {
    Container,
    Info,
    InfoNumber,
    InfoTitle
} from './styles';

interface Props {
    iconName: React.ComponentProps<typeof Ionicons>['name'];
    title: string;
    number: number;
}

export function Options({ iconName, title, number }: Props) {
    const theme = useTheme();

    const toogleAnimationState = useAnimationState({
        closed: {
            width: 60
        },
        open: {
            width: 150
        }
    });

    function handleToogleOpen() {
        toogleAnimationState.transitionTo('open');
    }

    function handleToogleClose() {
        toogleAnimationState.transitionTo('closed');
    }

    return (
        <Container
            state={toogleAnimationState}
        >
            <Pressable
                onPressIn={handleToogleOpen}
                onPressOut={handleToogleClose}
            >
                <Ionicons
                    name={iconName}
                    size={30}
                    color={theme.colors.primary}
                />
            </Pressable>

            <Info>
                <InfoNumber>
                    {number}
                </InfoNumber>

                <InfoTitle>
                    {title}
                </InfoTitle>
            </Info>
        </Container>
    );
}