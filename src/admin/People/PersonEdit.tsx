import React, { FC } from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  required,
  email
  // PasswordInput,
  // BooleanInput,
} from 'react-admin';

export const PeopleEdit: FC = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput validate={[required(), email()]} source="email" />
      <TextInput validate={[required()]} source="name" />
    </SimpleForm>
  </Edit>
);
