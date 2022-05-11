import logo from './logo.svg';
import './App.css';
import {
  ParallaxProvider,
  Parallax,
  useParallaxController,
  ParallaxBanner,
} from 'react-scroll-parallax';
import images from './imageImport';

function Image({ source }) {
  console.log(source);
  const parallaxController = useParallaxController();

  return <img src={source} onLoad={() => parallaxController.update()} />;
}

function App() {
  const styles = (index) => ({
    zIndex: { index },
  });

  return (
    <ParallaxProvider>
      <div className="App">
        <div className="space">
          <p className="text">Hello.</p>
        </div>
        <ParallaxBanner
          className="banner"
          layers={[
            { image: images.hills1, speed: -30 },
            { image: images.hills2, speed: -20 },
            { image: images.hills3, speed: -10 },
            {
              speed: -11,
              children: (
                <div className="banner-text">
                  <p className="text">Here is some parallax</p>
                </div>
              ),
            },
            { image: images.hills4, speed: -12 },
            { image: images.hills5, speed: -7 },
            { image: images.hills6, speed: -4 },
          ]}
        />
        <div className="space">
          <p className="text">Full width banners</p>
        </div>
        <ParallaxBanner
          className="full-size"
          layers={[
            { image: images.mountain1, speed: -30 },
            {
              image: images.mountain2,
              speed: -30,
            },
            { image: images.mountain3, speed: -10 },
          ]}
        />
        <div className="space"></div>
        <ParallaxBanner
          className="full-size"
          layers={[
            { image: images.bird1, speed: -30 },
            { image: images.bird2, speed: -20 },
            { image: images.bird3, speed: -10 },
          ]}
        />
        <div className="space"></div>
        <ParallaxBanner
          className="upright"
          layers={[
            { image: images.stork1, speed: -30 },
            { image: images.stork2, speed: -20 },
            { image: images.stork3, speed: -10 },
          ]}
        />
        <div className="space">
          <p className="text"></p>
        </div>

        <div className="space">
          <p className="text">Small images</p>
        </div>
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
      </div>
    </ParallaxProvider>
  );
}

export default App;
