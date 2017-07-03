import { Component } from 'preact';
import style from './style';
import Intro from '../../components/intro'
import Portfolio from '../../components/portfolio'
import About from '../../components/about'
import CSSTransitionGroup from 'preact-css-transition-group';
import Waypoint from 'react-waypoint';

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
    const auxillarySections = aboutHidden ?
      [<Portfolio key={0} />,
       <Waypoint onEnter={this.onAboutEnteredViewport}>
        <div><About hidden={aboutHidden} /></div>
       </Waypoint>
      ] :
      [<Portfolio key={0} />,
       <About key={1} />]
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
