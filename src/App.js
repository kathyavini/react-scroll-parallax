import './styles/App.css';
import {
  ParallaxProvider,
  Parallax,
  useParallaxController,
  ParallaxBanner,
} from 'react-scroll-parallax';
import images from './imageImport';
import Woodblocks from './components/Woodblocks';

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
        <Woodblocks />
      </div>
    </ParallaxProvider>
  );
}

export default App;
