import react from "react";
import Fullpage, {
  FullPageSections,
  FullPageSection,
  FullpageNavigation
} from "@ap.cx/react-fullpage";

const Fullpage1 = () => {
  return (
    <>
      <Fullpage>
        <FullPageSections>
          <FullPageSection className="h-screen">
            <h1>Helloe from america</h1>
          </FullPageSection>
          <FullPageSection className="h-screen">
            <h1>Helloe from america</h1>
          </FullPageSection>
          <FullPageSection className="h-screen">
            <h1>Helloe from america</h1>
          </FullPageSection>
        </FullPageSections>
      </Fullpage>
    </>
  );
};

export default Fullpage1;
