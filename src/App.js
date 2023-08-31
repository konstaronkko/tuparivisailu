
import React, { Component } from 'react';
import './app.scss';
import { Content, Theme } from '@carbon/react';
import { Route, Routes} from 'react-router-dom';


import SiteHeader from './components/SiteHeader';
import LandingPage from './content/LandingPage';
import ResultsPage from './content/ResultsPage';
import QuizPage from './content/QuizPage';
import ScorePage from './content/ScorePage';

class App extends Component {
  render() {
    return (
      <>
        <Theme theme="g100">
          <SiteHeader/>
        </Theme>
        <Content>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/results" element={<ResultsPage/>} />
            <Route path="/quiz" element={<QuizPage/>}/>
            <Route path="/score" element={<ScorePage/>}/>
          </Routes>
        </Content>
      </>
    );
  }
}

export default App;
