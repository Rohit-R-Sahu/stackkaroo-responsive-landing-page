import Contact from "./components/Contact";
import DevService from "./components/DevService";
import Hero from "./components/Hero";
import Scope from "./components/Scope";
import Faq from "./components/Faq";
import { ModelBox, ModelSection } from "./components/Models";

export default function Home() {
  return (
    <main>
      <div class="container-fluid">
        <div class="container">
          <Hero />
          <Scope />
          <ModelBox />
          <Contact />
          <DevService />
          <Faq />
        </div>
      </div>
    </main>
  );
}
