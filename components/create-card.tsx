import {
    Button,
    DialogActions,
    DialogContent,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField
} from "@mui/material";
import {useContext, useState} from "react";
import {AppCtx} from "../utils/context";
import {useRouter} from "next/router";

interface Props {
    onSubmit(): void;
}

const CreateCard = (props: Props) => {
    const [front, setFront] = useState('');
    const [back, setBack] = useState('');
    const [flashCardSetId, setFlashCardSetId] = useState<string | number>('');
    const {app, setApp} = useContext(AppCtx);
    const router = useRouter();

    const submitForm = () => {
        let newApp = {...app};
        let setIndex = app.sets.findIndex(item => item.id == flashCardSetId as number);
        if (setIndex) {
            let newCard = {
                id: newApp.sets[setIndex].cards.length,
                front: front,
                back: back
            };
            newApp.sets[setIndex].cards = [...newApp.sets[setIndex].cards, newCard];
        }
        setApp(newApp);
        props.onSubmit();
        router.push(`cards?id=${flashCardSetId}`)
    }
    return (
        <>
            <DialogContent>
                <FormControl fullWidth>
                    <InputLabel variant={"standard"} id="flash-card-set">Flash Cards Set</InputLabel>
                    <Select
                        labelId="flash-card-set"
                        id="flash-card-set-input"
                        value={flashCardSetId}
                        label="Age"
                        onChange={(e) => setFlashCardSetId(e.target.value)}
                        variant={"standard"}
                    >
                        {app.sets.map((item) => <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>)}
                    </Select>
                </FormControl>
                <TextField
                    autoFocus
                    margin="dense"
                    id="front"
                    label="Front Title"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={front}
                    onChange={e => setFront(e.target.value)}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="back"
                    label="Back Title"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={back}
                    onChange={e => setBack(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button disabled={!flashCardSetId || !back || !front} onClick={submitForm} variant={'contained'}
                        color={'primary'}>Submit</Button>
            </DialogActions>
        </>
    );
}

export default CreateCard
