import * as React from 'react';
import './index.scss';
import { Header, Content } from '..';

class HomePage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Content />
      </>
    );
  }
}

export default HomePage;
