import React from "react";
import { Carousel } from "react-carousel-minimal";
const data = [
    {
        image: "https://i.ibb.co/rFkp6Rr/pexels-tiger-lily-4483775.jpg",
        caption: "",
    },
    {
        image: "https://i.ibb.co/XLYTDp9/pexels-pixabay-434311.jpg",
        caption: "",
    },
    {
        image: "https://i.ibb.co/rb4kRh8/pexels-lagos-food-bank-initiative-8069576.jpg",
        caption: "",
    },
];

const HomeCarousel = () => {
    return (
        <div style={{ textAlign: "center" }}>
            <div>
                <Carousel
                    data={data}
                    time={5000}
                    width="100%"
                    height="80vh"
                    radius="5px"
                    captionPosition="bottom"
                    automatic={true}
                    dots={true}
                    pauseIconColor="white"
                    pauseIconSize="40px"
                    slideBackgroundColor="darkgrey"
                    slideImageFit="cover"
                    // thumbnails={true}
                    thumbnailWidth="100px"
                    style={{
                        textAlign: "center",
                        maxWidth: "100%",
                        maxHeight: "80vh",
                        margin: "0 auto",
                    }}
                />
            </div>
        </div>
    );
};

export default HomeCarousel;
