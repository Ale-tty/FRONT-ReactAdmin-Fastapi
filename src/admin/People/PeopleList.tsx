// in src/users.js
import React, { FC } from 'react';
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton
  // BooleanField,
  // DeleteButton
} from 'react-admin';

export const PeopleList: FC = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <EmailField source="email" />
      <TextField source="name" />
      <EditButton />
      {/* <DeleteButton/> */}
    </Datagrid>
  </List>
);
