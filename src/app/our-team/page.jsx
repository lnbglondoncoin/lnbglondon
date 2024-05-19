import OurTeamBanner from "./_components/OurTeamBanner";
import Professionals from "./_components/Professionals";

const TeamPage = () => {
  return (
    <div className="flex flex-col gap-y-10">
      <OurTeamBanner />
      <Professionals />
    </div>
  );
};

export default TeamPage;
