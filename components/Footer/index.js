import { Col, Row } from 'react-bootstrap';

const Footer = () => (
	<footer class="footer">
    <div class="footer__copyright">
      <div class="container">
        <Row>
          <Col md="12" class="text-center">
            <small class="credit">With initial design inspiration for this style courtesy of <a href="https://bootstrapious.com/blog" class="external">Bootstrapious</a>, in part</small>
          </Col>
        </Row>
      </div>
    </div>
  </footer>
);

export default Footer;
