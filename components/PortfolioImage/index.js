import { Component } from 'preact';
import { Col, Image } from 'react-bootstrap'
import ImageLoader from 'react-imageloader'
import { FlipCard } from 'react-flop-card';

const PortfolioImage = class PortfolioImage extends Component {
  constructor() {
    super()

    this.state = {
      staticImage: undefined,
      animatedImage: undefined,
      flipped: false,
      height: window.innerWidth / 4
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);

    this.setState({staticImage: this.props.image[1]}, () => {
      this.props.image[0].then(animatedImg => {
        this.setState({animatedImage: animatedImg})
      })
    })
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions = () => {
    this.setState({height: window.innerHeight > window.innerWidth ? window.innerHeight / 3 : window.innerHeight / 4})
  }

  onCardClicked = () => {
    this.setState(prevState => {
      return {flipped: !prevState.flipped}
    })
  }

  onMouseOut = () => {
    this.setState({flipped: false})
  }

  render() {
    const frontOfCard = (
      <div>
        <ImageLoader
          preloader={() => <img src={this.state.staticImage || this.props.placeholder} />}
          class="portfolio-image"
          src={this.state.animatedImage || this.state.staticImage}
        >
          Image load failed!
        </ImageLoader>
        <a href={this.props.image[2]} target="_blank" />
      </div>
    )

    const backOfCard = <div>text</div>

    return (
      <Col sm={4} md={4}>
        <div class="box">
          <FlipCard
            flipped={ this.state.flipped }
            onClick={ this.onCardClicked }
            onMouseOut={ this.onMouseOut }
            frontChild={ frontOfCard }
            backChild={ backOfCard }
            width="100%"
            height={this.state.height}
          />
        </div>
      </Col>
    )
  }
}

export default PortfolioImage;
