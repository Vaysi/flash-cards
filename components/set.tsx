import {Card, CardActions, CardContent, Typography} from "@mui/material";
import {I_Set} from "../utils/interfaces";
import {memo} from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import Styles from '../styles/set.module.css';
import {useRouter} from "next/router";

const Set = (props: I_Set) => {
    const router = useRouter();
    const getCards = () => {
        router.push({
            pathname: '/cards',
            query: {id: props.id}
        })
    }
    return (
        <Grid2 xs={12} md={6} lg={4}>
            <Card className={Styles.card} onClick={getCards}>
                <CardContent>
                    <Typography textAlign={'center'} variant={"h4"} color="text.secondary" className={Styles.text}>
                        {props.name}
                    </Typography>
                    <Typography textAlign={'center'} color="text.secondary" className={Styles.text}>
                        ( <b>{props.cards.length} Cards</b> is Available )
                    </Typography>
                </CardContent>
            </Card>
        </Grid2>
    );
}

export default memo(Set);
