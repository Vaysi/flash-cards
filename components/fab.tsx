import {Backdrop, SpeedDial, SpeedDialAction, SpeedDialIcon, styled} from "@mui/material";
import {Apps, FeaturedPlayList} from "@mui/icons-material";
import {useState} from "react";

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
    '.MuiSpeedDialAction-staticTooltipLabel': {
        minWidth: 112,
        textAlign: 'center'
    }
}));

const speedDialActions = [
    {icon: <Apps/>, name: 'Set'},
    {icon: <FeaturedPlayList/>, name: 'Flash Card'},
];
const FAB = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
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
                            onClick={handleClose}
                        />
                    ))}
                </StyledSpeedDial>
            </div>
        </>
    );
}

export default FAB
