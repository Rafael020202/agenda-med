import { Container, Scroller } from './styles';
import { Card } from '@/components';

import {
  LocationArea,
  LocationInput,
  LocationFinder,
  ListArea,
} from './styles';
import MyLocationIcon from '@/assets/my_location.svg';

const items = [
  {
    avatar:
      'https://i0.wp.com/evanstonroundtable.com/wp-content/uploads/2022/05/Lushina-scaled-e1652827479814.jpg?resize=1200%2C900&ssl=1',
    name: 'Estela francesco',
    stars: 4,
    specialty: 'oftamologista',
  },
];

export const Search = () => {
  return (
    <Container>
      <Scroller>
        <LocationArea>
          <LocationInput
            placeholder="Onde você está?"
            placeholderTextColor="#29abe2"
          />

          <LocationFinder>
            <MyLocationIcon width="24" height="24" fill="#29abe2" />
          </LocationFinder>
        </LocationArea>

        <ListArea>
          {items.map((item, index) => (
            <Card data={item} key={index} />
          ))}
        </ListArea>
      </Scroller>
    </Container>
  );
};
