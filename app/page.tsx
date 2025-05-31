import CTA from "@/components/CTA";
import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import { recentSessions } from "@/constants";

const Page = () => {
  return (
    <main>
      <h1>Welcome to my Sass APP</h1>
      <section className="home-section">
        <CompanionCard
          id="123"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          duration={45}
          subject="Science"
          color="#ffda6e"
        />
        <CompanionCard
          id="124"
          name="Countsy the Number Wizard"
          topic="Derivatives & Integrals"
          duration={30}
          subject="Maths"
          color="#efd0ff"
        />
        <CompanionCard
          id="125"
          name="Verba the Vocabulary Builder"
          topic="English Literature "
          duration={30}
          subject="Language"
          color="#BDE7ff"
        />
      </section>

      <section className="home-section">
        <CompanionsList
          title="Recently completed sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
