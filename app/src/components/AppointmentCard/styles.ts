import styled from 'styled-components/native';

export const Area = styled.TouchableOpacity`
  background-color: #fff;
  margin-bottom: 20px;
  border-radius: 20px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
`;

export const Avatar = styled.Image`
  width: 72px;
  height: 72px;

  border-radius: 20px;
`;

export const UserInfoArea = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const UserName = styled.Text`
  margin-left: 10px;
  font-size: 18px;
  font-family: 'Poppins-Bold';
`;

export const ServiceInfoArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

export const ServiceInfo = styled.View``;

export const ServiceInfoText = styled.Text`
  font-size: 16px;
  font-family: 'Poppins-Bold';
`;

export const ServiceInfoCard = styled.View`
  background-color: #29abe2;
  border-radius: 5px;
  padding: 10px;
  margin-top: 5px;
`;

export const ServiceInfoCardText = styled.Text`
  font-size: 12px;
  color: #fff;
  text-align: center;
  font-family: 'Poppins-Bold';
`;
