import { Col, Row } from 'react-bootstrap'
import '../../node_modules/react-typist/dist/Typist.css'
import Typist from 'react-typist';

const Intro = (props) => (
  <section
    style={{'padding-top': props.tightenUpTopPadding ? '5px' : '90px'}}
    id="intro"
    class="text-intro no-padding-bottom"
  >
    <div class="container">
      <Row>
        <Col md={12} lg={10}>
          <h1>
            <Typist onTypingDone={props.onTypingDone} avgTypingDelay={45} cursor={{show: false}}>
              Hello.<br />I'm <span class="text-primary">Andrew Carpenter</span>, a software <span class="text-primary">engineer</span> living in Lexington, KY
            </Typist>
          </h1>
        </Col>
      </Row>
    </div>
  </section>
);

export default Intro;
