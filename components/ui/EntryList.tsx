import { List, Paper } from "@mui/material"
import { DragEvent, FC, useContext, useMemo } from "react";
import { EntriesContext } from "../../context/entries";
import { UIContext } from "../../context/ui";
import { EntryStatus } from "../../interfaces"
import { EntryCard } from "./"

import styles from './EntryList.module.css'


interface Props {
    status: EntryStatus;
}

export const EntryList: FC<Props> = ({status}) => {


    const { entries, onEntryUpdated } = useContext(EntriesContext);
    const {isDragging, endDragging} = useContext(UIContext)

    const entriesByStatus = useMemo(()=>  entries.filter( entry => entry.status === status) , [entries]);
    
    
    const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
      const id = event.dataTransfer.getData('text');

      console.log({id});
      
      const entry = entries.find(e=>e._id === id)!;
      entry.status = status;
      onEntryUpdated(entry);
      endDragging();
      
    }

    const allowDrop = (event:DragEvent<HTMLDivElement> ) => {
      event.preventDefault();
    }

    return (
    <div
        onDrop={onDropEntry}
        onDragOver={allowDrop}
        className={isDragging ? styles.dragging : ''}
    >
        <Paper sx={{height: 'calc(100vh - 250px)', overflow: 'scroll', backgroundColor: 'transparent', padding: 1}}>

            <List sx={{opacity: isDragging ? 0.2 : 1, transition: 'all .3s ease'}}>
                {
                    entriesByStatus.map( entry => (
                        <EntryCard key={entry._id} entry={ entry } />

                    ))
                }
                
            </List>

        </Paper>
    </div>
  )
}
