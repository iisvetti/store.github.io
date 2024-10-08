import mainImg from "../images/main-flow.jpg";

export function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Home</h1>
      <img className="home-image" src={mainImg} alt="main-image" />
    </div>
  );
}
