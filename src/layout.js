import React, { Component } from 'react';
import {
  Button,
  Box,
  Card,
  Header,
  Page,
  Sidebar
} from '@procore/core-react';

class Layout extends Component {
  render() 
  {
    return <Page>
      <Page.Main>
        <Page.ToolHeader>
          <Box style={{ backgroundColor: 'crimson', color: 'white' }} padding="md md">
            <Header.H1>Choose your Pokemon</Header.H1>
          </Box>
        </Page.ToolHeader>

        <Page.Filters>
          <Box style={{ backgroundColor: 'rebeccapurple', color: 'white', height: '38px' }}>
            Search & Filters
        </Box>
        </Page.Filters>

        <Page.Body>
          <Box padding="md" style={{ backgroundColor: 'aliceblue', color: 'gray', flex: 1 }}>
            Body
        </Box>
        </Page.Body>
      </Page.Main>

      <Page.Sidebar>
        <Sidebar.Panel>
          <Box margin="none lg sm lg">
            <Button variant="primary" size="block">
              View Team
          </Button>
          </Box>
        </Sidebar.Panel>
      </Page.Sidebar>
    </Page>
  }
}

export default Layout;