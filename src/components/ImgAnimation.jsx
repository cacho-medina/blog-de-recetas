import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import arroz from "../assets/arroz.png";
import burger from "../assets/burger.png";
import pizza from "../assets/pizza.png";
import sushi from "../assets/sushi.png";

const foodImg = [arroz, burger, pizza, sushi];

function ImgAnimation() {
    const [currentImg, setCurrentImg] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImg((prev) => {
                return (prev + 1) % foodImg.length;
            });
        }, 2000);

        return () => {
            clearInterval(interval);
        };
    });

    return (
        <div className="img-container">
            <motion.img
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                key={currentImg}
                src={foodImg[currentImg]}
                alt="imagenes de comida"
            ></motion.img>
        </div>
    );
}

export default ImgAnimation;
