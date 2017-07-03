const PortfolioImage = ({ image }) => (
  <Col sm={4} md={4}>
    <div class="box">
      <Image src={image} alt={`${image} Screenshot`} responsive />
    </div>
  </Col>
)

export default PortfolioImage;
