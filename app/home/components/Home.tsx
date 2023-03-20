import HomeBanner from './HomeBanner';
import HomeTools from './HomeTools';
import HomeIntro from './HomeIntro';

export default function Home() {
  return (
    <div className="home container">
      <HomeBanner />
      <HomeTools />
      <HomeIntro />
    </div>
  );
}
