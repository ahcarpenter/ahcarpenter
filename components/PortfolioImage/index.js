import { Component } from 'preact';
import { Col, Image, Thumbnail, Tooltip, OverlayTrigger } from 'react-bootstrap'
import ImageLoader from 'react-imageloader'
import { FlipCard } from 'react-flop-card';
import style from './style'

const PortfolioImage = class PortfolioImage extends Component {
  constructor() {
    super()

    this.state = {
      staticImage: undefined,
      animatedImage: undefined,
      flipped: false,
      width: 355,
      flipCardHeight: 200
    }
  }

  componentDidMount() {
    this.updateDimensions()
    window.addEventListener("resize", this.updateDimensions);

    this.setState({staticImage: this.props.image[1]}, () => {
      this.updateDimensions()
      this.props.image[0].then(animatedImg => {
        this.setState({animatedImage: animatedImg})
      }, this.updateDimensions)
    })
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions = () => {
    const box = document.getElementsByClassName('box')[0]
    this.setState({width: box.offsetWidth, flipCardHeight: document.getElementsByClassName(this.props.image[2])[0].children[0].offsetHeight})
  }

  onCardClicked = (e) => {
    if(e.target.parentNode.href) {
      window.open(e.target.parentNode.href, '_blank')
    } else {
      this.setState(prevState => {
        return {flipped: !prevState.flipped}
      })
    }
  }

  render() {
    const FrontOfCard = (
      <div>
        <ImageLoader
          preloader={() => <img src={this.state.staticImage || this.props.placeholder} />}
          class={`portfolio-image ${this.props.image[2]} front-of-card`}
          src={this.state.animatedImage || this.state.staticImage}
          imgProps={{width: this.state.width}}
          onLoad={() => this.setState({flipCardHeight: document.getElementsByClassName(this.props.image[2])[0].children[0].offsetHeight})}
        >
          Image load failed!
        </ImageLoader>
      </div>
    )

    const BackOfCard = (
      <Thumbnail class={`portfolio-image ${style['card-back']} text-center`} href="#">
        <div class={`${style['thumbnail-links']}`}>
          {this.props.image[3] &&
            <a href={this.props.image[3]}>
              <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip"><strong>View On GitHub</strong></Tooltip>}>
                <i class="fa fa-2x fa-github" />
              </OverlayTrigger>
            </a>
          }
          {this.props.image[2] &&
            <a href={this.props.image[2]}>
              <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip"><strong>View Site</strong></Tooltip>}>
                <i class="fa fa-2x fa-link" />
              </OverlayTrigger>
            </a>
          }
        </div>
      </Thumbnail>
    )

    return (
      <Col sm={4} md={4}>
        <div id="project" class="box">
          <FlipCard
            flipped={ this.state.flipped }
            onClick={ this.onCardClicked }
            frontChild={ FrontOfCard }
            backChild={ BackOfCard }
            width={this.state.width}
            height={this.state.flipCardHeight}
          />
        </div>
      </Col>
    )
  }
}

export default PortfolioImage;
