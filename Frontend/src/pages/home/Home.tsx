import Banner from '../../components/banner/Banner';
import Feature from '../../components/feature/Feature';
import dataFeatures from '../../assets/data/features.json';
import "./home.scss";

const Home = () => {

  return (
    <main className="main">
        <Banner />
        <div className="features">
            {dataFeatures.map((feature, index) => (
                <Feature 
                  key={index} 
                  icon={feature.icon} 
                  alt={feature.icon_alt} 
                  title={feature.title} 
                  text={feature.text} />
            ))}
        </div>
    </main>
  );
};

export default Home;