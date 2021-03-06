import { Component } from 'preact';
import style from './style';
import Intro from '../../components/Intro'
import Portfolio from 'async!../../components/Portfolio'
import About from 'async!../../components/About'
import CSSTransitionGroup from 'async!preact-css-transition-group';
import Waypoint from 'async!react-waypoint';
import Footer from 'async!../../components/Footer';

export default class Home extends Component {
  constructor() {
    super()

    this.state = {
      auxillarySectionsHidden: true,
      aboutHidden: true
    }
  }

  componentDidMount() {
    this.props.onMounted()
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
			<div class={style.home} rel="prefetch">
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
