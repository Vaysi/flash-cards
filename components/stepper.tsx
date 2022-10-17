import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import {useContext, useState} from "react";
import {I_Card, I_Stat} from "../utils/interfaces";
import {AppCtx} from "../utils/context";
import {useRouter} from "next/router";
import styles from '../styles/stepper.module.css';

interface Props {
    cards: Array<I_Card>;
    label: string;
    id: number;
}

const sx = {
    paper: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        pl: 2,
        bgcolor: 'background.default',
    },
    box: {py: 15, width: '100%', px: 2, cursor: 'pointer'},
    mainBox: {flexGrow: 1, backgroundColor: 'rgba(0,0,0,.15)'}
};

const CardsStepper = (props: Props) => {
    const [activeStep, setActiveStep] = useState(0);
    const {app, setApp} = useContext(AppCtx);
    const [showBack, setShowBack] = useState(false);
    const [answeredCards, setAnsweredCards] = useState<Array<number>>([]);
    const router = useRouter();
    const [stat, setStat] = useState<I_Stat>({
        setId: props.id,
        createdAt: new Date(),
        totalQuestions: props.cards.length,
        totalAnsweredQuestions: 0,
        totalIncorrectAnsweredQuestions: 0,
        totalUnansweredQuestions: 0,
        answeredRatio: 0,
    });
    const maxSteps = props.cards.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setShowBack(false);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        setShowBack(false);
    };

    const submitAnswer = (val: 'answered' | 'unanswered' | 'incorrect') => {
        let newStat = {...stat};
        if (val == 'answered') {
            newStat.totalAnsweredQuestions += 1;
        }
        if (val == 'unanswered') {
            newStat.totalUnansweredQuestions += 1;
        } else {
            newStat.totalIncorrectAnsweredQuestions += 1;
        }
        newStat.answeredRatio = (newStat.totalAnsweredQuestions / newStat.totalQuestions) * 100
        setStat(newStat);
        // Move to Next Step
        if (activeStep + 1 < maxSteps) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
            setShowBack(false);
        }
        // Disable Answering to an answered Flash Card
        setAnsweredCards([...answeredCards, activeStep]);
    }

    const finish = () => {
        let newApp = {...app};
        newApp.stats = [stat, ...app.stats];
        setApp(newApp);
        router.push('stats');
    };

    return (
        <Box sx={sx.mainBox}>
            <Paper
                square
                elevation={0}
                sx={sx.paper}
            >
                <Typography>{props.label}</Typography>
            </Paper>
            <Box sx={sx.box} onClick={() => setShowBack(!showBack)}>
                <Typography textAlign={'center'} variant={"h5"} color={'#fff'}>
                    {
                        !showBack ? props.cards[activeStep].front : props.cards[activeStep].back
                    }
                </Typography>
                {
                    !showBack && (
                        <Typography color={'#444'} className={styles.blink} variant={'subtitle2'} textAlign={'center'}>(Click To Show Back)</Typography>
                    )
                }
                {
                    showBack && !answeredCards.includes(activeStep) && (
                        <Box mt={3} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                            <Button variant="contained" color={"warning"} onClick={() => submitAnswer('unanswered')}>Not
                                Answered</Button>
                            <Button sx={{mx: 2}} variant="contained" color={"success"}
                                    onClick={() => submitAnswer('answered')}>Answered</Button>
                            <Button variant="contained" color={"error"} onClick={() => submitAnswer('incorrect')}>Incorrect
                                Answer</Button>
                        </Box>
                    )
                }
            </Box>
            <MobileStepper
                variant="text"
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        Next
                        <KeyboardArrowRight/>
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        <KeyboardArrowLeft/>
                        Back
                    </Button>
                }
            />
            <Box my={2} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <Button variant="contained" color={"success"} onClick={finish}>Finish</Button>
            </Box>

        </Box>
    );
}

export default CardsStepper;
