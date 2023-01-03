import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #29abe2;
`;

export const ServiceDetailArea = styled.View`
  flex: 1;
  background-color: #fff;
  margin-top: 200px;
  border-top-left-radius: 50px;
  position: relative;
  padding: 15px;
`;

export const Avatar = styled.Image`
  width: 110px;
  height: 110px;
  border-radius: 20px;

  border: 2px solid #fff;
`;

export const UserInfoArea = styled.View`
  margin-top: -45px;
  margin-left: 10px;

  display: flex;
  flex-direction: row;
`;

export const UserInfo = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: flex-start;
  margin-left: 10px;
`;

export const UserName = styled.Text`
  font-size: 18px;
  font-family: 'Poppins-Bold';
`;

export const ServiceInfoArea = styled.View`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const ServiceInfo = styled.View`
  display: flex;
  margin-bottom: 10px;
`;

export const ServiceInfoLabel = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 16px;
`;

export const ServiceInfoDescription = styled.Text`
  font-size: 14px;
  font-family: 'Poppins-Regular';
`;

export const AppointmentButtonArea = styled.View`
  margin-top: auto;
  margin-bottom: 10px;
`;

export const AppointmentButton = styled.TouchableOpacity`
  height: 60px;
  background-color: #36558c;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const AppointmentButtonText = styled.Text`
  font-size: 16px;
  color: white;
`;

export const BackButton = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`;

export const Backdrop = styled.View`
  flex: 1;
  background-color: black;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 11;
  opacity: 0.5;
`;
