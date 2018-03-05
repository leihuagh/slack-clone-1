import React from 'react';
// import { extendObservable } from 'mobx';
// import { observer } from 'mobx-react';
// import { Message, Form, Container, Header, Input, Button } from 'semantic-ui-react';
// import { graphql } from 'react-apollo';
// import gql from 'graphql-tag';

import AppLayout from '../components/AppLayout';
import Channels from '../components/Channels';
import Teams from '../components/Teams';
import Header from '../components/Header';
import Messages from '../components/Messages';
import Input from '../components/Input';

export default () => (
  <AppLayout>
    <Teams>Teams</Teams>
    <Channels>Channels</Channels>
    <Header>Header</Header>
    <Messages>
      <ul className="message-list">
        <li />
        <li />
      </ul>
    </Messages>
    <Input>
      <input type="text" placeholder="CSS Grid Layout Module" />
    </Input>
  </AppLayout>
);
