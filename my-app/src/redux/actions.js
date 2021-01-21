import { createAction } from '@reduxjs/toolkit';

// import shortid from 'shortid';

export const fetchContactRequest = createAction(
  'phonebook/fetchContactRequest',
);
export const fetchContactSuccess = createAction(
  'phonebook/fetchContactSuccess',
);
export const fetchContactError = createAction('phonebook/fetchContactError');

export const addContactRequest = createAction('phonebook/addContactRequest');
export const addContactSuccess = createAction('phonebook/addContactSuccess');
export const addContactError = createAction('phonebook/addContactError');

export const deleteContactRequest = createAction(
  'phonebook/deleteContactRequest',
);
export const deleteContactSuccess = createAction(
  'phonebook/deleteContactSuccess',
);
export const deleteContactError = createAction('phonebook/deleteContactError');
// export const addContact = (name, number) => dispatch => {
//   const contact = { name, number };

//   dispatch({ type: 'phonebook/addContactRequest' });

//   axios
//     .post('/contacts', contact)
//     .then(({ data }) =>
//       dispatch({ type: 'phonebook/addContactSuccess', payload: data }),
//     )
//     .catch(error =>
//       dispatch({ type: 'phonebook/addContactError', payload: error }),
//     );
// };

// export const addContact = createAction(
//   'phonebook/addContact',
//   (name, number) => ({
//     payload: {
//       id: shortid.generate(),
//       name,
//       number,
//     },
//   }),
// );

// export const deleteContact = createAction('phonebook/deleteContact');

export const changeFilter = createAction('phonebook/changeFilter');
