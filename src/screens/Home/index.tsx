import React from 'react';
import { StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import { Options } from '../../components/Options';

import {
    Container,
    Image,
    ImageLogo,
    Background,
    ButtonsOptions,
    Content,
    WrapperText,
    Title,
    Subtitle,
    Button,
} from './styles';

import imgCR from '../../assets/cr.png';
import imgLogo from '../../assets/logo.png';

export function Home() {
    const theme = useTheme();

    return (
        <Container>
            <StatusBar
                barStyle="light-content"
                translucent
                backgroundColor="transparent"
            />

            <ImageLogo
                source={imgLogo}
            />

            <Image
                source={imgCR}
                from={{opacity: 0, left: 300}}
                animate={{opacity: 1, left: 86}}
                transition={{
                    type: 'timing',
                    duration: 1000
                }}
            />
            <Background>

                <ButtonsOptions>
                    <Options 
                        iconName='star-outline'
                        title="BALLON D'OR"
                        number={5}
                    />
                    <Options 
                        iconName='trophy-outline'
                        title="TITLES"
                        number={21}
                    />
                    <Options 
                        iconName='football-outline'
                        title="GOALS"
                        number={783}
                    />
                    <Options 
                        iconName='clipboard-outline'
                        title="ASSISTS"
                        number={226}
                    />
                </ButtonsOptions>

                <Content>
                    <WrapperText
                        from={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{
                            type: 'timing',
                            duration: 1500
                        }}
                    >
                        <Title>
                            THE HISTORY
                            {'\n'}CONTINUES
                        </Title>

                        <Subtitle>
                            Cristiano Ronaldo is back... Let's
                            {'\n'}make it happen once again!
                        </Subtitle>
                    </WrapperText>

                    <Button>
                        <Ionicons
                            name="chevron-forward"
                            size={30}
                            color={theme.colors.secondary}
                        />
                    </Button>
                </Content>

            </Background>
        </Container>
    );
}