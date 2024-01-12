import Carousel from "react-material-ui-carousel";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import CarouselItem from "./CarouselItem";

const HomeCarousel = ({events}) => {

    return (
        <Carousel
            animation="slide"
            navButtonsAlwaysVisible="true"
            NextIcon={<NavigateNextIcon/>}
            PrevIcon={<NavigateBeforeIcon/>}
            duration={2000}
            interval={8000}
            fullHeightHover={false}
        >
            {events.map((event, i) => <CarouselItem key={i} item={event}/>)}
        </Carousel>
    );
}

export default HomeCarousel;