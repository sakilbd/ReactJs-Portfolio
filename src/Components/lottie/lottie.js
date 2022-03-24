import { useLottie } from "lottie-react";
import contactMe from "./react-logo1.json";

const Example = () => {
    const options = {
        animationData: contactMe,
        loop: true,
        autoplay: true,
    };

    const { View } = useLottie(options);

    return View;
};

export default Example;