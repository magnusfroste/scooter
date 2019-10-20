import React from 'react';
import PageContent from '../PageContent';

const About = () => (
  <PageContent narrow width="narrow">
    {/* <div className="about page-content" style={{ alignSelf: 'center', maxWidth: '33rem' }}> */}
    <h1>About</h1>
    <p>Version v0.1</p>
    <p>
      A simple example gathering vehicle positions from several (~45)
      mobility service providers (today scooters) using available open APIs.
    </p>
    {/* </div> */}
  </PageContent>
);

export default About;
