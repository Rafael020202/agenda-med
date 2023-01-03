import styled from 'styled-components/native';

export const ModalArea = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const ModalBody = styled.View`
  flex: 1;
  background-color: #29abe2;
  max-height: 480px;
  padding: 15px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export const CloseButtonArea = styled.View`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;

export const CloseButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
`;

export const ModalItem = styled.View`
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
  margin-top: 15px;
`;

export const UserInfoArea = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 65px;
  height: 65px;

  border-radius: 20px;
`;

export const UserName = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 18px;

  margin-left: 10px;
`;

export const ServiceInfoArea = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 10px;
`;

export const ServiceInfoName = styled.Text`
  font-family: 'Poppins-Bold';
`;

export const ServiceInfoValue = styled.Text`
  font-family: 'Poppins-Bold';
`;

export const DateInfo = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const DateInfoNavButton = styled.TouchableOpacity``;

export const CalendarBody = styled.View``;

export const DateTitle = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 17px;
`;

export const Weekday = styled.Text`
  font-size: 14px;
  font-family: 'Poppins-Regular';
`;

export const DateList = styled.ScrollView`
  display: flex;
`;

export const DateItem = styled.TouchableOpacity`
  width: 40px;
  display: flex;
  align-items: center;
`;

export const Day = styled.Text`
  font-family: 'Poppins-Regular';
`;

export const ScheduleList = styled.ScrollView`
  display: flex;
  padding: 10px;
`;

export const ScheduleItem = styled.TouchableOpacity`
  width: 45px;
`;

export const Hour = styled.Text`
  font-family: 'Poppins-Regular';
`;

export const FinishButton = styled.TouchableOpacity`
  height: 60px;
  background-color: #36558c;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const FinishButtonText = styled.Text`
  font-size: 18px;
  font-family: 'Poppins-Regular';
  color: #fff;
`;
