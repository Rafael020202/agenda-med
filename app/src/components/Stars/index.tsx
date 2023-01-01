import React from 'react';

import StarFull from '@/assets/star.svg';
import StarHalf from '@/assets/star_half.svg';
import StarEmpty from '@/assets/star_empty.svg';
import { StarArea, StarText, StarView } from './styles';

export const Stars = ({ stars, showNumber }) => {
  const s = [0, 0, 0, 0, 0];
  const floor = Math.floor(stars);
  const left = stars - floor;
  let i = 0;

  for (i; i < floor; i++) {
    s[i] = 1;
  }

  if (left > 0) {
    s[i] = 2;
  }

  return (
    <StarArea>
      {s.map((i, k) => (
        <StarView key={k}>
          {i === 0 && <StarEmpty width="18" height="18" fill="#FF9200" />}
          {i === 1 && <StarFull width="18" height="18" fill="#FF9200" />}
          {i === 2 && <StarHalf width="18" height="18" fill="#FF9200" />}
        </StarView>
      ))}

      {showNumber && <StarText>{stars}</StarText>}
    </StarArea>
  );
};
