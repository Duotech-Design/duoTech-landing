import { WebPresenceDetails } from "@/v2/components/subsections/WebPreseceDetails";
import { WebPresenceIntro } from "@/v2/components/subsections/WebPresenceSection";

export const WebPresence: React.FC = () => {
  return (
    <>
      <WebPresenceIntro />
      <WebPresenceDetails />
    </>
  );
};
