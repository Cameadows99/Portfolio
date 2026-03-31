import Link from "next/link";
import SectionHeading from "./components/SectionHeading";

export default function HomePage() {
  return (
    <div className="home-page">
      <section className="hero">
        <p className="eyebrow">Developer Portfolio</p>

        <h1>
          Building useful, creative applications with style and innovation
        </h1>

        <p className="hero-text">
          Chase Meadows, a self-taught front-end focused developer with back-end
          experience, creating applications that blend functionality, usability,
          and overlooked desires.
        </p>

        <div className="hero-buttons">
          <Link href="/projects" className="primary-btn">
            View Projects
          </Link>

          <a
            href="https://github.com/Cameadows99"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-btn"
          >
            Github
          </a>

          <a href="#about" className="secondary-btn">
            About Me
          </a>
        </div>
      </section>

      <section id="about" className="content-panel">
        <SectionHeading title="About Me" />

        <p>
          
          My skills/passions are writing, pattern recognition/decoding, and finding intricies in seemingly simple things.
        </p>

        <p>
          I enjoy finding something rather complicated and breaking it down to
          simplicity either through dissecting small pieces and then
          constructing each piece into a whole or through relatability with
          another structure/idea.
        </p>

        <p>
          I enjoy diving into systems and seeing how everything connects, how
          one decision affects another, and how small details shape the overall
          system.
        </p>

        <p>
          What cause me to gravitate towards programming was the idea of being able to manifest abstract
          ideas into a tangiable form and have the oppurtunity to dictate the way it is presented and interacted with.
        </p>

        <p>
          At first I started with the idea of diving deep into the back-end, but
          overtime I began to find satisfaction in considering the smaller, more subtle, details.
        </p>

        <p>
          I think one of my strengths is being able to keep multiple
          perspectives in mind in order to create a solution that satisfies the majority rather than the individual.
        </p>
      </section>

      <section className="content-panel">
        <SectionHeading title="Experience" />

        <p>My work history is mostly one of many years of hands-on construction while using my free time to build personal applications.</p>

        <p>
          Although it may seem unrelated (and in many ways it is), I have found
          similarities in focusing on individual pieces and using them to create
          a whole. One must think of the end design when working on the bones of
          a building to fulfill the necessary functionality and stylistic
          needs.
        </p>

        <p>
          I started learning to code in small steps, using platforms like
          freeCodeCamp, to expose myself to the basics, and incrementally expand and test myself further.
        </p>

        <p>
          After building some confidence, I began to experiment with more variety and using what I've learned to challenge myself to build larger and less-fragmented projects.
        </p>

        <p>
          Finally, I used the skills I learned to create an application for my
          previous company (Heatwave) that modernized the way the employees
          interacted with the company. This was mostly due to the fact that the
          company still largely used paper recording systems.
        </p>
      </section>

      <section className="content-panel">
        <SectionHeading title="What I Like Building" />

        <p>
          I’m interested in improving things people use every day, especially
          the ones that are so commonly used that many people forget that further improvements can be made.
        </p>

        <p>
          A lot of my focus is on finding discomfortable areas that might trip a user up and offer a clean experiece with each type of user in mind.
        </p>

        <p>
          For example, I’ve thought about navigation systems that allow full
          control with one hand using keyboard gaming controls that allow the
          user to navigate a webpage using one hand and free up the mouse hand
          for taking notes or however they decide to use it.
        </p>

        <p>
          I also like to build easy-to-understand systems that allow users to
          have some sort of distinct way to interact with the interface without
          sacrificing simple standard interface interactivity.
        </p>

        <p>
          I would also like to make a button that I coined as the "Betty
          button". This is a button that gives the user full and easy access to
          define themselves. The use case came from an idea of a user-created
          calculator application that allows users to design calculators fit for
          their needs and save and share them. A self-employed contractor could
          create one for roofing quoting, someone can use it for personalized
          budgets, or for taking stock. The name "Betty button" comes from the
          idea that someone budgeting for themselves could create a button for
          the $200 they pay monthly to their grandma. They could design it to be
          called "Betty" and set the operation to subtract 200 rather than
          typing "-200" each time they budget.
        </p>

        <p className="highlight-line">
         My foremost specitalty is to give users unique control in how they interact with applications while also offering a streamlined and stuctured default experience.
        </p>

        <p>
          To tie all of this together: my goal is to find easily overlooked gaps
          and fill them in a subtly impactful way.
        </p>
      </section>
    </div>
  );
}
