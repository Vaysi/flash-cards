import type {NextPage} from 'next'
import styles from '../styles/stats.module.css'
import {useContext} from "react";
import {AppCtx} from "../utils/context";
import Grid2 from "@mui/material/Unstable_Grid2";
import {Box, Fab, Typography} from "@mui/material";
import {DeleteForever} from "@mui/icons-material";
import Stat from "../components/stat";

const Stats: NextPage = () => {
    const {app, setApp} = useContext(AppCtx);

    const resetStats = () => {
        let newApp = {...app};
        newApp.stats = [];
        setApp(newApp);
    }
    return (
        <div className={styles.container}>
            <Grid2 my={10} container rowSpacing={2} columnSpacing={2}>
                {
                    app.stats.length > 0 && app.stats.map((item, index) => <Stat key={index} {...item} />)
                }
            </Grid2>

            {app.stats.length < 1 && (
                <Box my={2}>
                    <Typography variant={'h4'} textAlign={'center'}>No Stats Available !</Typography>
                </Box>
            )}

            {
                app.stats.length > 0 && (
                    <Fab className={styles.fab} onClick={resetStats} variant="extended" color={"error"}>
                        <DeleteForever sx={{mr: 1}}/>
                        Reset All
                    </Fab>
                )}
        </div>
    )
}

export default Stats
