import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import TagManager from 'react-gtm-module'

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PaymentIcon from '@material-ui/icons/Payment';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Head from 'next/head'
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Grow from '@material-ui/core/Grow';

import axios from 'axios';

import MobileStepper from '@material-ui/core/MobileStepper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import SectionFooter from "pages-sections/footer/SectionFooter.js";
import SectionContacts from "pages-sections/checkout/SectionContacts.js";

import SectionIdentification from "pages-sections/checkout/SectionIdentification.js";
import SectionPayment from "pages-sections/checkout/SectionPayment.js";
import SectionAnamnese from "pages-sections/checkout/SectionAnamnese.js";
import SectionFinish from "pages-sections/checkout/SectionFinish.js";
import SectionModal from "pages-sections/checkout/SectionModal.js";

// import logo from "assets/img/logo.png";
import logo from "assets/img/logo-white.png";

import {
  primaryColor,
  defaultFont
} from "assets/jss/nextjs-material-kit-pro.js";





const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  active: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  completed: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  line: {
    borderColor: '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center'     
  },
  active: {
    color: '#784af4',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22    
  },
  active: {
    '& $line': {
      // backgroundImage:
      //   'linear-gradient(90deg, rgba(66,92,199,1) 0%, rgba(59,191,173,1) 100%);',
      backgroundColor:
        '#ffffff',
    },
  },
  completed: {
    '& $line': {
      // backgroundImage:
      //   'linear-gradient(90deg, rgba(66,92,199,1) 0%, rgba(59,191,173,1) 100%);',
      backgroundColor:
        '#ffffff',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#ccc',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    // backgroundColor: '#ccc',
    // backgroundColor: '#ffffff',
    backgroundColor: '#ccc',
    // backgroundColor: primaryColor[0],
    zIndex: 1,
    // color: '#fff',
    color: primaryColor[0],
    width: 50,
    height: 50,
    display: 'flex',    
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },  
  active: {
    // backgroundImage:
    //   'linear-gradient(90deg, rgba(66,92,199,1) 0%, rgba(59,191,173,1) 100%)',
    // boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    backgroundColor:
        '#ffffff',
  },
  completed: {
    // backgroundImage:
    //   'linear-gradient(90deg, rgba(66,92,199,1) 0%, rgba(59,191,173,1) 100%);',
    backgroundColor:
        '#ffffff',
  }  
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <AccountCircleIcon />,
    2: <PaymentIcon />,
    3: <FavoriteIcon />,
    4: <ShoppingCartIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // backgroundColor: "#ffffff"
    backgroundColor: primaryColor[0]
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  }, 
  progress: {
    // display: "none
    margin: "0 auto"
  },
  textCenter: {
    textAlign: "center",
    minHeight: "65vh",
    backgroundColor: "#f7f7f7"
  },
  imgLogo: {
    maxHeight: "90px",
    margin: "0 auto"
  },
  containerLogo: {
    // textAlign: "center",
    display: "flex",
    alignItems: "center"
  },
  containerStep: {
    padding: "8px",
    "@media (max-width: 350px)": {
      paddingBottom: "10px"
    },
    backgroundColor: primaryColor[0],
    '& .MuiStepLabel-label.MuiStepLabel-alternativeLabel': {
      ...defaultFont,
      color: "#ccc",      
      // visibility: "hidden",
      fontWeight: 500,    
      // wordBreak: "break-all",
      "@media (max-width: 576px)": {
        display: "none",
        paddingBottom: "10px"
      },        
      "@media (max-width: 350px)": {
        position: "absolute",
        width: "100px",
        marginLeft: "-24px"
      },        
    },
    '& .MuiStepLabel-active': {      
      fontWeight: "900 !important" ,
      // display: "block !important",
      color: "#ffffff !important"
    },
    '& .MuiStepLabel-completed': {                  
      color: "#ffffff !important"
    }

  },  
  containerTopo: {
    padding: 0,
    margin: 0
  }
}));

function getSteps() {
  return ['Identificação', 'Pagamento', 'Sobre você', "Finalização"];
}






