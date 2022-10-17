import type {NextPage} from 'next'
import styles from '../styles/stats.module.css'
import {useContext} from "react";
import {AppCtx} from "../utils/context";
import Grid2 from "@mui/material/Unstable_Grid2";
import {Box, Card, CardContent, Fab, Typography} from "@mui/material";
import PieChart from "../components/pie-chart";
import {DeleteForever} from "@mui/icons-material";

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
                    app.stats.length > 0 && app.stats.map((item, index) => (
                        <Grid2 key={index} xs={12} md={6} lg={4}>
                            <Card>
                                <CardContent>
                                    <Typography variant={"h6"} color="text.secondary">
                                        Answer Ration : {item.answeredRatio.toFixed(2)}%
                                    </Typography>
                                    <Typography variant={"h6"} color="text.secondary">
                                        Creation Date : {(new Date(item.createdAt)).toLocaleString()}
                                    </Typography>
                                    <PieChart {...item} />
                                </CardContent>
                            </Card>
                        </Grid2>
                    ))
                }
            </Grid2>
            <Box my={2}>
                {app.stats.length < 1 && (
                    <Typography variant={'h4'} textAlign={'center'}>No Stats Available !</Typography>)}
            </Box>
            {
                app.stats.length > 0 && (
                    <Fab className={styles.fab} onClick={resetStats} variant="extended" color={"error"}>
                        <DeleteForever sx={{mr: 1}}/>
                        Reset All
                    </Fab>)
            }
        </div>
    )
}

export default Stats
