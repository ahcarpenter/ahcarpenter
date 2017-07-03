import { Col, Row, Image } from 'react-bootstrap'
import HowManyPagesScreenshot from './images/howmanypages.gif'
import TrumpTalesScreenshot from './images/trumptales.gif'
import GastroGnomesStagingScreenshot from './images/gastro-gnomes-staging.gif'
import ConduitScreenshot from './images/conduit.gif'
import CrowdFinderScreenshot from './images/crowdfinder.gif'
import AdoptaHydrantSyracuseScreenshot from './images/adoptahydrantsyracuse.gif'

const Portfolio = () => (
  <section id="portfolio" class="no-padding-bottom">
    <div class="container">
      <Row id="portfolio-heading-row">
        <Col md={12}>
          <h2 class="heading">Projects</h2>
          <p class="lead margin-bottom--big">Showcase of some of my more recent projects. Check out additional on <a href="https://github.com/ahcarpenter">GitHub</a>.</p>
        </Col>
      </Row>
    </div>
    <div class="container-fluid">
      <Row class="no-spaces">
        <ImageWithPlaceholder image={HowManyPagesScreenshot} />
        <ImageWithPlaceholder image={TrumpTalesScreenshot} />
        <ImageWithPlaceholder image={GastroGnomesStagingScreenshot} />
        <ImageWithPlaceholder image={ConduitScreenshot} />
        <ImageWithPlaceholder image={CrowdFinderScreenshot} />
        <ImageWithPlaceholder image={AdoptaHydrantSyracuseScreenshot} />
      </Row>
    </div>
  </section>
);

export default Portfolio;
