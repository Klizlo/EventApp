import Carousel from "react-material-ui-carousel";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import CarouselItem from "./CarouselItem";

const HomeCarousel = () => {

    var items = [
        {
            name: "Dziunia",
            url: "/assets/dziunia.jpg"
        },
        {
            name: "Sluchaj ropuch",
            url: "/assets/sluchaj_ropuch.jpg"
        }
    ]

    return (
        <Carousel
            animation="slide"
            navButtonsAlwaysVisible="true"
            NextIcon={<NavigateNextIcon />}
            PrevIcon={<NavigateBeforeIcon />}
            duration={2000}
            interval={8000}
            fullHeightHover={false}
        >
            { items.map((item, i) => <CarouselItem key={i} item={item} />) }
        </Carousel>
    );
}

export default HomeCarousel;