import MyPhoto from "../MyPhoto.jpeg";

const Info = () => {
  return (
    <div className="info-header-content">
      <img
        src={MyPhoto}
        alt="profile-look"
        className="image-photo"
        
      />
      <section className="header-texts">
        <h1>Talius Dike</h1>
        <p className="header-paragraph-1">Frontend Developer</p>
        <p className="header-paragraph-2">www.taliusdike.com</p>
      </section>
      <section className="header-buttons">
        <button className="header-button-1">Email</button>
        <button className="header-button-2">LinkedIn</button>
      </section>
    </div>
  );
};

export default Info;
