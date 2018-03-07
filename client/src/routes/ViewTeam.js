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

const ViewTeam = ({ match: { params } }) => (
  <AppLayout>
    <Sidebar currentTeamId={params.teamId} />
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

export default ViewTeam;
