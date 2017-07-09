import { Component } from 'preact';
import { Col, Image } from 'react-bootstrap'
import ImageLoader from 'react-imageloader'

const PortfolioImage = class PortfolioImage extends Component {
  constructor() {
    super()

    this.state = {
      image: undefined
    }
  }

  componentDidMount() {
    this.props.image.then(img => {
      this.setState({image: img})
    })
  }


  render() {
    return (
      <Col sm={4} md={4}>
        <div class="box">
          <ImageLoader
            preloader={() => <img src={this.props.placeholder} />}
            class="portfolio-image"
            src={this.state.image}
          >
            Image load failed!
          </ImageLoader>
        </div>
      </Col>
    )
  }
}

export default PortfolioImage;
