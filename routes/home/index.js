import { Component } from 'preact';
import style from './style';
import Intro from '../../components/Intro'
import Portfolio from '../../components/Portfolio'
import About from '../../components/About'
import CSSTransitionGroup from 'preact-css-transition-group';
import Waypoint from 'react-waypoint';
import Footer from '../../components/Footer';

export default class Home extends Component {
  constructor() {
    super()

    this.state = {
      auxillarySectionsHidden: true,
      aboutHidden: true
    }
  }

  showPortfolio = () => {
    this.setState({auxillarySectionsHidden: false})
  }

  onAboutEnteredViewport = () => {
    this.setState({aboutHidden: false})
  }

	render(_, { auxillarySectionsHidden, aboutHidden }) {
    const auxillarySections = aboutHidden ? [
        <Portfolio key={0} />,
        <Waypoint onEnter={this.onAboutEnteredViewport}>
          <div id="about-and-footer-sections-placeholder"></div>
        </Waypoint>
      ] : [
        <Portfolio key={0} />,
        <About key={1} />,
        <Footer key={2} />
      ]
    return (
			<div class={style.home}>
        <Intro onTypingDone={this.showPortfolio} />
        <CSSTransitionGroup
          transitionEnter={true}
          transitionName={{
            enter: style['auxillary-sections-enter'],
            enterActive: style['auxillary-sections-enter-active']
          }}
          transitionEnterTimeout={750}>
          {!auxillarySectionsHidden && auxillarySections}
        </CSSTransitionGroup>
			</div>
		);
	}
}
