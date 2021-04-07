import { forwardRef } from "@chakra-ui/system";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import styles from "./HeroCard.module.scss";

interface HeroCardProps {
  index: string;
  svgUrl: string;
  svgMask: string;
  onClick?: () => void;
}

const HeroCard = forwardRef((props: HeroCardProps, ref) => {
  const { index, svgUrl, svgMask, onClick } = props;

  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });

  const containerSvg = useRef<SVGSVGElement | null>(null);
  function getCoordinates(event: React.MouseEvent<SVGSVGElement, MouseEvent>) {
    // create point
    const pt = containerSvg.current && containerSvg.current.createSVGPoint();
    // update point with mouse coordinate
    pt.x = event.clientX;
    pt.y = event.clientY;

    const svgPnt = pt.matrixTransform(
      containerSvg.current.getScreenCTM().inverse()
    );

    setPos({
      x: svgPnt.x,
      y: svgPnt.y,
    });
  }

  const imageVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <motion.div
      variants={imageVariants}
      className={styles.card}
      onClick={onClick}
      ref={ref}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        preserveAspectRatio="xMidYMid meet"
        className={styles.styledSvg}
      >
        <rect width="100%" height="100%" fill="transparent"></rect>
        <image
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="100%"
          height="100%"
          xlinkHref={svgUrl}
          className={styles.styledImage}
        ></image>
      </svg>
      <svg
        ref={containerSvg}
        onMouseMove={(e) => {
          getCoordinates(e);
        }}
        preserveAspectRatio="xMidYMid meet"
        className={styles.styledSvg}
      >
        <defs>
          <clipPath id={`clip-0-${index}`}>
            <circle
              r="100"
              cx={pos.x}
              cy={pos.y}
              className={styles.styledCircle}
            ></circle>
          </clipPath>
        </defs>

        <g clipPath={`url(#clip-0-${index})`}>
          <rect width="100%" height="100%" fill="transparent" />
          <image
            height="100%"
            width="100%"
            xlinkHref={svgMask}
            className={styles.styledImage}
          />
        </g>
      </svg>
    </motion.div>
  );
});

export default HeroCard;
