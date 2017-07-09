import { Col, Row } from 'react-bootstrap'
import PortfolioImage from '../PortfolioImage';
import Placeholder from '../Portfolio/images/placeholder-355x200.png'

const images = [
  import('../Portfolio/images/howmanypages.gif'),
  import('../Portfolio/images/trumptales.gif'),
  import('../Portfolio/images/gastro-gnomes-staging.gif'),
  import('../Portfolio/images/conduit.gif'),
  import('../Portfolio/images/crowdfinder.gif'),
  import('../Portfolio/images/adoptahydrantsyracuse.gif')
]

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
        {images.map(Image => <PortfolioImage placeholder={Placeholder} image={Image} />)}
      </Row>
    </div>
  </section>
);

export default Portfolio;
