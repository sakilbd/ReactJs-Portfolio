import { useLottie } from "lottie-react";
import contactMe from "./header-lottie.json";
import peripheral from "./2022-06-30 16-45-34.json";

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