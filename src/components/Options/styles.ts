import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { MotiView } from '@motify/components';

export const Container = styled(MotiView)`
    width: 60px;
    height: 60px;
    background-color: ${({ theme }) => theme.colors.primaryOpacity40};

    border-radius: 10px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;

    border: 1px solid ${({ theme }) => theme.colors.primary};

    margin-left: -1px;

    align-items: center;

    flex-direction: row;

    overflow: hidden;
    padding-left: 15px;
    margin-bottom: 5px;
`;

export const Info = styled.View`
    margin-left: 15px;
`;

export const InfoNumber = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondaryBold};
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${RFValue(20)}px;
`;

export const InfoTitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary};
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${RFValue(12)}px;
`;
