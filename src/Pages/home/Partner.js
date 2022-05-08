import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const Partner = () => {
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };

    const items = [
        <div className="item" data-value="1">
            <img
                style={{ width: "100%", height: "150px", objectFit: "contain" }}
                src="uni.png"
                alt=""
            />
        </div>,
        <div className="item" data-value="2">
            <img
                style={{ width: "100%", height: "150px", objectFit: "contain" }}
                src="pusti.jpg"
                alt=""
            />
        </div>,
        <div className="item" data-value="3">
            <img
                style={{ width: "100%", height: "150px", objectFit: "contain" }}
                src="pran.svg"
                alt=""
            />
        </div>,
        <div className="item" data-value="4">
            <img
                style={{ width: "100%", height: "150px", objectFit: "contain" }}
                src="milk.png"
                alt=""
            />
        </div>,
        <div className="item" data-value="5">
            <img
                style={{ width: "100%", height: "150px", objectFit: "contain" }}
                src="pepsico.png"
                alt=""
            />
        </div>,
    ];
    return (
        <div className="container mx-auto w-full md:w-[80%]  p-2 ">
            <h1 className="text-center text-2xl font-bold m-5">Our Partners</h1>

            <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                controlsStrategy="alternate"
            />
        </div>
    );
};

export default Partner;
