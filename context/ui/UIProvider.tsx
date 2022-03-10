import { FC, useReducer, useState } from 'react';
import { UIContext } from './UIContext';
import { uiReducer } from './UIReducer';

export interface UIState {
    sidemenuOpen: boolean;
    isAddingEntry: boolean;
    isDragging: boolean;
}

const UI_INITIAL_STATE:UIState = {
    sidemenuOpen: false,
    isAddingEntry: false,
    isDragging: false,
}




export const UIProvider:FC = ({children}) => {

    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);


    const openSideMenu = () => {
      dispatch({type: '[UI] - Open Sidebar'});
    }

    const closeSideMenu = () => {
      dispatch({type: '[UI] - Close Sidebar'});
    }

    const setIsAddingEntry = (isAdding:boolean) => {
      dispatch({type: '[UI] - Set NewEntry', payload: isAdding})
    }

    const startDragging = () => {
      dispatch({type: '[UI] - Start Draging'});
    }

    const endDragging = () => {
      dispatch({type: '[UI] - End Draging'});
    }

    return (
       <UIContext.Provider value={{
         ...state,

         //Methods
         openSideMenu,
         closeSideMenu,

         setIsAddingEntry,

         startDragging,
         endDragging
        }}>
         {children}
       </UIContext.Provider>
    )
}