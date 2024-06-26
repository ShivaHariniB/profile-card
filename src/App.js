import "./App.css";
const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    backgroundColor: "blue",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    backgroundColor: "yellow",
  },
  {
    skill: "Web Design",
    level: "advanced",
    backgroundColor: "grey",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    backgroundColor: "orange",
  },
  {
    skill: "React",
    level: "advanced",
    backgroundColor: "cyan",
  },
  {
    skill: "Svelte",
    level: "beginner",
    backgroundColor: "red",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Data />
        <div className="skill">
          <Skill />
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src=".\margherita.jpg" alt="Avatar"></img>;
}
function Data() {
  return (
    <p>
      Full-stack web developer and teacher at Udemy.When not coding or preparing
      a course , I like to play board games, to cook (and eat) , or to just
      enjoy the Portugese sun at the beach.
    </p>
  );
}

function Skill() {
  const skillCount = skills.length;
  return (
    <>
      {skillCount > 0 ? (
        <div className="skill-list">
          {skills.map((skill) => (
            <SkillList
              skill={skill.skill}
              color={skill.backgroundColor}
              level={skill.level}
            />
          ))}
        </div>
      ) : (
        <p>There's no current skills as of now</p>
      )}
    </>
  );
}

function SkillList({ skill, color, level }) {
  return (
    <div className="skill" style={{ background: color }}>
      <span>{skill}</span>
      <span>
        {level === "advanced" ? "💪" : level === "intermediate" ? "👍" : "👶"}
      </span>
    </div>
  );
}
export default App;
