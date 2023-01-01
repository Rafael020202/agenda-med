import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #29abe2;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const InputArea = styled.View`
  padding: 20px;
  width: 100%;
`;

export const CustomButton = styled.TouchableOpacity`
  height: 60px;
  background-color: #36558c;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const CustomButtonText = styled.Text`
  font-size: 18px;
  color: #fff;
`;

export const SignMessageButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 20px;
`;

export const SignMessageButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export const SignMessageButtonBold = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-left: 5px;
  color: #fff;
`;
