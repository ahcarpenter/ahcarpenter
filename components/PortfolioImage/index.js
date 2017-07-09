import { Component } from 'preact';
import { Col, Image } from 'react-bootstrap'
import ImageLoader from 'react-imageloader'

const PortfolioImage = class PortfolioImage extends Component {
  constructor() {
    super()

    this.state = {
      staticImage: undefined,
      animatedImage: undefined
    }
  }

  componentDidMount() {
    this.setState({staticImage: this.props.image[1]}, () => {
      this.props.image[0].then(animatedImg => {
        this.setState({animatedImage: animatedImg})
      })
    })
  }

  render() {
    return (
      <Col sm={4} md={4}>
        <div class="box">
          <a href={this.props.image[2]} target="_blank">
            <ImageLoader
              preloader={() => <img src={this.state.staticImage || this.props.placeholder} />}
              class="portfolio-image"
              src={this.state.animatedImage || this.state.staticImage}
            >
              Image load failed!
            </ImageLoader>
          </a>
        </div>
      </Col>
    )
  }
}

export default PortfolioImage;
