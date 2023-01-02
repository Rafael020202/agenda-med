import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #29abe2;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
  padding: 20px;
`;

export const LocationArea = styled.View`
  background-color: #ffffff;

  height: 60px;

  border-radius: 15px;

  flex-direction: row;
  align-items: center;

  padding-left: 20px;
  padding-right: 20px;

  margin-top: 30px;
`;

export const LocationInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  font-family: 'Poppins-Regular';
  color: #626262;
`;

export const LocationFinder = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
`;

export const ListArea = styled.View`
  margin-top: 10px;
  margin-bottom: 30px;
`;
