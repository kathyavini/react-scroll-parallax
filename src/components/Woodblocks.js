import {
  ParallaxProvider,
  Parallax,
  useParallaxController,
  ParallaxBanner,
} from 'react-scroll-parallax';
import images from '../imageImport';

export default function Woodblocks() {
  return (
    <>
      {/* <div className="space">
        <p className="text">Full width banners</p>
      </div>
      <ParallaxBanner
        className="banner"
        layers={[
          { image: images.bird1, speed: -30 },
          { image: images.bird2, speed: -20 },
          { image: images.bird3, speed: 10, scale: [1, 1.1] },
        ]}
      /> */}
      <div className="half-space"></div>
      <ParallaxBanner
        className="upright"
        layers={[
          { image: images.stork1, speed: -30 },
          { image: images.stork2, speed: -20, scale: [1.2, 1] },
          { image: images.stork3, speed: 5 },
        ]}
      />
      <div className="half-space"></div>

      {/* <div className="space">
        <p className="text">Small images</p>
      </div> */}
      <div className="landscape-container">
        <Parallax className="landscape">
          <img src={images.mountain1} />
        </Parallax>
        <Parallax
          className="landscape"
          translateY={['-20px', '-15px']}
          translateX={[-10, 5]}
        >
          <img src={images.mountain2} />
        </Parallax>
        <Parallax
          className="landscape"
          scale={[1, 1.2]}
          translateY={[0, 3]}
          translateX={[0, -4]}
        >
          <img src={images.mountain3} />
        </Parallax>
      </div>
      <div className="half-space"></div>

      <div className="landscape-container">
        <Parallax className="landscape bird" speed={0}>
          <img src={images.bird1} />
        </Parallax>
        <Parallax
          className="landscape bird"
          translateY={[1, -5]}
          scale={[1, 0.9]}
        >
          <img src={images.bird2} />
        </Parallax>
        <Parallax
          className="landscape bird"
          speed={5}
          scale={[1, 1.1]}
          translateY={[1, 5]}
          translateX={[0, -5]}
        >
          <img src={images.bird3} />
        </Parallax>
      </div>
      <div className="half-space"></div>

      <div className="portrait-container">
        <Parallax className="portrait stork" speed={0}>
          <img src={images.stork1} />
        </Parallax>
        <Parallax
          className="portrait stork"
          translateY={[0, -6]}
          translateX={[0, -3]}
          scale={[1, 1.1]}
        >
          <img src={images.stork2} />
        </Parallax>
        <Parallax
          className="portrait stork"
          speed={5}
          scale={[1, 1.2]}
          translateY={[0, 4]}
          translateX={[4, 2]}
        >
          <img src={images.stork3} />
        </Parallax>
      </div>
      <div className="half-space"></div>
    </>
  );
}
