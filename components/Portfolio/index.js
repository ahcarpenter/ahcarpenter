import { Col, Row } from 'react-bootstrap'
import PortfolioImage from '../PortfolioImage';
import Placeholder from '../Portfolio/images/placeholder-355x200.png'

const images = [
  [import('../Portfolio/images/howmanypages.gif'), require('../Portfolio/images/howmanypages-static.png'), 'https://howmanypages.herokuapp.com'],
  [import('../Portfolio/images/trumptales.gif'), require('../Portfolio/images/trumptales-static.png'), 'https://trump-tales.herokuapp.com'],
  [import('../Portfolio/images/gastro-gnomes-staging.gif'), require('../Portfolio/images/gastro-gnomes-staging-static.png'), 'https://gastro-gnomes-staging.herokuapp.com'],
  [import('../Portfolio/images/conduit.gif'), require('../Portfolio/images/conduit-static.png'), 'https://github.com/ahcarpenter/rails-realworld-example-app'],
  [import('../Portfolio/images/crowdfinder.gif'), require('../Portfolio/images/crowdfinder-static.png'), 'https://crowdfinder.herokuapp.com'],
  [import('../Portfolio/images/adoptahydrantsyracuse.gif'), require('../Portfolio/images/adoptahydrantsyracuse-static.png'), 'https://adopt-a-hydrant-syracuse.herokuapp.com']
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
