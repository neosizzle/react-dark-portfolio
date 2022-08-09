import "./Mode.css";
import { RiSunFill } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";

export default function Mode({ handleModeChange }) {
  return (
    <section className=" container-mode">
      <div className="mode-left white-text">
        <ul>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li className="left-source">
            <a target="blank" href="https://github.com/neosizzle">
              <AiFillGithub className="source-icon" />
              Github
            </a>
            
          </li>

          <li>
            <a target="blank" href="/assets/resume.pdf" className="bg-slate-200 text-black px-4 rounded">CV</a>
          </li>
        </ul>
      </div>
      <button onClick={handleModeChange} className="container-icon">
        <RiSunFill className="mode-icon" />
      </button>
    </section>
  );
}
