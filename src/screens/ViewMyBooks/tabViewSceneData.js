import React from 'react';
import {HorizontalList} from '../../components';
import {MainContainer} from './style';

export const currentlyReadingRoute = () => {
  let data = [{}];

  return (
    <MainContainer>
      <HorizontalList data={data} />
    </MainContainer>
  );
};

export const didNotFinishedRoute = () => {
  let data = [
    {
      name: 'Book 4: Harry Potter and the Goblet of Fire',
    },
  ];

  return (
    <MainContainer>
      <HorizontalList data={data} />
    </MainContainer>
  );
};

export const readRoute = () => {
  let data = [
    {
      name: "Book 1: Harry Potter and the Sorcerer's Stone",
    },
    {
      name: 'Book 2: Harry Potter and the Chamber of Secrets',
    },
    {
      name: 'Book 3: Harry Potter and the Prisoner of Azkaban',
    },
  ];

  return (
    <MainContainer>
      <HorizontalList data={data} />
    </MainContainer>
  );
};

export const wantToReadRoute = () => {
  let data = [
    {
      name: 'Book 5: Harry Potter and the Order of the Phoenix',
    },
    {
      name: 'Book 6: Harry Potter and the Half-Blood Prince',
    },
    {
      name: 'Book 7: Harry Potter and the Deathly Hallows',
    },
  ];

  return (
    <MainContainer>
      <HorizontalList data={data} />
    </MainContainer>
  );
};
