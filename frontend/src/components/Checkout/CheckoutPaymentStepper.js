import {useState} from "react";
import {
    Alert,
    Box,
    Snackbar,
    Step,
    StepConnector,
    stepConnectorClasses,
    StepLabel,
    Stepper,
    styled
} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DescriptionIcon from '@mui/icons-material/Description';
import PaymentIcon from '@mui/icons-material/Payment';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import PaymentStep from "./Payment/PaymentStep";
import LoginStep from "./Login/LoginStep";
import BillingStep from "./Billing/BillingStep";
import SummaryPaymentStep from "./Summary/SummaryPaymentStep";
import PaymentRedirectStep from "./PaymentRedirect/PaymentRedirectStep";
import {useTranslation} from "react-i18next";

const steps = [
    "checkout.stepper.login",
    "checkout.stepper.billing",
    "checkout.stepper.payment",
    "checkout.stepper.confirm",
];

const ShoppingConnector = styled(StepConnector)(({theme}) => ({
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
        3: <PaymentIcon fontSize='large' sx={{
            color: props.completed === true ? 'green' : 'grey'
        }}/>,
        4: <CheckCircleRoundedIcon fontSize='large' sx={{
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

const CheckoutPaymentStepper = () => {

    const [error, setError] = useState(null);
    const [openSnackbar, setOpenSnackBar] = useState(false);

    const [payment, setPayment] = useState({
        id: null,
        name: null
    });

    const [client, setClient] = useState(null);

    const [order, setOrder] = useState(
        sessionStorage.getItem('order') !== null ?
            JSON.parse(sessionStorage.getItem('order')) :
            null);

    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const {t} = useTranslation();

    function _renderStepContent(step) {
        if (localStorage.getItem("token") !== null && activeStep === 0) {
            setActiveStep(activeStep+1);
        }
        switch (step) {
            case 0:
                return <LoginStep handleNext={handleNext}/>
            case 1:
                return <BillingStep client={client} setClient={setClient} handleNext={handleNext}/>
            case 2:
                return <PaymentStep currentPayment={payment}
                                    setPayment={setPayment}
                                    client={client}
                                    handleNext={handleNext}
                                    handleBack={handleBack}
                                    setError={setError}
                                    setOpenSnackBar={setOpenSnackBar}/>
            case 3:
                return <SummaryPaymentStep order={order}
                                           setOrder={setOrder}
                                           client={client}
                                           payment={payment}
                                           handleNext={handleNext}
                                           handleBack={handleBack}/>
            default:
                return <PaymentRedirectStep/>
        }

    }

    return (
        <Box sx={{width: '100%'}}>
            {activeStep !== steps.length && (
                <Stepper activeStep={activeStep} alternativeLabel connector={<ShoppingConnector/>}>
                    {steps.map((label, index) => {
                        return (
                            <Step key={label}>
                                <StepLabel StepIconComponent={ShoppingStepIcon}>{t(label)}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>)}
            {_renderStepContent(activeStep)}
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={() => setOpenSnackBar(false)}>
                <Alert onClose={() => setOpenSnackBar(false)} severity="error" sx={{width: '100%'}}>
                    {error}
                </Alert>
            </Snackbar>
        </Box>
    );
}

export default CheckoutPaymentStepper;