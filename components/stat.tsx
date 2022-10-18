import {Card, CardContent, Typography} from "@mui/material";
import {I_Stat} from "../utils/interfaces";
import {memo} from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import PieChart from "./pie-chart";

const Stat = (props: I_Stat) => {
    return (
        <Grid2 xs={12} md={6} lg={4}>
            <Card>
                <CardContent>
                    <Typography variant={"subtitle1"} color="text.secondary">
                        Answer Ratio : {props.answeredRatio.toFixed(2)}%
                    </Typography>
                    <Typography variant={"subtitle1"} color="text.secondary">
                        Creation Date : {(new Date(props.createdAt)).toLocaleString()}
                    </Typography>
                    <Typography variant={"subtitle1"} color="text.secondary">
                        Total Questions : {props.totalQuestions}
                    </Typography>
                    <PieChart {...props} />
                    <Typography variant={"subtitle2"} textAlign={"center"} sx={{mt: 1}} color="text.secondary">
                        (Tap on Chart To View The Result)
                    </Typography>
                </CardContent>
            </Card>
        </Grid2>
    );
}

export default memo(Stat);
