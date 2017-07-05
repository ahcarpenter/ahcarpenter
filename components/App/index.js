import Home from '../../routes/Home';
import Header from '../Header'
import CSSTransitionGroup from 'preact-css-transition-group';
import { Component } from 'preact';
import { ClipLoader } from 'halogen'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      headerHidden: true,
      homeLoading: true
    }
  }

  showHeader = () => {
    this.setState({headerHidden: false})
  }

  homeMounted = () => {
    this.setState({homeLoading: false})
  }

  render() {
    return (
      <div id="app">
        <ClipLoader
          hidden={!this.state.homeLoading}
          class={!this.state.homeLoading ? 'hidden' : 'loader'}
          color="black"
          size="48px"
          margin="4px"
        />
        <CSSTransitionGroup
          transitionEnter={true}
          transitionLeave={false}
          transitionName={{
            enter: 'header-enter',
            enterActive: 'header-enter-active'
          }}
          transitionEnterTimeout={7500}
        >
          {!this.state.headerHidden && <Header key={0} />}
        </CSSTransitionGroup>
        <Home onIntroTypingDone={this.showHeader} onMounted={this.homeMounted} />
      </div>
    )
  }
}
