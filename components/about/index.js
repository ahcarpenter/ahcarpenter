import Col from 'react-bootstrap/lib/Col'
import Row from 'react-bootstrap/lib/Row'
import Image from 'react-bootstrap/lib/Image'
import ProgressBar from 'react-bootstrap/lib/ProgressBar'
import ProfilePic from './profile.jpg'
import style from './style'

const About = ({ hidden }) => (
  <section hidden={hidden} id="about" class="section">
    <div class="container">
      <Row>
        <Col sm={12}>
          <h2 class="heading">About me</h2>
        </Col>
        <Col sm={12}>
          <Row>
            <Col sm={6} class="text-left">
              <p>Born and raised in Lexington, KY on <strong>LEGOS, bourbon, a love of math, and desire to have the greastest possible positive impact</strong>, computer science seemed like a natural fit going into university.</p>
              <p><img src={ProfilePic} alt="This is me" class="image img-circle img-responsive" /></p>
            </Col>
            <Col sm={6}>
              <p> Today, I've built out <strong><a href="https://rubygems.org/profiles/ahcarpenter">gems</a> with a combined download count of around 72,000</strong>, had my <strong><a href="http://goo.gl/2uv8V">work highlighted at the 2012 Code for America Summit</a></strong>, been <strong>nominated for a 2013 Code for America Fellowship</strong>, and gained <strong>experience with over 16 different languages, working within all three families</strong>. Secondarily, if you are into ping pong, we may just have a game 😜.</p>
              <h3 class={`progress-title ${style.header}`}>Primary Areas Of Expertise</h3>
              <div class="skill-item">
                <div class="progress-title">Ruby</div>
                <div class="progress">
                  <ProgressBar label={8} now={8} min={0} max={10} class="progress-bar-skill5" />
                </div>
              </div>
              <div class="skill-item">
                <div class="progress-title">SQL</div>
                <div class="progress">
                  <ProgressBar label={7} now={7} min={0} max={10} class="progress-bar-skill4" />
                </div>
              </div>
              <div class="skill-item">
                <div class="progress-title">HTML5/CSS3</div>
                <div class="progress">
                  <ProgressBar label={7} now={7} min={0} max={10} class="progress-bar-skill4" />
                </div>
              </div>
              <div class="skill-item">
                <div class="progress-title">JavaScript</div>
                <div class="progress">
                  <ProgressBar label={6} now={6} min={0} max={10} class="progress-bar-skill3" />
                </div>
              </div>
              <div class="skill-item">
                <div class="progress-title">Web Applications</div>
                <div class="progress">
                  <ProgressBar label={7} now={7} min={0} max={10} class="progress-bar-skill4" />
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col sm={6} smOffset={3} md={4} mdOffset={4} class="mt-big" />
      </Row>
    </div>
  </section>
);

export default About;
