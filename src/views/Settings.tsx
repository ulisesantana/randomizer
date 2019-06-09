import React, {FC} from "react";
import {Nav, Main} from "../components";
import {Section, SectionHandlers} from "../utils";

interface SettingsProps {
  section: Section,
  sectionHandlers: SectionHandlers
}

export const Settings: FC<SettingsProps> = ({section, sectionHandlers}) => {

  return (
    <>
      <Main>
        <h1 style={{textTransform: 'capitalize'}}>{section}</h1>

        <button onClick={() => sectionHandlers.goToList()}>GO TO LIST</button>
        <button onClick={() => sectionHandlers.goToRandomize()}>GO TO RANDOM</button>
      </Main>
      <Nav
        leftButton={<button onClick={() => sectionHandlers.goToList()}>GO TO LIST</button>}
        cta={<span>EXPORT</span>}
        rightButton={<span>IMPORT</span>}
      />
    </>
  );
};

