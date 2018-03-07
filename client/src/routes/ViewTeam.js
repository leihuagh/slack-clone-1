import React from 'react';
// import { extendObservable } from 'mobx';
// import { observer } from 'mobx-react';
// import { Message, Form, Container, Header, Input, Button } from 'semantic-ui-react';
// import { graphql } from 'react-apollo';
// import gql from 'graphql-tag';

import AppLayout from '../components/AppLayout';
import Header from '../components/Header';
import Messages from '../components/Messages';
import SendMessage from '../components/SendMessage';
import Sidebar from '../containers/Sidebar';

export default () => (
  <AppLayout>
    <Sidebar currentTeamId={1} />
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
