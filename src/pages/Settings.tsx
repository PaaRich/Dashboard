import ProfilePictureUpload from "../components/ProfilePic";
const Settings = () => {
  return (
    <div>
      <div className="max-w-[80%] mx-auto py-5">
        <h1 className="text-xl font-semibold">Account</h1>
        <div>
          <ProfilePictureUpload />
        </div>
      </div>
    </div>
  );
};

export default Settings;
