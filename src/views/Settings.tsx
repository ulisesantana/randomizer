import React, {FC, useState} from "react";
import {Nav, Main, AddModalForm} from "../components";
import {copyToClipboard, Section, SectionHandlers} from "../utils";
import {ArrowLeft} from "styled-icons/feather/ArrowLeft";
import {Export} from "styled-icons/boxicons-regular/Export";
import {Import} from "styled-icons/boxicons-regular/Import";
import {Categories} from "../types";
import {CategoriesActions, creatorCreator} from "../state";

interface SettingsProps {
  state: Categories,
  dispatch: Function,
  section: Section,
  sectionHandlers: SectionHandlers
}

export const Settings: FC<SettingsProps> =
  ({section, sectionHandlers, dispatch, state}) => {
    const [isModalOpen, setModal] = useState(false);
    const onExport = () => {
      copyToClipboard(JSON.stringify(state, null, 2))
    };

    const onImport = (code: string) => {
      creatorCreator(CategoriesActions.RESET, dispatch)(state)(JSON.parse(code))
    };

    return (
      <>
        <Main>
          <h1 style={{textTransform: 'capitalize'}}>{section}</h1>
          <h2>This is all your data: </h2>
          <pre><code>
          {JSON.stringify(state, null, 2)}
        </code></pre>
          <AddModalForm
            title={`Add your your JSON:`}
            open={isModalOpen}
            onSubmit={onImport}
            onCancel={() => {
              setModal(false)
            }}
          />
        </Main>
        <Nav
          leftButton={<ArrowLeft size={32} onClick={sectionHandlers.goToList}/>}
          cta={<Export size={48}/>}
          ctaOnclick={onExport}
          rightButton={<Import size={32} onClick={() => {
            setModal(true)
          }}/>}
        />
      </>
    );
  };

