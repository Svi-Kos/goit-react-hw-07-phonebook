import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

export const addContact = createAction(
  'phonebook/addContact',
  (name, number) => ({
    payload: {
      id: shortid.generate(),
      name,
      number,
    },
  }),
);

export const deleteContact = createAction('phonebook/deleteContact');

export const changeFilter = createAction('phonebook/changeFilter');
