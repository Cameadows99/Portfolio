import Link from "next/link";
import SectionHeading from "./components/SectionHeading";

export default function HomePage() {
  return (
    <div className="home-page">
      <section className="hero">
        <p className="eyebrow">Developer Portfolio</p>

        <h1>
          Building useful, creative applications with style and innovation as
          the drive.
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
          I’m drawn to pattern recognition and breaking things down into their
          simplest forms.
        </p>

        <p>
          If something feels complicated, my instinct is to dissect it,
          understand each piece, then rebuild it into something clearer and more
          intentional.
        </p>

        <p>
          I enjoy diving into systems and seeing how everything connects, how
          one decision affects another, and how small details shape the overall
          experience.
        </p>

        <p className="highlight-line">
          That’s what pulled me into programming.
        </p>

        <p>
          At first I was focused on the back-end, but over time I found myself
          drawn to design, the small interactions, the feeling of using
          something, and how those details come together to create a meaningful
          experience.
        </p>

        <p>
          I think one of my strengths is being able to hold multiple
          perspectives at once and shape something that works not just for one
          person, but for many.
        </p>
      </section>

      <section className="content-panel">
        <SectionHeading title="Experience" />

        <p>My background is hands-on and rooted in construction.</p>

        <p>
          I spent years working as a commercial carpenter, building things piece
          by piece with a focus on both structure and finish.
        </p>

        <p>
          Even though it seems unrelated, that experience shaped how I think
          about development.
        </p>

        <p className="highlight-line">
          You don’t just build something—you think about how it will be used,
          how it holds together, and how every part contributes to the whole.
        </p>

        <p>
          I started learning to code in small steps, using platforms like
          freeCodeCamp, and gradually moved into building my own projects.
        </p>

        <p>
          Over time, I explored more complex applications and began applying
          what I learned in real scenarios, including creating tools for my
          previous company to modernize how work was handled.
        </p>

        <p>
          That project replaced outdated processes and gave me a real sense of
          what it means to build something that actually improves how people
          work.
        </p>
      </section>

      <section className="content-panel">
        <SectionHeading title="What I Like Building" />

        <p>
          I’m interested in improving things people use every day, especially
          the ones that are so familiar that no one questions them anymore.
        </p>

        <p>
          A lot of my ideas come from noticing small friction points and
          imagining better ways to interact with them.
        </p>

        <p>
          For example, I’ve thought about navigation systems that allow full
          control with one hand using keyboard inputs, freeing the other hand
          for real-world tasks.
        </p>

        <p>
          I also like building tools that give users more control over their own
          systems.
        </p>

        <p>
          One idea I’m working on is a customizable calculator where users can
          create their own buttons for repeated actions, something as simple as
          a “Betty” button that automatically subtracts a fixed expense each
          month.
        </p>

        <p className="highlight-line">
          It’s not about complexity—it’s about removing friction and giving
          people intuitive ways to interact with their own tools.
        </p>

        <p>
          The common thread in everything I build is this: I want to find what’s
          missing, and fill that gap in a way that feels natural.
        </p>
      </section>
    </div>
  );
}
