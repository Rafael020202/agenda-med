import { ScrollView, Modal } from 'react-native';

import {
  ModalArea,
  ModalBody,
  ModalItem,
  CloseButtonArea,
  CloseButton,
  UserInfoArea,
  Avatar,
  UserName,
  ServiceInfoArea,
  ServiceInfoValue,
  DateInfo,
  DateItem,
  Day,
  Weekday,
  DateTitle,
  DateInfoNavButton,
  FinishButton,
  FinishButtonText,
  ScheduleItem,
  Hour,
  ScheduleList,
  ServiceInfoName,
  DateList,
} from './styles';

import NextIcon from '@/assets/nav_next.svg';
import PrevIcon from '@/assets/nav_prev.svg';
import ExpandIcon from '@/assets/expand.svg';
import React from 'react';

export type Props = {
  handleModalVisible: (visible: boolean) => void;
  visible: boolean;
};

export const AppointmentModal: React.FC<Props> = ({
  visible,
  handleModalVisible,
}) => {
  return (
    <Modal transparent={true} visible={visible} animationType="slide">
      <ModalArea>
        <ModalBody>
          <CloseButtonArea>
            <CloseButton onPress={() => handleModalVisible(false)}>
              <ExpandIcon width="50" height="50" fill="#ffffff" />
            </CloseButton>
          </CloseButtonArea>

          <ScrollView showsVerticalScrollIndicator={false}>
            <ModalItem>
              <UserInfoArea>
                <Avatar
                  source={{
                    uri: 'https://i0.wp.com/evanstonroundtable.com/wp-content/uploads/2022/05/Lushina-scaled-e1652827479814.jpg?resize=1200%2C900&ssl=1',
                  }}
                />
                <UserName>Daniela Corelli</UserName>
              </UserInfoArea>
            </ModalItem>

            <ModalItem>
              <ServiceInfoArea>
                <ServiceInfoName>Dermatologia</ServiceInfoName>
                <ServiceInfoValue>R$ 500,00</ServiceInfoValue>
              </ServiceInfoArea>
            </ModalItem>

            <ModalItem>
              <DateInfo>
                <DateInfoNavButton>
                  <PrevIcon width="50" height="50" fill="#000" />
                </DateInfoNavButton>

                <DateTitle>Agosto 2023</DateTitle>

                <DateInfoNavButton>
                  <NextIcon width="50" height="50" fill="#000" />
                </DateInfoNavButton>
              </DateInfo>

              <DateList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
                  (value, index) => (
                    <DateItem key={index}>
                      <Weekday>Seg</Weekday>
                      <Day>{value}</Day>
                    </DateItem>
                  )
                )}
              </DateList>
            </ModalItem>

            <ModalItem>
              <ScheduleList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {[
                  '13:00',
                  '14:00',
                  '15:00',
                  '16:00',
                  '17:00',
                  '18:00',
                  '19:00',
                  '20:00',
                  '21:00',
                  '22:00',
                  '12:00',
                  '13:00',
                  '14:00',
                  '15:00',
                ].map((value, index) => (
                  <ScheduleItem key={index}>
                    <Hour>{value}</Hour>
                  </ScheduleItem>
                ))}
              </ScheduleList>
            </ModalItem>

            <FinishButton>
              <FinishButtonText>Finalizar Agendamento</FinishButtonText>
            </FinishButton>
          </ScrollView>
        </ModalBody>
      </ModalArea>
    </Modal>
  );
};
