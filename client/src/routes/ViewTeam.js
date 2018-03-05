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
import SendMessage from '../components/SendMessage';

export default () => (
  <AppLayout>
    <Teams teams={[{ id: 1, letter: 'T' }, { id: 2, letter: 'B' }]} />
    <Channels
      teamName="Team name"
      username="Username"
      channels={[{ id: 1, name: 'general' }, { id: 2, name: 'random' }]}
      users={[{ id: 1, name: 'slackbot' }, { id: 2, name: 'user1' }]}
    />
    <Header channelName="general" />
    <Messages>
      <ul className="message-list">
        <li />
        <li />
      </ul>
    </Messages>
    <SendMessage channelName="general" />
  </AppLayout>
);
