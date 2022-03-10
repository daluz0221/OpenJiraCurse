import { SetStateAction } from 'react';
import { UIState } from './UIProvider';


type UIActionType = 
|{ type:       '[UI] - Open Sidebar'}
|{ type:       '[UI] - Close Sidebar'}
|{ type:       '[UI] - Set NewEntry', payload:  boolean}
|{ type:       '[UI] - Start Draging'}
|{ type:       '[UI] - End Draging'}

export const uiReducer = (state: UIState, action: UIActionType): UIState => {

    switch (action.type) {
        case '[UI] - Open Sidebar':
            return {
                ...state,
                sidemenuOpen: true,
            }
        case '[UI] - Close Sidebar':
            return {
                ...state,
                sidemenuOpen: false,
            }
        case '[UI] - Set NewEntry':
            return {
                ...state,
                isAddingEntry: action.payload,
            }
        case '[UI] - Start Draging':
            return {
                ...state,
                isDragging: true
            }
        case '[UI] - End Draging':
            return {
                ...state,
                isDragging: false
            }
        



        default:
            return state;
   }

}