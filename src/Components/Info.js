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
        {/* <p className="header-paragraph-2">www.taliusdike.com</p> */}
        <a href="www.taliusdike.disha.page" className="header-paragraph-2">www.taliusdike.com</a>
      </section>
      <section className="header-buttons">
        <a href="mailto:ebeledikea@gmail.com"> <button className="header-button-1">Email</button></a>
        <a href="www.linkedin.com/in/taliusdike"> <button className="header-button-2">LinkedIn</button></a>
      </section>
    </div>
  );
};

export default Info;
