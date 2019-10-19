import React from 'react';
import PageContent from '../PageContent';

const About = () => (
  <PageContent narrow width="narrow">
    {/* <div className="about page-content" style={{ alignSelf: 'center', maxWidth: '33rem' }}> */}
    <h1>About this Site</h1>
    <p>Version V0.1</p>
    <p>
      A test gathering vehicle positions from several (~45)
      mobility service providers using open Apis
    </p>
    {/* </div> */}
  </PageContent>
);

export default About;
