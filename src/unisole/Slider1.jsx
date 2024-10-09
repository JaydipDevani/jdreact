import { red } from '@mui/material/colors';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from 'components/ExampleCarouselImage';

const Slider1 = (props) => {
    let [index, setIndex] = useState(0);

    let handleSelect = (selectedIndex) => {
        console.log(selectedIndex);
        
        setIndex(selectedIndex);
    };
    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <ExampleCarouselImage text="First slide" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <ExampleCarouselImage text="Second slide" />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <ExampleCarouselImage text="Third slide" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className='position-relative'>
                <div className='w-100'>
                    <img src={props.sl1} className='w-100 h-auto' alt="" />
                </div>
                <div>
                    <button type="button" className="btn btn-light position-absolute  rounded-pill set-btn jost p-0">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default Slider1
