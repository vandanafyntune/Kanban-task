import React from "react";
import Cards from "../../components/MyComponents/Cards";
import TodoCard from "../../components/MyComponents/TodoCard";
import SubHeader from "../../components/MyComponents/SubHeader";

function DashBoard() {
  const dataToda = [
    {
      id: 1,
      type: "TO Do",
      length: 3,
      data: [
        {
          id: 1,
          title: "Brainstorming",
          description:
            "Brainstorming brings team members' diverse experience into play",
          priority: "High",
          Comments: "2",
          file: "2",
        },
        {
          id: 2,
          title: "Research",
          description:
            "User research helps you to create an optimal product for users.",
          priority: "High",
          Comments: "2",
          file: "2",
        },
        {
          id: 3,
          title: "Wireframes",
          description:
            "Low fidelity wireframes include the most basic content and visuals.",
          Comments: "2",
          file: "2",
          priority: "Low",
        },
      ],
    },
    {
      id: 2,
      type: "On Progress",
      length: 2,
      data: [
        {
          id: 22,
          title: "Onboarding Illustrations ",
          description:
            "Brainstorming brings team members' diverse experience into play",
          priority: "High",
          Comments: "2",
          file: "2",
        },
        {
          id: 22,
          title: "Moodboard",
          description:
            "User research helps you to create an optimal product for users.",
          priority: "High",
          Comments: "2",
          file: "2",
        },
      ],
    },
    {
      id: 3,
      type: "Done",
      length: 2,
      data: [
        {
          id: 32,
          title: "Mobile App Design",
          description:
            "Brainstorming brings team members' diverse experience into play",
          priority: "High",
          Comments: "2",
          file: "2",
        },
        {
          id: 32,
          title: "Design System",
          description:
            "User research helps you to create an optimal product for users.",
          priority: "High",
          Comments: "2",
          file: "2",
        },
      ],
    },
  ];

  return (
    <div className="flex justify-center items-center flex-col m-7 gap-10 w-full">
      <SubHeader />

      <div className="flex flex-col md:flex-row justify-center items-start gap-4 w-full">
        {dataToda.map((item) => (
          <TodoCard
            key={item.id}
            type={item.type}
            length={item.length}
            data={item.data}
          />
        ))}
      </div>
    </div>
  );
}

export default DashBoard;
