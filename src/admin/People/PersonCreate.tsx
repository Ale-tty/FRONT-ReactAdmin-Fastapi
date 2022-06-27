import React, { FC } from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  required,
  email
  // PasswordInput,
  // BooleanInput,
} from 'react-admin';

export const PeopleCreate: FC = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput validate={[required(), email()]} source="email" />
      <TextInput validate={[required()]} source="name" />
    </SimpleForm>
  </Create>
);
