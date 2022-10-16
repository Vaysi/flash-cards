import type {NextPage} from 'next'
import styles from '../styles/Home.module.css'
import {useContext} from "react";
import {AppCtx} from "../utils/context";
import {I_Set} from "../utils/interfaces";
import Set from "../components/set";
import Grid2 from "@mui/material/Unstable_Grid2";

const Sets: NextPage = () => {
    const {app} = useContext(AppCtx);
    return (
        <div className={styles.container}>
            <Grid2 mt={10} container rowSpacing={2} columnSpacing={2}>
                {
                    app.sets.map((item:I_Set) => <Set key={item.id} {...item} />)
                }
            </Grid2>
        </div>
    )
}

export default Sets
