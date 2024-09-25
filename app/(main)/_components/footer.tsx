import StarsCanvas from "./canvas/start-canvas";
import EarthCanvas from "./canvas/earth-canvas";
import Record from "./record";

const Footer = () => {
    return (
        <div className="relative z-0'">
            <EarthCanvas />
            <StarsCanvas />
            <Record />
        </div>
    );
};

export default Footer;
