import styled from 'styled-components/native';
import theme from '../../styles/theme';
import { LinearGradient } from 'expo-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';
import { MotiImage, MotiView } from 'moti';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Image = styled(MotiImage)`
    width: 373px;
    height: 567px;

    top: 77px;
    left: 86px;

    z-index: 1;
    position: absolute;
`;

export const ImageLogo = styled.Image`
    width: 373px;
    height: 437px;

    top: 77px;
    left: 0px;
`;

export const Background = styled(LinearGradient).attrs({
    colors: ['transparent', theme.colors.primaryOpacity60]
})`
    width: 100%;
    height: 100%;

    position: absolute;
    z-index:2;
`;

export const ButtonsOptions = styled.View`
    top: 96px;
`;

export const Content = styled.View`
    width: 100%;

    padding: 26px;
    position: absolute;

    bottom: 14px;

    flex-direction: row;

    justify-content: space-between;
    align-items: flex-end;
`;

export const WrapperText = styled(MotiView)``;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primaryBold};
    font-size: ${RFValue(36)}px;
    color: ${({ theme }) => theme.colors.secondary};
`;

export const Subtitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.text};
`;

export const Button = styled(TouchableOpacity).attrs({
    activeOpacity: .6
})`
    width: 50px;
    height: 50px;
    border-radius: 10px;

    background-color: ${({ theme }) => theme.colors.primary};

    align-items: center;
    justify-content: center;
`;

