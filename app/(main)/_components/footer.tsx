import StarsCanvas from "./canvas/start-canvas";
import EarthCanvas from "./canvas/earth-canvas";

const Footer = () => {
    return (
        <div className="relative z-0'">
            <EarthCanvas />
            <StarsCanvas />
        </div>
    );
};

export default Footer;
