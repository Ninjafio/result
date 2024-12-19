import Footer from "./blocks/footer/Footer";
import Header from "./blocks/Header/Header";
import IntroBlock from "./blocks/IntroBlock/IntroBlock";
import ModuleBlock from "./blocks/moduleBlock/ModuleBlock";
import TeacherBlock from "./blocks/teacherBlock/TeacherBlock";
import "./page.css"


export default function Home() {
  return (
    <div className="Home">
      <Header />
      <IntroBlock />
      <ModuleBlock />
      <TeacherBlock />
      <Footer />
    </div>
  );
}
