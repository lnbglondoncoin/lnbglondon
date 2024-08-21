import OurTeamBanner from "./_components/OurTeamBanner";
import Professionals from "./_components/Professionals";

const TeamPage = ({ params }) => {
  const lang = params.lang;
  return (
    <div className="flex flex-col gap-y-10">
      <OurTeamBanner lang={lang} />
      <Professionals lang={lang} />
    </div>
  );
};

export default TeamPage;
