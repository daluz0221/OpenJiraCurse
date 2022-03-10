import { Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material";
import { DragEvent, FC, useContext } from "react";
import { UIContext } from "../../context/ui";
import { Entry } from "../../interfaces";


interface Props {
    entry: Entry;
}

export const EntryCard:FC<Props> = ({entry}) => {

    const {startDragging, endDragging} = useContext(UIContext);


    const onDragStart = (event: DragEvent) => {
      console.log(event);

      event.dataTransfer.setData('text', entry._id)
      //TODO: modifcar el estado, para indcar que estoy haciendo drag
      startDragging();
    }

    const onDragEnd = () => {
      //TODO: cancelar on drag
      endDragging();
    }

    return (
    <Card
        sx={{marginBottom: 1}}
        //Eventos de drag
        draggable
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
    >
        <CardActionArea>
            <CardContent>
                <Typography sx={{ whiteSpace: 'pre-line'}}>{entry.description}</Typography>
            </CardContent>

            <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
                <Typography variant="body2">hace 30 minutos</Typography>
            </CardActions>
        </CardActionArea>
    </Card>
  )
};
