import { AppointmentCard } from '@/components';
import { Container, ListArea, Scroller } from './styles';

const items = [
  {
    avatar:
      'https://i0.wp.com/evanstonroundtable.com/wp-content/uploads/2022/05/Lushina-scaled-e1652827479814.jpg?resize=1200%2C900&ssl=1',
    name: 'Estela francesco',
    stars: 4,
    specialty: 'oftamologista',
  },

  {
    avatar:
      'https://i0.wp.com/evanstonroundtable.com/wp-content/uploads/2022/05/Lushina-scaled-e1652827479814.jpg?resize=1200%2C900&ssl=1',
    name: 'Estela francesco',
    stars: 4,
    specialty: 'oftamologista',
  },

  {
    avatar:
      'https://i0.wp.com/evanstonroundtable.com/wp-content/uploads/2022/05/Lushina-scaled-e1652827479814.jpg?resize=1200%2C900&ssl=1',
    name: 'Estela francesco',
    stars: 4,
    specialty: 'oftamologista',
  },

  {
    avatar:
      'https://i0.wp.com/evanstonroundtable.com/wp-content/uploads/2022/05/Lushina-scaled-e1652827479814.jpg?resize=1200%2C900&ssl=1',
    name: 'Estela francesco',
    stars: 4,
    specialty: 'oftamologista',
  },

  {
    avatar:
      'https://i0.wp.com/evanstonroundtable.com/wp-content/uploads/2022/05/Lushina-scaled-e1652827479814.jpg?resize=1200%2C900&ssl=1',
    name: 'Estela francesco',
    stars: 4,
    specialty: 'oftamologista',
  },

  {
    avatar:
      'https://i0.wp.com/evanstonroundtable.com/wp-content/uploads/2022/05/Lushina-scaled-e1652827479814.jpg?resize=1200%2C900&ssl=1',
    name: 'Estela francesco',
    stars: 4,
    specialty: 'oftamologista',
  },
];

export const Appointments = () => {
  return (
    <Container>
      <Scroller>
        <ListArea>
          {items.map((item, index) => (
            <AppointmentCard data={item} key={index} />
          ))}
        </ListArea>
      </Scroller>
    </Container>
  );
};
