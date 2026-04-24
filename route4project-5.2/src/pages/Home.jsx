import Header from "../Header";
import News from "../newstemplate";
import Presentpic from "../assets/pfp.png";
function Home() {
  return (
    <>
      <Header title="Home Page"/>

      <div className="grid grid-cols-1 gap-4">
        <News
          cardHeadert=<strong> Hello there, and welcome... </strong>
          cardPict={Presentpic}
          cardBlurbt="...to my portfolio page!"
          
        />
      </div>
    </>
  );
}

export default Home;