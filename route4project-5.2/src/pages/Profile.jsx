import Header from "../Header";
import Showcase from "../link";
import Presentpic from "../assets/pfp.png";
function Profile() {
  return (
    <>
      <Header title="Welcome to my app!" subtitle="This is the update page for my project!" />

      <div className="grid grid-cols-1 gap-4">
        <Showcase
          cardHeadert=<strong> Link to App...</strong>
          cardPict={Presentpic}
          cardBlurbt="By clicking on the button below, a tab will open that will showcase the app and it's progress. If the app doesn't load, then the server needs to be reset from both ends."
          
        />
      </div>
    </>
  );
}

export default Profile;