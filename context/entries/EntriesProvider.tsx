import { FC, useReducer } from 'react';
import { v4 as uuidv4, v4 } from 'uuid';
import { EntriesContext } from './EntriesContext';
import { entriesReducer } from './';
import { Entry } from '../../interfaces';

export interface EntriesState {
    entries: Entry[];
}

const Entries_INITIAL_STATE:EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description: 'pendiente--Es el momento de agregar mucho texto equisde equisde.',
            status: 'pending',
            createdAt: Date.now(),
        },
        {
            _id: uuidv4(),
            description: 'progresando--Es el momento de agregar más texto, mucho más texto equisde equisde.',
            status: 'in-progress',
            createdAt: Date.now() - 1000000,
        },
        {
            _id: uuidv4(),
            description: 'terminado--Bueno aqui ya se me acabó la creativadad jajajajajaja que kozas.',
            status: 'finished',
            createdAt: Date.now() - 100000,
        },
    ],
}


export const EntriesProvider:FC = ({children}) => {

    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

    const addNewEntry = (description:string) => {
      const newEntry:Entry = {
          _id: uuidv4(),
          description,
          createdAt: Date.now(),
          status: 'pending'
      }

      dispatch({type: '[Entry] - AddEntry', payload: newEntry});
    }

    const onEntryUpdated = (entry: Entry) => {
      dispatch({type: '[Entry] - UpdateEntry', payload: entry});

    }

    return (
       <EntriesContext.Provider value={{
               ...state,
               addNewEntry,
               onEntryUpdated
        }}>
         {children}
       </EntriesContext.Provider>
    )
}