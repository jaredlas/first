import Textb from "@/components/TextHidden";
import { Spotlight } from "@/components/ui/Spotlight";
import { Vortex } from "@/components/ui/vortex";
const Skills = () => {
  return <div className="text-center h-screen w-full bg-cover">
    <Vortex/>
    <div className="mt-28 h-80 w-full flex items-center justify-center">
      <Textb
      theme="dark"
      text="We Provide Full Stack Dev "
      revealText="Check Out Below Ones"/>
    </div>
    <div className="flex h-96 w-full items-center justify-center ml-28">
      <div className="text-center">
        <Textb
        theme={"dark"}
        text="Front-End Dev"
        revealText="JavaScript, Next, React, HTML, CSS, TypeScript, etc."/>
      </div>
      <div>
      <Textb
        theme={"dark"}
        text="Back-End Dev"
        revealText="MySQL, Postegres, MangoDB, Django"/>
      </div>
    </div>
  </div>;
};

export default Skills;
