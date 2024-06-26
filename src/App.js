import "./App.css";

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
  const skills = [
    {
      skill: "HTML+CSS",
      backgroundColor: "blue",
      emoji: "💪",
      emoji_label: "strong",
    },
    {
      skill: "JavaScript",
      backgroundColor: "yellow",
      emoji: "💪",
      emoji_label: "thumbs-up",
    },
    {
      skill: "Web Design",
      backgroundColor: "grey",
      emoji: "💪",
      emoji_label: "strong",
    },
    {
      skill: "Git and GitHub",
      backgroundColor: "orange",
      emoji: "👍",
      emoji_label: "thumbs-up",
    },
    {
      skill: "React",
      backgroundColor: "cyan",
      emoji: "💪",
      emoji_label: "strong",
    },
    {
      skill: "Svelte",
      backgroundColor: "red",
      emoji: "👶",
      emoji_label: "baby",
    },
  ];
  return (
    <div className="skill-list">
      {skills.map((skill, index) => (
        <SkillList
          key={index}
          skill={skill.skill}
          backgroundColor={skill.backgroundColor}
          emoji={skill.emoji}
          emoji_label={Skill.emoji_label}
        />
      ))}
    </div>
  );
}

function SkillList(props) {
  console.log(props);
  return (
    <div className="skill-list">
      <h3 style={{ background: props.backgroundColor }}>
        {props.skill}
        <span aria-label={props.emoji_label}>{props.emoji}</span>
      </h3>
    </div>
  );
}
export default App;
