import { Col, Row } from 'react-bootstrap'
import PortfolioImage from '../PortfolioImage';
import Placeholder from '../Portfolio/images/placeholder-355x200.png'

const images = [
  [import('./images/howmanypages-400px.gif'), require('./images/howmanypages-static.png'), 'https://howmanypages.herokuapp.com'],
  [import('./images/trumptales-400px.gif'), require('./images/trumptales-static.png'), 'https://trump-tales.herokuapp.com'],
  [import('./images/gastro-gnomes-staging-400px.gif'), require('./images/gastro-gnomes-staging-static.png'), 'https://gastro-gnomes-staging.herokuapp.com'],
  [import('./images/conduit-400px.gif'), require('./images/conduit-static.png'), 'https://github.com/ahcarpenter/rails-realworld-example-app'],
  [import('./images/crowdfinder-400px.gif'), require('./images/crowdfinder-static.png'), 'https://crowdfinder.herokuapp.com'],
  [import('./images/adoptahydrantsyracuse-400px.gif'), require('./images/adoptahydrantsyracuse-static.png'), 'https://adopt-a-hydrant-syracuse.herokuapp.com']
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
