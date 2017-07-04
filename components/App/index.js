import Home from '../../routes/Home';
import Header from '../Header'
import CSSTransitionGroup from 'preact-css-transition-group';
import { Component } from 'preact';

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      headerHidden: true
    }
  }

  showHeader = () => {
    this.setState({headerHidden: false})
  }

  render() {
    return (
      <div id="app">
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
        <Home onIntroTypingDone={this.showHeader} />
      </div>
    )
  }
}
