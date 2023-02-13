import { useLottie } from "lottie-react";
import contactMe from "./header-lottie.json";


const HeaderLottie = () => {
    const options = {
        animationData: contactMe,
        loop: true,
        autoplay: true,
    };

    const { View } = useLottie(options);

    return View;
};

export default HeaderLottie;