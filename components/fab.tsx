import {
    Backdrop,
    Dialog,
    DialogTitle,
    IconButton,
    SpeedDial,
    SpeedDialAction,
    SpeedDialIcon,
    styled,
    Typography
} from "@mui/material";
import {Apps, Close, FeaturedPlayList} from "@mui/icons-material";
import {useState} from "react";
import CreateSet from "./create-set";
import CreateCard from "./create-card";

const StyledSpeedDial = styled(SpeedDial)(({theme}) => ({
    '.MuiSpeedDialAction-staticTooltipLabel': {
        minWidth: 112,
        textAlign: 'center'
    }
}));

interface DialAction {
    icon: any;
    name: string;
    key: string;
}

const speedDialActions: Array<DialAction> = [
    {icon: <Apps/>, name: 'Set', key: 'set'},
    {icon: <FeaturedPlayList/>, name: 'Flash Card', key: 'card'},
];

const FAB = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
    };

    const [addDialog, setAddDialog] = useState(false);
    const handleOpenAddDialog = () => setAddDialog(true);
    const handleCloseAddDialog = () => {
        setAddDialog(false);
    };

    const [formType, setFormType] = useState('set');

    const openDialog = (action: string) => {
        if (action == 'set') {
            setFormType('set');
        } else {
            setFormType('card');
        }
        handleOpenAddDialog();
    }


    return (
        <>
            <Backdrop open={open}/>
            <div style={{position: 'relative'}}>
                <StyledSpeedDial
                    ariaLabel="SpeedDial basic example"
                    sx={{position: 'fixed', bottom: 16, right: 16}}
                    icon={<SpeedDialIcon/>}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    open={open}
                >
                    {speedDialActions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            tooltipOpen
                            onClick={() => openDialog(action.key)}
                        />
                    ))}
                </StyledSpeedDial>
            </div>
            <Dialog maxWidth={"sm"} fullWidth={true} open={addDialog} onClose={handleCloseAddDialog}>
                <DialogTitle sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Typography>Add <b>{formType == 'set' ? 'Set' : 'Flash Card'}</b></Typography>
                    <IconButton onClick={handleCloseAddDialog}>
                        <Close/>
                    </IconButton>
                </DialogTitle>
                {
                    formType == 'set' ? <CreateSet onSubmit={handleCloseAddDialog}/> :
                        <CreateCard onSubmit={handleCloseAddDialog}/>
                }
            </Dialog>
        </>
    );
}

export default FAB
