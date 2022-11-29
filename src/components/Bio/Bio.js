import "./Bio.css";

export const Bio = () => {
  const bios = [
    {
      date: "2020",
      description: " 📚 9As SPM Graduate@Smk Seksyen 4 Bandar Kinrara",
    },
    {
      date: "2020 - 2022",
      description: " 💻 Software developer @DAPPNOLOGY MALAYSIA SDN BHD",
    },
    {
      date: "2021 - Present",
      description: " 📚 Core Programme Completionist @42 Kuala Lumpur",
    },
    {
      date: "2022 - Present",
      description: " 💻 Software developer @LS Machinery",
    },
    
  ];

  return (
    <section className="container container-lines">
      <p className="gray-text">
        📚 <span className="font-bold gray-smoke-text">Acedemics and Experiences</span>{" "}
      </p>
      <div className="line"></div>
      {bios.map((e) => (
        <div key={e.year} className="lines-items">
          <span className="white-text">{e.date}: </span>
          {""}
          <span className="gray-text" data-tip="React-tooltip">
            {e.description}
          </span>
          {/* <ReactTooltip place="top" effects="float" className="custom-theme">
            <BioDetails />
          </ReactTooltip> */}
          <div className="line"></div>
        </div>
      ))}
    </section>
  );
};

//Disable Spanish Spell Checker Dictionary in Workspace
