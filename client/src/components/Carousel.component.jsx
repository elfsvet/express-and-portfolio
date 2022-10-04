import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

function CarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='/images/bar_hop.gif'
          alt='First slide'
        />
        <Carousel.Caption
          style={{
            background: 'rgba(145, 144, 140,0.4)',
            borderRadius: '15px',
          }}
        >
          <h3 style={{ textShadow: '0 0 3px #000, 0 0 5px #000' }}>
            First slide label
          </h3>
          <p style={{ textShadow: '0 0 3px #000, 0 0 5px #000' }}>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='images/clothing_shop.gif'
          alt='Second slide'
        />

        <Carousel.Caption
          style={{
            background: 'rgba(145, 144, 140,0.4)',
            borderRadius: '15px',
          }}
        >
          <h3 style={{ textShadow: '0 0 3px #000, 0 0 5px #000' }}>
            Second slide label
          </h3>
          <p style={{ textShadow: '0 0 3px #000, 0 0 5px #000' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='images/shopp.gif'
          alt='Third slide'
        />

        <Carousel.Caption
          style={{
            background: 'rgba(145, 144, 140,0.4)',
            borderRadius: '15px',
          }}
        >
          <h3
            style={{ textShadow: '0 0 3px #000, 0 0 5px #000' }}
            as={Link}
            to='/git'
          >
            Third slide label
          </h3>
          <p style={{ textShadow: '0 0 3px #000, 0 0 5px #000' }}>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
