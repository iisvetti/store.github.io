import mainImg from "../images/about-flow.jpg";

export function About() {
  return (
    <>
      <h1 className="about-title">About</h1>
      <div className="about-container">
        <p className="about">
          This is a great space to write a long text about your company and your
          services. You can use this space to go into a little more detail about
          your company. Talk about your team and what services you provide.
          <br />
          Delivering fresh flowers since 2035
        </p>
        <img src={mainImg} alt="main-image" className="about-img" />
      </div>
    </>
  );
}
