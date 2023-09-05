import React from 'react';
import { Button, Grid, Column} from '@carbon/react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <Grid className="landing-page">
      <Column lg={16} md={8} sm={4} className="landing-page__banner">
        <h1 className="landing-page__header"> Tervetuloa IBM:n tupareiden tietokilpailuun!</h1>
        <div className="landing-page__description">Osallistu kilpailuun ja voita muiden vieraiden kunnioituksen lisäksi upeita palkintoja! Päivän paras tulos palkitaan, lisäksi osallistuneiden kesken arvotaan toinen palkinto.</div>
      </Column>
      <Column lg={16} md={8} sm={4} className="landing-page__r2">
        <Grid className="tabs-group-content">
          <Column md={4} lg={7} sm={4} className="landing-page_quiz">
            <Button as={Link} to="/quiz">Kilpailuun</Button>
          </Column>
        </Grid>
      </Column>
    </Grid>
  )};

export default LandingPage;