export default function CustomizedSteppers() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [activeAnamnese, setActiveAnamnese] = React.useState(0);

  const [showModal, setShowModal] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);  

  const [messageReturn, setMessageReturn] = React.useState({
    code: "000",
    msg: "Erro ao enviar dados. Tente mais tarde"
  })

  const [dataSale, setDataSale] = React.useState({
    
    // customer: {
    //     companyBranchId :15956,
    //     name :"LETICIA CLUG BASTOS GAMA",
    //     birthDate:"1994-02-20",
    //     sex:"F",
    //     email:"LETICIACLUG@HOTMAIL.COM",
    //     document:"41410072851",
    //     isForeigner: false,
    //     phones: [
    //       {
    //           type: "cellphone",
    //           number: "1199911-2140"
    //       }
    //     ],
    //     address: {
    //       address: "Rua Marcelino",
    //       number: "243",
    //       complement: "",
    //       district: "Santo andré",
    //       city: "São Paulo",
    //       state: "SP",
    //       postalCode:"09180020"
    //     },
    //     financeResponsible:{          
    //       name: "LETICIA CLUG BASTOS GAMA",
    //       document: "41410072851",
    //       email: "LETICIACLUG@HOTMAIL.COM",
    //       phone: "1199911-2140",
    //       active: true
    //     },
    //     planData:{
    //       companyBranchId:15956,
    //       planId:344722,
    //       consultantId:11650531,
    //       promotionId:0,
    //       startDate:"2020-07-31",
    //       dueDate:"2020-07-31"
    //     },
    //     "paymentMethod":"creditCard",
    //     card:{          
    //       number: "41410072851",
    //       name: "LETICIA CLUG BASTOS GAMA",
    //       valid: "12/20",
    //       cvv: "782",
    //       brand: 1
    //     },
    //     dcc: {
    //       agencia: "",
    //       conta: "",
    //       nome: "",
    //       cpf: ""
    //     },
    //     "anamnese":{
    //       "idade" :"",
    //       "altura" :"",
    //       "objetivo":"",
    //       "habitoTreino" :"",
    //       "frequenciaTreino" :"",
    //       "fazMusculacao" :"",
    //       "fazAulas" :"",
    //       "sedentario" :"",
    //       "sedentarioTempo" :"",
    //       "reclusaoTreino":"SIM",
    //       "tempoPorDia":"",
    //       "periodo" :"",
    //       "peso" :"",
    //       "patologia" :"",
    //       "outroPatologia" :"",
    //       "osseoArticular" :"",
    //       "qualOsseoArticular" :"",
    //       "cirurgia" :"",
    //       "qualCirurgia" :"",
    //       "internacao" :"",
    //       "qualInternacao" :"",
    //       "medicamento" :"",
    //       "qualMedicamento" :"",
    //       "fuma" :"",
    //       "nutricionista" :"",
    //       "personalTrainer" :"",
    //       "equipamentos" :"",
    //       "status" :"",
    //       "unidade" :"",
    //       "aluno" :"",
    //       optinSms: true,
    //       optinEmail: true,
    //       optinTelegram: true,
    //       aceiteTermos: true

    //     }
    // }


    
      "unidade":1,
      "plano":2,
      "nome":"TESTE4",
      "cpf":"849.429.674-49",
      "dataNascimento":"01/01/2000",
      "sexo":"M",
      "email":"teste@api.com",
      "numeroCartao":"5475849254163103",
      "nomeCartao":"TESTE A P SILVA",
      "cvv":"123",
      "validade":"12/2022",
      "telefone":"(11)91111-1111",
      "endereco":"AVENIDA DO DEBUG",
      "numero":"666",
      "bairro":"VILA DEVELOPER",
      "complemento":null,
      "cep":"09812580",
      "diaVencimento":"5",
      "nrVezesDividir":"12",
      "numeroCupomDesconto":null,
      "cpftitularcard":"849.429.674-49",
      "vencimentoFatura": "1",
      "produtos":[],
      "cobrarParcelasEmAberto":true,
      "anamnese":
          {
              "idade":"21",
              "altura":"1.70",
              "objetivo":"TESTE",
              "habitoTreino":"TESTE",
              "frequenciaTreino":"2",
              "fazMusculacao":"Sim",
              "fazAulas":"Sim",
              "sedentario":"Sim",
              "sedenTariotempo":"2 anos",
              "reclusaoTreino":"Sim",
              "tempoPorDia":"2",
              "periodo":"Tarde",
              "peso":"85",
              "patologia":"dfdfdfd",
              "outroPatologia":"dsdsdsd",
              "osseoArticular":"Sim",
              "qualOsseoArticular":"dsdsdsd",
              "cirurgia":"não",
              "qualCirurgia":"",
              "internacao":"não",
              "qualInternacao":"",
              "medicamento":"não",
              "qualMedicamento":"",
              "fuma":"sim",
              "nutricionista":"Sim",
              "peronalTrainer":"Sim",
              "created_at":"27/11/2020",
              "updated_at":"27/11/2020",
              "equipamentos":"dqdwdww",
              "status":"Ativo",
              "unidade":"1",
              "aluno":"TESTE",
              "optinSms":true,
              "optinEmail":true,
              "optinTelegram":true,
              "aceiteTermos":true
          }
      
   
   

  });

  const steps = getSteps();
  const theme = useTheme();



  const handleNext = (type) => {
 
    switch (type) {
      case "Checkout":
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        return
      case "Anamnese":        
        if (activeAnamnese === 4){
          setActiveStep((prevActiveStep) => prevActiveStep + 1);   
        } else {
          setActiveAnamnese((prevActiveStep) => prevActiveStep + 1);   
        }  
        return
      default:
        return 
    }    
  };

  const handleBack = (type) => {
    switch (type) {
      case "Checkout":
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        return
      case "Anamnese":
        if (activeAnamnese === 0){
          setActiveStep((prevActiveStep) => prevActiveStep - 1);   
        } else {
          setActiveAnamnese((prevActiveStep) => prevActiveStep - 1);   
        }
        return
      default:
        return 
    }    
  };

  const handleReset = () => {
    setActiveStep(0);  
    setActiveAnamnese(0);      
  };
  
  const sendDataForm = () => {
        
    fetchData(dataSale);    
    
  };

  const  getStepContent = (step) => {
    switch (step) {
      case 0:
        return <SectionIdentification setDataSale={setDataSale} setStepCheckout={setActiveStep} setShowModal={setShowModal} setMessageReturn={setMessageReturn} />;
      case 1:
        return <SectionPayment setDataSale={setDataSale} setStepCheckout={setActiveStep} />;
      case 2:
        return <SectionAnamnese setDataSale={setDataSale} setStepCheckout={setActiveStep} isLoading={isLoading}  />
      case 3:
        return <SectionFinish dataSale={dataSale} />
      default:
        return 'Unknown step';
    }
  }
  


  const fetchData = async (dataSend) => {    
    setIsLoading(true);
    axios.defaults.headers.post['Content-Type'] ='application/json';    
    // await axios.post(`https://admin.justfit.com.br/homologacao/api/LoadPersonalOnline/Post`, dataSend )
    // await axios.post(`https://admin.justfit.com.br/app.justfit/api/LoadPersonalOnline/Post`, dataSend )
    await axios.post(`https://admin.justfit.com.br/app.justfit/api/iAPIClicou/CheckoutClicou`, dataSend )
      .then(res => {
        console.log(res);
        try {          
          if(res.data.code == "0"){            
            setActiveStep(3);
          }  else {
            setDataLog(dataSend);
            setMessageReturn( prev => {
              return {
                code: res.data.code,
                msg: res.data.msg
              }
            });
            setShowModal(true);
          }
        } catch (error) {
            setMessageReturn( prev => {
              return {
                code: "000",
                msg: "Erro ao enviar dados. Tente mais tarde"
              }
            });
            setShowModal(true);
            console.log(error);
        }

      })
      .catch((error) => {
        setMessageReturn( prev => {
          return {
            code: "000",
            msg: "Erro ao enviar dados. Tente mais tarde"
          }
        });
        setShowModal(true);
        console.log(error);        
      })
      .finally(() => {
        console.log("finally");
        setIsLoading(false);
      });
  };
  
  const setDataLog = async (dataSend) => {    
    axios.defaults.headers.post['Content-Type'] ='application/json';    
    await axios.post('./checkout/setLog.php', dataSend )
      .then(res => {
        console.log(res)
      })
      .catch((error) => {
        console.log(error);        
      })
      .finally(() => {
        console.log("finally");
      });
  };
  
  const fetchDataTest = async () => {
    // await axios.get(`https://api.fale.justfit.com.br/fechamentounidade/consultaExtrato?cpf=${cpf} 389.727.318-70`)
    // await axios.get(`https://api.fale.justfit.com.br/fechamentounidade/consultaExtrato?cpf=${cpf}`)
    // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.defaults.headers.post['Content-Type'] ='application/json';
    // await axios.post(`https://admin.justfit.com.br/homologacao/api/LoadPersonalOnline/Register`, {
    await axios.post(`https://admin.justfit.com.br/homologacao/api/LoadPersonalOnline/Post`, {
      "customer":{
         "companyBranchId":15956,
         "name":"Undefined",
         "birthDate":"1994-02-20",
         "sex":"F",
         "email":"LETICIACLUG@HOTMAIL.COM",
         "document":"41410072851",
         "isForeigner":false,
         "phones":[
            {
               "type":"cellphone",
               "number":"1199911-2140"
            }
         ],
         "address":{
            "address":"Rua Marcelino",
            "number":"243",
            "complement":"",
            "district":"Santo andré",
            "city":"São Paulo",
            "state":"SP",
            "postalCode":"09180020"
         },
         "financeResponsible":{
   
            "name":"LETICIA CLUG BASTOS GAMA",
            "document":"41410072851",
            "email":"LETICIACLUG@HOTMAIL.COM",
            "phone":"1199911-2140",
            "active":true
         },
         "planData":{
            "companyBranchId":15956,
            "planId":344912,
            "consultantId":10044113,
            "promotionId":0,
            "startDate":"2020-07-31",
            "dueDate":"2020-07-31"
         },
         "paymentMethod":"creditCard",
         "card":{     
            "number":"41410072851",
            "name":"LETICIA CLUG BASTOS GAMA",
            "valid":"12/20",
            "cvv":"782"
         },
         "anamnese":{
            "idade" :"25",
            "altura" :"1.75",
            "objetivo":"teste",
            "habitotreino" :"teste",
            "frequenciatreino" :"teste",
            "fazmusculacao" :"teste",
            "fazaulas" :"TESTE",
            "sedentario" :"TESTE",
            "sedentariotempo" :"TESTE",
            "reclusaotreino":"TESTE",
            "tempoporDia":"TESTE",
            "periodo" :"TESTE",
            "peso" :"60",
            "patologia" :"TESTE",
            "outropatologia" :"TESTE",
            "osseoarticular" :"TESTE",
            "qualosseoArticular" :"TESTE",
            "cirurgia" :"TESTE",
            "qualCirurgia" :"TESTE",
            "internacao" :"TESTE",
            "qualInternacao" :"TESTE",
            "medicamento" :"TESTE",
            "qualMedicamento" :"TESTE",
            "fuma" :"TESTE",
            "nutricionista" :"TESTE",
            "peronalTrainer" :"TESTE",
            "equipamentos" :"TESTE",
            "status" :"TESTE",
            "unidade" :"TESTE",
            "aluno" :"TESTE"
         }
      }
   })
      .then(res => {
        console.log(res);        
      })
      .catch((error) => {
        console.log(error);        
      })
      .finally(() => {
        console.log("finally");
      });
  };

  const fetchDataJust = async (cpf) => {    
    await axios.get(`https://api.fale.justfit.com.br/fechamentounidade/consultaExtrato?cpf=${cpf}`)
      .then(res => {
        console.log(res);                   
      })
      .catch((error) => {
        console.log(error);        
      })
      .finally(() => {
        console.log("finally");
      });
  };
  
  const fetchDataClicou = async () => {    
    await axios.get(`https://admin.justfit.com.br/homologacao/api/LoadPersonalOnline/getItem`)
      .then(res => {
        console.log(res);                   
      })
      .catch((error) => {
        console.log(error);        
      })
      .finally(() => {
        console.log("finally");
      });
  };
  const fetchDataClicouRegister = async () => {    
    // await axios.post(`https://admin.justfit.com.br/homologacao/api/LoadPersonalOnline/Post`, {
      
    //   "teste": "teste"
      
    // })
    await axios.post(`https://api.fale.justfit.com.br/solicitacoes`, {
      teste: "teste"
    })
      .then(res => {
        console.log(res);                   
      })
      .catch((error) => {
        console.log(error);        
      })
      .finally(() => {
        console.log("finally");
      });
  };


  // React.useEffect(() => {
    // fetchData();
    // fetchDataClicou();
    // fetchDataJust("389.727.318-70");
    // fetchDataClicouRegister();
    // setDataLog(dataSale);
  // }, []);


  const tagManagerArgs = {
    gtmId: 'GTM-WPLTJG8'
  }
  
  React.useEffect(() => {

    async function initializeTagManager() {
      await TagManager.initialize(tagManagerArgs);
      TagManager.dataLayer({
        dataLayer: {
          event: "teste",
          userId: '001',
          userProject: 'project',
          page: 'home'
        },          
      })
    }
    initializeTagManager();    
    
  }, []);
  
  
  React.useEffect(() => {
    console.log("dataSale");
    console.log(dataSale);

     if(activeStep == 2){
      fetchData(dataSale);
    }
    
  }, [ dataSale ]);
  
  React.useEffect(() => {
    console.log("activeStep");    
    console.log(activeStep);   
    
    // if(activeStep == 3){
    //   fetchData(dataSale);
    // }

  }, [ activeStep ]);


  return (
    <>

      <Head>
          <title>Checkout - Clicou Personal</title>
          {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
      </Head>
      
      <div className={classes.root}>   

      <GridContainer justify="center" className={classes.containerTopo}> 
        <GridItem xs={12} sm={12} md={2} className={classes.containerLogo}>
          <a href="https://clicoupersonal.com.br" style={{ margin: "0 auto" }}>
            <img src={logo} alt="..." className={classes.imgLogo} />
          </a>
        </GridItem> 
        <GridItem xs={12} sm={12} md={10}>
          <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />} className={classes.containerStep}>
            {steps.map((label) => (
              <Step key={label}>              
                <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

        </GridItem> 
      </GridContainer>

      <SectionModal setActive={0} setShowModal={setShowModal} showModal={showModal} messageReturn={messageReturn} />
        

        <div className={classes.textCenter}>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={handleReset} className={classes.button}>
                Reset
              </Button>
            </div>
          ) : (
            <>
              { activeStep === 10 ? (

                <div>                  
                  {getStepContent(activeStep)}                
                  <div>
                    {/* <Button disabled={activeStep === 0} onClick={() => handleBack("Anamnese")} className={classes.button}>
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleNext("Anamnese")}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button> */}
                  </div>
                </div>

              ) : (

                <div>
                  
                  <Grow 
                    in={true}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(true ? { timeout: 1000 } : {})}
                  >                    
                    {getStepContent(activeStep)}                    
                  </Grow>           
                  <div>
                    {/* <Button disabled={activeStep === 0} onClick={() => handleBack("Checkout")} className={classes.button}>
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleNext("Checkout")}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button> */}
                  </div>
                </div>

              )}
            </>
            
          )}
        </div>


        {/* { activeStep === 2 && (
          <MobileStepper
            variant="progress"
            steps={5}
            position="static"
            activeStep={activeAnamnese}
            // className={classes.root}
            classes={{
              root: classes.root,          
              progress: classes.progress,
            }}
          />
        )} */}
        

        <SectionFooter/>

      </div>
    </>
  );
}
