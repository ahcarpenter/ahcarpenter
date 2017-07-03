import { Col, Row, Image } from 'react-bootstrap'
import HowManyPagesScreenshot from './images/howmanypages.gif'
import HowManyPagesStaticScreenshot from './images/howmanypages-static.gif'
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
        <Col sm={4} md={4}>
          <div class="box"><a href="https://howmanypages.herokuapp.com"><Image src={HowManyPagesScreenshot} alt="How Many Pages? Screenshot" responsive /></a></div>
        </Col>
        <Col sm={4} md={4}>
          <div class="box"><a href="https://trump-tales.herokuapp.com"><Image src={TrumpTalesScreenshot} alt="Trump Tales Screenshot" responsive /></a></div>
        </Col>
        <Col sm={4} md={4}>
          <div class="box"><a href="https://gastro-gnomes-staging.herokuapp.com"><Image src={GastroGnomesStagingScreenshot} alt="Gastro Gnomes Staging Screenshot" responsive /></a></div>
        </Col>
        <Col sm={4} md={4}>
          <div class="box"><a href="#"><Image src={ConduitScreenshot} alt="Conduit Screenshot" responsive /></a></div>
        </Col>
        <Col sm={4} md={4}>
          <div class="box"><a href="https://crowdfinder.herokuapp.com"><Image src={CrowdFinderScreenshot} alt="CrowdFinder Screenshot" responsive /></a></div>
        </Col>
        <Col sm={4} md={4}>
          <div class="box"><a href="https://adopt-a-hydrant-syracuse.herokuapp.com"><Image src={AdoptaHydrantSyracuseScreenshot} alt="Adopt-a-Hydrant Syracuse Screenshot" responsive /></a></div>
        </Col>
      </Row>
    </div>
  </section>
);

export default Portfolio;
