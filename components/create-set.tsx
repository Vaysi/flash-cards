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
const CreateSet = (props:Props) => {
    const [title, setTitle] = useState('');


    const {app, setApp} = useContext(AppCtx);
    const router = useRouter();
    const submitForm = () => {
        let newApp = {...app};
        let newSet = {id: app.sets.length, name: title, cards: []};
        newApp.sets = [newSet, ...app.sets]
        setApp(newApp);
        props.onSubmit();
        router.push('sets')
    }

    return (
        <>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="title"
                    label="Title"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={submitForm} variant={'contained'} color={'primary'}>Submit</Button>
            </DialogActions>
        </>
    );
}

export default CreateSet
