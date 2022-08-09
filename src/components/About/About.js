import "./About.css";
import iconImage from "../../images/logo.jpg";

export const About = ({whiteMode}) => {
  return (
    <section className="container container-about">
      <div className="about-left">
        <span className="purple-text">
          ✋Jun Han Ng{" "}
          <span className="purple-smoke-text">- Introduction</span>{" "}
        </span>
        <p className="gray-text">
          Hello, My name is Jun Han and I enjoy the thrill of developing and bringing inspiring ideas into real products. I've been developing and 
          managing mainly web applications and software for over 2 years. I also do other non-web related projects to and I am always looking for new experiences.{" "}
        </p>
        <ul className="tech-stack">
          <li className="font-bold text-base">I have experience in :</li>
          <li>Full stack web development</li>
          <li>Infrastructure and DevOps</li>
          <li>Unix programming</li>
          <li>Graphical programming</li>
          <li>UI design</li>
          <li>Network / Net programming</li>
        </ul>
        <a target="blank" className="about-see no-underline my-2 max-w-fit" href="https://www.linkedin.com/in/jun-han-ng-252437248/"><button className={`transition ease-in-out duration-300 rounded px-4 py-2 my-2 ${whiteMode ? "bg-whiteSmokeBg hover:bg-black hover:text-white" : "bg-grayColor hover:bg-white hover:text-black"}`}>Connect with me</button></a>
      </div>
      <div className="about-right">
        <img src={iconImage} alt="" />
      </div>
    </section>
  );
};
