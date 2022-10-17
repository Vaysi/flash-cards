import {Card, CardContent, Typography} from "@mui/material";
import {I_Card} from "../utils/interfaces";
import {memo} from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import Styles from '../styles/card.module.css';

const FlashCard = (props: I_Card) => {
    return (
        <Grid2 xs={12}>
            <Card className={Styles.card}>
                <CardContent sx={{alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
                    <Typography variant={"h4"} color="text.secondary" className={Styles.text}>
                        {props.front}
                    </Typography>
                </CardContent>
            </Card>
        </Grid2>
    );
}

export default memo(FlashCard);
