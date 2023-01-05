import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 60px;

  background-color: #f8f8f8;
  border-radius: 10px;

  padding: 10px;
  margin-bottom: 15px;
`;

export const Input = styled.TextInput`
  flex: 1;

  font-size: 14px;
  color: #626262;

  font-family: 'Poppins-Regular';
`;

export const InputArea = styled.View`
  flex: 1;
`;

export const InputLabel = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 12px;
  color: #626262;
`;
