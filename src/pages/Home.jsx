import BesrSellers from "../components/bestseller";
import Header from "../components/Header";
import LatestCollection from "../components/LatestCollections";
import OurPolicy from "../components/ourpolicy";
import Sub from "../components/subscribe";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <LatestCollection />
      <BesrSellers />
      <OurPolicy />
      <Sub />
    </div>
  );
}
