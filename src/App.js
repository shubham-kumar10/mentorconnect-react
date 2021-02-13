import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Header from "./components/header/Header";
import ProfileCard from "./components/profile-card/ProfileCard";

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <section className="mentorlist">
        <ProfileCard
          id={1}
          name={"John"}
          photo={"https://randomuser.me/api/portraits/men/30.jpg"}
          active={true}
          skill={[{ name: "Java" }, { name: "JavaScript" }, { name: "CSS" }]}
          userid={1}
          location={"New York"}
          organization={"Microsoft"}
          jobTitle={"Software Engineer"}
        />
        <ProfileCard
          id={1}
          name={"Ricky John"}
          photo={"https://randomuser.me/api/portraits/women/30.jpg"}
          active={false}
          skill={[{ name: "Java" }, { name: "JavaScript" }, { name: "CSS" }]}
          userid={1}
          location={"New York"}
          organization={"Microsoft"}
          jobTitle={"Software Engineer"}
        />
        <ProfileCard
          id={1}
          name={"John"}
          photo={"https://randomuser.me/api/portraits/men/3.jpg"}
          active={true}
          skill={[{ name: "Java" }, { name: "JavaScript" }, { name: "CSS" }]}
          userid={1}
          location={"New York"}
          organization={"Microsoft"}
          jobTitle={"Software Engineer"}
        />
      </section>
    </div>
  );
}

export default App;
