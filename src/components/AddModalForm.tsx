import React, {ChangeEventHandler, FC, KeyboardEventHandler, SyntheticEvent, useState} from 'react';
import {Modal, ModalProps} from "./Modal";
import styled from 'styled-components';
import {X as Close} from 'styled-icons/feather/X';
import {Check} from 'styled-icons/feather/Check';


const Container = styled.div`
  font-size: 1.5rem;
 
  header {
    font-size: 1.5rem;
    min-height: ${Math.round(window.innerHeight/12)}px;
  }
  
  .body {
    min-height: ${Math.round(window.innerHeight/6)}px;

    input {
      background-color: rgba(0,0,0,0.2);
      border: none;
      border-radius: 24px;
      color: black;
      font-size: inherit;
      padding: 12px;
    }
  
  }
  
  footer {
    align-items: center;
    color: white;
    display: flex;
    justify-content: flex-end;
    min-height: ${Math.round(window.innerHeight/12)}px;
    padding: 8px 0;
    
    button {
      background-color: transparent;
      border: none;
      border-radius: 100%;
    }
    
    .cancel {
      svg {
       color: crimson;
      }
    }
    
    .confirm {
      svg{
        color: limegreen;
      }
    }
    
  }
`;

export interface AddModalFormProps extends ModalProps {
  title?: string,
  onSubmit: (label: string) => void,
  onCancel: () => void
}

export const AddModalForm: FC<AddModalFormProps> =
  ({open, onSubmit, onCancel, title}) => {
    const [input, setInput] = useState('');
    const onChange: ChangeEventHandler<HTMLInputElement> =
      ({target: {value}}) => {
        setInput(value)
    };
    const onSubmitHandler = (e: SyntheticEvent) => {
      e.preventDefault();
      onSubmit(input);
      onCancel();
      setInput('');
    };

    return (
      <Modal open={open}>
        <Container>
          <form onSubmit={onSubmitHandler}>
            <header>
              {title}
            </header>
            <div className="body">
              <input
                name="label"
                placeholder="Name"
                type="text"
                value={input}
                onChange={onChange}
              />
            </div>
            <footer>
              <button className={'cancel'} onClick={onCancel}>
                <Close size={48}/>
              </button>
              <button onClick={onSubmitHandler} className={'confirm'}>
                <Check size={48}/>
              </button>
            </footer>
          </form>
        </Container>
      </Modal>
    );
  };