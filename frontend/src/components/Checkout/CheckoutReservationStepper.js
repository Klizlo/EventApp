import {useState} from "react";
import LoginStep from "./Login/LoginStep";
import {
    Box,
    Step,
    StepConnector,
    stepConnectorClasses,
    StepLabel,
    Stepper,
    styled
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DescriptionIcon from "@mui/icons-material/Description";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ReservationStep from "./Reservation/ReservationStep";
import SummaryReservationStep from "./Summary/SummaryReservationStep";
import {useTranslation} from "react-i18next";

const steps = [
    "checkout.stepper.login",
    "checkout.stepper.reservation",
    "checkout.stepper.confirm",
];

const ShoppingConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundColor: 'green',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundColor: 'green',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 3,
        border: 0,
        backgroundColor: 'grey',
        borderRadius: 1
    },
}));

function ShoppingStepIcon(props) {

    const icons = {
        1: <AccountCircleIcon fontSize='large' sx={{
            color: props.completed === true ? 'green' : 'grey'
        }}/>,
        2: <DescriptionIcon fontSize='large' sx={{
            color: props.completed === true ? 'green' : 'grey'
        }}/>,
        3: <CheckCircleRoundedIcon fontSize='large' sx={{
            color: props.completed === true ? 'green' : 'grey'
        }}/>
    }

    return (
        props.active === true ?
            (<Box sx={{
                width: 50,
                height: 50,
                borderRadius: '50%',
                borderWidth: '2px',
                borderStyle: 'solid',
                borderColor: 'grey',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Box sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    borderWidth: '2px',
                    borderStyle: 'solid',
                    borderColor: 'grey',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    {icons[String(props.icon)]}
                </Box>
            </Box>) :
            (<Box sx={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                borderWidth: '2px',
                borderStyle: 'solid',
                borderColor: props.completed === true ? 'green' : 'grey',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                {icons[String(props.icon)]}
            </Box>)
    )

}

const CheckoutReservationStepper = () => {
    const [client, setClient] = useState(null);

    const order = useState(sessionStorage.getItem("order"));

    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const { t } = useTranslation();

    function _renderStepContent(step) {

        switch (step) {
            case 0:
                return <LoginStep handleNext={handleNext}/>
            case 1:
                return <ReservationStep client={client} setClient={setClient} handleNext={handleNext}/>
            case 2:
                return <SummaryReservationStep order={order}
                                           client={client}
                                           handleNext={handleNext}
                                           handleBack={handleBack}/>
            default:
        }

    }

    return (
        <Box sx={{ width: '100%' }}>
            {activeStep !== steps.length && (<Stepper activeStep={activeStep} alternativeLabel connector={<ShoppingConnector/>}>
                {steps.map((label, index) => {
                    return (
                        <Step key={label}>
                            <StepLabel StepIconComponent={ShoppingStepIcon}>{t(label)}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>)}
            {_renderStepContent(activeStep)}
        </Box>
    );
}

export default CheckoutReservationStepper;