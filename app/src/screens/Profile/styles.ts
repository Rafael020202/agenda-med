import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #29abe2;
`;

export const Scroller = styled.ScrollView`
  padding: 10px;
`;

export const UserInfoArea = styled.View`
  padding: 22px;
  background-color: #fff;
  border-radius: 15px;

  margin-top: 30px;
  margin-bottom: 30px;
  width: 100%;
`;

export const CustomButton = styled.TouchableOpacity`
  height: 54px;
  background-color: #36558c;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const CustomButtonText = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 16px;
  color: #fff;
`;

export const SignOutArea = styled.View`
  margin: auto;
`;

export const SignOutButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SignOutButtonText = styled.Text`
  font-size: 14px;
  margin-left: 10px;
  color: #36558c;
  font-family: 'Poppins-Light';
`;
