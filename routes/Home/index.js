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

  showPortfolioAndHeader = () => {
    this.setState({auxillarySectionsHidden: false})
    this.props.onIntroTypingDone()
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
        <Intro
          tightenUpTopPadding={!this.state.auxillarySectionsHidden}
          onTypingDone={this.showPortfolioAndHeader}
        />
        <CSSTransitionGroup
          transitionAppear={true}
          transitionEnter={true}
          transitionLeave={false}
          transitionName={{
            enter: style['auxillary-sections-enter'],
            enterActive: style['auxillary-sections-enter-active'],
            appear: style['auxillary-sections-enter'],
            appearActive: style['auxillary-sections-enter-active']
          }}
          transitionEnterTimeout={7500}
          transitionAppearTimeout={7500}
        >
          {!auxillarySectionsHidden && auxillarySections}
        </CSSTransitionGroup>
			</div>
		);
	}
}
