import { MobilePresenceDetails } from "../subsections/MobilePreseceDetails";
import { MobilePresenceIntro } from "../subsections/MobilePresence";

export const MobileAppsSection: React.FC = () => {
  return (
    <>
      <MobilePresenceIntro />
      <MobilePresenceDetails />
    </>
  );
};
