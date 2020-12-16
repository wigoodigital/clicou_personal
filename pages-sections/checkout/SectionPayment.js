import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';
// react components used to create a google map
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import TagManager from 'react-gtm-module';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Box from '@material-ui/core/Box';
// @material-ui/icons
import PinDrop from "@material-ui/icons/PinDrop";
import Phone from "@material-ui/icons/Phone";
import Check from "@material-ui/icons/Check";
import Email from "@material-ui/icons/Email";
import EventIcon from '@material-ui/icons/Event';
import Favorite from "@material-ui/icons/Favorite";
import AssignmentInd from "@material-ui/icons/AssignmentInd";
import CircularProgress from '@material-ui/core/CircularProgress';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import FormHelperText from '@material-ui/core/FormHelperText'; 

import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';

import Grow from '@material-ui/core/Grow';


import InputMask from "react-input-mask";
import MaskedInput from 'react-text-mask';
import PropTypes from 'prop-types';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers';
import * as yup from "yup";
import { setLocale } from 'yup';

import checkoutStyle from "assets/jss/nextjs-material-kit-pro/pages/checkoutSections/checkoutStyle.js";

import chipCard from "assets/img/icon-cartoes/icon-chip.png";
import visa from "assets/img/icon-cartoes/icon-visa.png";
import mastercard from "assets/img/icon-cartoes/icon-master.png";
import diners from "assets/img/icon-cartoes/icon-diners.png";
import amex from "assets/img/icon-cartoes/icon-amex.png";
import discover from "assets/img/icon-cartoes/icon-discover.png";
import hipercard from "assets/img/icon-cartoes/icon-hipercard.png";
import elo from "assets/img/icon-cartoes/icon-elo.png";
import jcb from "assets/img/icon-cartoes/icon-jcb.png";
import aura from "assets/img/icon-cartoes/icon-aura.png";
import nocard from "assets/img/icon-cartoes/icon-nocard.png";

const useStyles = makeStyles(checkoutStyle);

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}      
      mask={[/[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/]}
      placeholderChar={'\u2000'}
      guide={false}
      showMask
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};


function ValidadeMask(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}      
      mask={[/[0-9]/, /[0-9]/, '/', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
      placeholderChar={'\u2000'}
      guide={false}
      showMask
    />
  );
}

ValidadeMask.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

function CVVMask(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      // mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      mask={[/[0-9]/, /[0-9]/, /[0-9]/]}
      placeholderChar={'\u2000'}
      guide={false}
      showMask
    />
  );
}

CVVMask.propTypes = {
  inputRef: PropTypes.func.isRequired,
};


function CardMask(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      // mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      mask={[/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, ' ', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, ' ', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, ' ', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/ ]}
      placeholderChar={'\u2000'}
      guide={false}
      showMask
    />
  );
}

CardMask.propTypes = {
  inputRef: PropTypes.func.isRequired,
};




setLocale({  
  mixed: {
    notType: function notType(_ref) {
      switch (_ref.type) {
        case 'number':
          return 'deve ser um número';
        case 'string':
          return 'deve ser um texto';
        default:
          return 'formato errado';
      }
    },
    default: 'é inválido',
    required: 'Desculpe, este campo é obrigatório',
    oneOf: 'deve ser um dos seguintes valores: ${values}',
    notOneOf: 'não pode ser um dos seguintes valores: ${values}',
  },
  string: {
      length: 'deve ter exatamente ${length} caracteres',
      min: 'deve ter pelo menos ${min} caracteres',
      max: 'deve ter no máximo ${max} caracteres',
      email: 'Por favor, informe um e-mail inválido',
      url: 'deve ter um formato de URL válida',
      trim: 'não deve conter espaços no início ou no fim.',
      lowercase: 'deve estar em maiúsculo',
      uppercase: 'deve estar em minúsculo',
  },
  number: {
      min: 'deve ser no mínimo ${min}',
      max: 'deve ser no máximo ${max}',
      lessThan: 'deve ser menor que ${less}',
      moreThan: 'deve ser maior que ${more}',
      notEqual: 'não pode ser igual à ${notEqual}',
      positive: 'deve ser um número posítivo',
      negative: 'deve ser um número negativo',
      integer: 'deve ser um número inteiro',      
  },
      date: {
      min: 'deve ser maior que a data ${min}',
      max: 'deve ser menor que a data ${max}',
  },
      array: {
      min: 'deve ter no mínimo ${min} itens',
      max: 'deve ter no máximo ${max} itens',
  }
});


const regexCPF = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/gm;
function cpfValidate(cpf) {
	console.log("Validatring", cpf);
	return cpf.length > 10
}

function isValidCPF(cpf) {
  if (typeof cpf !== "string") return false
  cpf = cpf.replace(/[\s.-]*/igm, '')
  if (
      !cpf ||
      cpf.length != 11 ||
      cpf == "00000000000" ||
      cpf == "11111111111" ||
      cpf == "22222222222" ||
      cpf == "33333333333" ||
      cpf == "44444444444" ||
      cpf == "55555555555" ||
      cpf == "66666666666" ||
      cpf == "77777777777" ||
      cpf == "88888888888" ||
      cpf == "99999999999" 
  ) {
      return false
  }
  var soma = 0
  var resto
  for (var i = 1; i <= 9; i++) 
      soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i)
  resto = (soma * 10) % 11
  if ((resto == 10) || (resto == 11))  resto = 0
  if (resto != parseInt(cpf.substring(9, 10)) ) return false
  soma = 0
  for (var i = 1; i <= 10; i++) 
      soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i)
  resto = (soma * 10) % 11
  if ((resto == 10) || (resto == 11))  resto = 0
  if (resto != parseInt(cpf.substring(10, 11) ) ) return false
  return true
}

function isValidPhone(phone){
  return /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/.test(phone);
}

function isValidDate(date) {
  return /^((((0?[1-9]|[12]\d|3[01])[\.\-\/](0?[13578]|1[02])      [\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|[12]\d|30)[\.\-\/](0?[13456789]|1[012])[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|1\d|2[0-8])[\.\-\/]0?2[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|(29[\.\-\/]0?2[\.\-\/]((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00)))|(((0[1-9]|[12]\d|3[01])(0[13578]|1[02])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|[12]\d|30)(0[13456789]|1[012])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|1\d|2[0-8])02((1[6-9]|[2-9]\d)?\d{2}))|(2902((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00))))$/.test(date);
}

function isValidDateCard(date) {
  // return /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/.test(date);
  return /^((0[1-9])|(1[0-2]))\/((2009)|(20[1-2][0-9]))$/.test(date);
}


function getCardFlag(cardnumber) {
  var cardnumber = cardnumber.replace(/[^0-9]+/g, '');

  var cards = {
      visa      : /^4[0-9]{12}(?:[0-9]{3})/,
      mastercard : /^5[1-5][0-9]{14}/,
      diners    : /^3(?:0[0-5]|[68][0-9])[0-9]{11}/,
      amex      : /^3[47][0-9]{13}/,
      discover  : /^6(?:011|5[0-9]{2})[0-9]{12}/,
      hipercard  : /^(606282\d{10}(\d{3})?)|(3841\d{15})/,
      elo        : /^((((636368)|(438935)|(504175)|(451416)|(636297))\d{0,10})|((5067)|(4576)|(4011))\d{0,12})/,
      jcb        : /^(?:2131|1800|35\d{3})\d{11}/,       
      aura      : /^(5078\d{2})(\d{2})(\d{11})$/     
  };

  for (var flag in cards) {
      if(cards[flag].test(cardnumber)) {
          return flag;
      }
  }       

  return false;
}


yup.addMethod(yup.string, "cpf", function(message) {
	// return yup.mixed().test("cpf", message || "número de CPF inválido", value => cpfValidate(value));
	return yup.mixed().test("cpf", message || "número de CPF inválido", value => isValidCPF(value));
});

yup.addMethod(yup.string, "phone", function(message) {	
	return yup.mixed().test("phone", message || "número de celular inválido", value => isValidPhone(value));
});

yup.addMethod(yup.string, "date", function(message) {	
	return yup.mixed().test("date", message || "data inválida", value => isValidDate(value));
});

yup.addMethod(yup.string, "dateCard", function(message) {	
	return yup.mixed().test("date", message || "Por favor, digite uma data válida", value => isValidDateCard(value));
});

yup.addMethod(yup.string, "card", function(message) {	
	return yup.mixed().test("card", message || "Por favor, digite um número de cartão válido", value => getCardFlag(value));
});




const SignupSchema = yup.object().shape({  
  id: yup
    .string(),    
  number: yup
    .string()
    .card()
    .required(),  
  name: yup
    .string()
    .required(),
  validade: yup
    .string()
    .dateCard()
    .required(),
  cvv: yup
    .string()
    .matches(/^[0-9]{3}$/, 'Por favor, digite um CVV válido') 
    .required(),   
  cpf: yup
    .string()
    .cpf("Por favor, informe um CPF válido") 
    .required(), 
  cupom: yup
    .string()
      
    

});


const formatValueParcela = (value) => {
  let returnValue =  new String(value).replace(",", ".");  
  return parseFloat(returnValue).toFixed(2); 
}

const formatValuePresentation = (value) => {
  let returnDecimal = formatValueParcela(value);
  let returnValue =  new String(returnDecimal).replace(".", ",");
  return returnValue;    
}

const descontoTotal = (premios, plan) => {
 
  let valorDesconto = 0.0;

  premios.listaPremios.map((premio, i) => {
    console.log("formatValueParcela(premio.valorDesconto)" );
    console.log(formatValueParcela(premio.valorDesconto) );
    valorDesconto = parseFloat( valorDesconto + parseFloat(premio.valorDesconto) );



    valorDesconto = parseFloat( valorDesconto + ( plan.mensalidade * ( parseFloat(premio.percentualDesconto) / 100 ) ) );
  })

  console.log("valorDesconto");
  console.log(valorDesconto);

  return parseFloat( valorDesconto );    
}

const descontoParcela = (descontos, parcela) => {
 
  let valorParcela = formatValueParcela(parcela);

  valorParcela = valorParcela - formatValueParcela(descontos.valorDesconto);

  valorParcela = valorParcela - ( parcela * ( parseFloat(descontos.percentualDesconto) / 100 ) )


  console.log("valorParcela");
  console.log(valorParcela);

  return parseFloat( valorParcela ).toFixed(2);    
}



// const schema = yup.object().shape({
//   first: yup.string().required(),
//   age: yup.number().positive().integer().required(),
// });

export default function SectionPayment(props) {
  // const { register, errors, handleSubmit} = useForm({
  //   validationSchema: SignupSchema
  // });
  const { register, getValues, trigger, handleSubmit, errors } = useForm({
    resolver: yupResolver(SignupSchema),
    mode: "onBlur"
    // mode: "onChange"
  });
  const onSubmit = data => {
    console.log(data);
    // alert(JSON.stringify(data, null));
  };


  useEffect(() => {        
    // history.pushState({}, null, "/checkout/payment");
    TagManager.dataLayer({
      dataLayer: {
        event: "paymentView",
        userId: '001',
        userProject: 'project',
        page: 'home'
      },          
    })

    TagManager.dataLayer({
      dataLayer: {
        'event': 'checkoutOption',
        'ecommerce': {
          'checkout_option': {
            'actionField': {'step': 2}
          }
        }       
      },          
    })

    getPlan();

  }, []);


  const [checked, setChecked] = React.useState([]);
  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  const [isAluno, setIsAluno] = React.useState(false);
  const [activeForm, setActiveForm] = React.useState(0);
  // const [activeField, setActiveField] = React.useState("first");
  const [activeField, setActiveField] = React.useState(["id","number","name","validade", "cvv", "cpf", "cupom"]);
  const [isDisableNext, setIsDisableNext] = React.useState(true);
  const [isLoadingCupom, setIsLoadingCupom] = React.useState(false);  
  const [insertCupom, setInsertCupom] = React.useState(false);
  const [listaPremios, setListaPremios] = React.useState(
    {
      numeroCupom: "",
      listaPremios: [
        {
          percentualDesconto: "10",
          valorDesconto: "10",
          descricaoPremio: "PARCELA 1",
          tipoPremio: "MENSALIDADE"
        },
        {
          percentualDesconto: "10",
          valorDesconto: "0",
          descricaoPremio: "PARCELA 2",
          tipoPremio: "MENSALIDADE"
        },
        {
          percentualDesconto: "10",
          valorDesconto: "0",
          descricaoPremio: "PARCELA 3",
          tipoPremio: "MENSALIDADE"
        },
        {
          percentualDesconto: "10",
          valorDesconto: "0",
          descricaoPremio: "PARCELA 4",
          tipoPremio: "MENSALIDADE"
        },
        {
          percentualDesconto: "10",
          valorDesconto: "0",
          descricaoPremio: "PARCELA 5",
          tipoPremio: "MENSALIDADE"
        },
        {
          percentualDesconto: "10",
          valorDesconto: "0",
          descricaoPremio: "PARCELA 6",
          tipoPremio: "MENSALIDADE"
        },
        {
          percentualDesconto: "10",
          valorDesconto: "0",
          descricaoPremio: "PARCELA 7",
          tipoPremio: "MENSALIDADE"
        },
        {
          percentualDesconto: "10",
          valorDesconto: "0",
          descricaoPremio: "PARCELA 8",
          tipoPremio: "MENSALIDADE"
        },
        {
          percentualDesconto: "10",
          valorDesconto: "0",
          descricaoPremio: "PARCELA 9",
          tipoPremio: "MENSALIDADE"
        },
        {
          percentualDesconto: "10",
          valorDesconto: "0",
          descricaoPremio: "PARCELA 10",
          tipoPremio: "MENSALIDADE"
        },
        {
          percentualDesconto: "10",
          valorDesconto: "0",
          descricaoPremio: "PARCELA 11",
          tipoPremio: "MENSALIDADE"
        },
        {
          percentualDesconto: "10",
          valorDesconto: "0",
          descricaoPremio: "PARCELA 12",
          tipoPremio: "MENSALIDADE"
        },
       
   
      ]
    }
  );
  const [plan, setPlan] = React.useState(
    {
      "parcelamentoOperadora":"True",
      "maxDivisao":1,
      "descricaoEncantamento":"",
      "nome":"",
      "mesAnuidade":"Parcela 0",
      "codigo":2,
      "adesao":0.0,
      "anuidade":0.0,
      "horario":"LIVRE",
      "fidelidade":12,
      "mensalidade":39.9,
      "primeiraParcela":39.9,
      "valorProdutos":0.0,
      "produtos":"",
      "inicioMinimo":null,
      "modalidades":[
         "ONLINE"
      ],
      "diasVencimento":[
         
      ],
      "inicioFuturo":"False",
      "anuidadeAgora":"False",
      "qtdCreditoPlanoCredito":"0",
      "regimeRecorrencia":"False",
      "matricula":"0.0",
      "parcelasAnuidade":[
         
      ]
   }
  );
       
  const [error, setError] = useState(false);

  const [activeCard, setActiveCard] = React.useState(nocard);

  const [cardField, setCardField] = React.useState({    
    number: "0000 0000 0000 0000",
    name: "NOME IMPRESSO NO CARTÃO",
    valid: "00/00",
    cvv: "000", 
    cpf: ""   
  });


  const handleNext = async (type) => {

    console.log(activeField);
    const result = await trigger(activeField);
    // const result = await trigger();
    console.log(result);    

    console.log("cupom");
    console.log(getValues("cupom"));
    getCupom(getValues("cupom"));
  

    if(result) {       
      console.log(getValues());
      const cardForm = getValues();
      const codBrand= getBrandCod(cardForm.number);      


      if(activeForm == 0){   
        
        let hoje = new Date();
        let dia = ("0" + (hoje.getDate())).slice(-2);
        let mes = ("0" + (hoje.getMonth() + 1)).slice(-2);
        let ano = hoje.getFullYear();
        let anoFinal = hoje.getFullYear() + 1;

        props.setDataSale( prevDataSale => {
          return {  
               
              ...prevDataSale,
              numeroCartao: cardForm.number.replace(/\s+/g, ''),
              nomeCartao: cardForm.name,
              cvv: cardForm.cvv,
              validade: cardForm.validade,
              // brand: codBrand,
              cpftitularcard: cardForm.cpf,  
              numeroCupomDesconto: cardForm.cupom,            
              anamnese:{
                ...prevDataSale.anamnese,                
                // created_at: dia + "/" + mes + "/" + ano,
                // updated_at: dia + "/" + mes + "/" + ano,
              },                  
          }
        });    
        props.setStepCheckout(2);
      }else {
        setActiveForm((prevActiveStep) => prevActiveStep + 1);
        handleFieldActive(activeForm + 1);                
      }
    }
        

  };

  React.useEffect(() => {

    // props.setDataSale( prevDataSale => {
    //   return {  
    //     customer: {     
    //     ...prevDataSale.customer,
    //     card : {
    //       ...prevDataSale.card,
    //       ...cardField 
    //     }  
    //     }         
    //   }
    // });    

    console.log(cardField.number.replace(/\s+/g, ''));
    
  }, [ ]);



  const handleBack = (type) => {

    if(activeForm !== 0){
      setActiveForm((prevActiveStep) => prevActiveStep - 1);  
      handleFieldActive(activeForm - 1); 
    }else{
      props.setStepCheckout(0);
    }

  };

  const handleFocus = (event) => {
    // event.target.select()

    if(event.target.value == ""){      
      event.target.selectionStart = 0;
      event.target.selectionEnd = 0;      
    } else {
      event.target.select();      
    }
    
  };


  const handleFieldActive = (step) => {

    console.log("handleFieldActive");

    switch (step) {
      case 0:       
        setActiveField(["id","number","name","validade", "cvv", "cpf"]);
        break;
      case 1:
        setActiveField(["nome","email","telefone","dataNascimento"]);
        break;      
      case 2:
        setActiveField(["cep","endereco","numero", "complemento","bairro", "estado", "cidade"]);
        break;      
      default:
        setActiveField(["id","number","name","validade", "cvv"]);
        break;
    }

    console.log(step);
    // console.log(activeField);

  };


  
  
  const [payment, setPayment] = React.useState({
    "paymentMethod": "creditCard",
    "card": {
			"id": 123456,
			"number": "5464082622239784",
			"name": "nome no cartão",
			"valid": "12/2022",
      "cvv": "782",
      "brand": 1
		}

  });




  const getPlan = async () => {    
    await axios.get(`https://admin.justfit.com.br/app.justfit/api/iAPIClicou/planosUnidade?codUnidade=1`)
      .then(res => {        
        console.log(res.data);
        props.setDataSale( prevDataSale => {
          return {                 
            ...prevDataSale,
            unidade: 1,
            plano: res.data.planos[0].codigo                     
          }
        });    
        
        setPlan(res.data.planos[0]);
        
      })
      .catch((error) => {
        console.log(error);        
      })      
  };


  const getBrandCod = (numberCard) => {
    let brandCard = getCardFlag(numberCard);
    switch (brandCard) {
      case "visa":                
        return 1;
        break;
      case "mastercard":        
        return 2;
        break;      
      case "diners":        
        return 3;
        break;  
      case "amex":        
        return 4;
        break;    
      case "discover":        
        return 8;
        break;    
      case "hipercard":        
        return 9;
        break;    
      case "elo":        
        return 6;
        break;    
      case "jcb":        
        return 7;
        break;    
      case "aura":        
        return 5;
        break;      
      default:
        return 0;        
        break    
      }
  }

  const handlerOnBlur = (event) => {
    let brandCard = getCardFlag(event.target.value);

    let brandCod = 0
    // handleFocus(event);

    switch (brandCard) {
      case "visa":        
        setActiveCard(visa);
        brandCod = 1;
        break;
      case "mastercard":
        setActiveCard(mastercard);
        brandCod = 2;
        break;      
      case "diners":
        setActiveCard(diners);
        brandCod = 3;
        break;  
      case "amex":        
        setActiveCard(amex);
        brandCod = 4;
        break;    
      case "discover":        
        setActiveCard(discover);
        brandCod = 8;
        break;    
      case "hipercard":        
        setActiveCard(hipercard);
        brandCod = 9;
        break;    
      case "elo":        
        setActiveCard(elo);
        brandCod = 6;
        break;    
      case "jcb":        
        setActiveCard(jcb);
        brandCod = 7;
        break;    
      case "aura":        
        setActiveCard(aura);
        brandCod = 5;
        break;      
      default:
        setActiveCard(nocard);
        break;
    }

    console.log(brandCod);

    setCardField( {
      number: getValues("number"),
      name: getValues("name"),
      valid: getValues("validade"),
      cvv: getValues("cvv"),
      brand: brandCod

    })


  }
  const handlerOnChange = (event) => {
    setCardField( {
      number: getValues("number"),
      name: getValues("name"),
      valid: getValues("validade"),
      cvv: getValues("cvv")
    })

  }


  const getCardFlag = (cardnumber) => {
    var cardnumber = cardnumber.replace(/[^0-9]+/g, '');


    var cards = {
        visa      : /^4[0-9]{12}(?:[0-9]{3})/,
        mastercard : /^5[1-5][0-9]{14}/,
        diners    : /^3(?:0[0-5]|[68][0-9])[0-9]{11}/,
        amex      : /^3[47][0-9]{13}/,
        discover  : /^6(?:011|5[0-9]{2})[0-9]{12}/,
        hipercard  : /^(606282\d{10}(\d{3})?)|(3841\d{15})/,
        elo        : /^((((636368)|(438935)|(504175)|(451416)|(636297))\d{0,10})|((5067)|(4576)|(4011))\d{0,12})/,
        jcb        : /^(?:2131|1800|35\d{3})\d{11}/,       
        aura      : /^(5078\d{2})(\d{2})(\d{11})$/     
    };

    for (var flag in cards) {
        if(cards[flag].test(cardnumber)) {
            return flag;
        }
    }       

    return nocard;
}

const getCupom = async (cupom) => {    
  setIsLoadingCupom(true);  
  setInsertCupom(false);
  setError(false);  

  await axios.post(`https://admin.justfit.com.br/app.justfit/api/LoadPersonalOnline/GetCupomInfo?cupom=${cupom}`)
    .then(res => {

      if(res.data.code != "0"){
        console.log("error getCupom");    
        setError(true);    
        return false;
      }
      console.log(res.data);     
      
      // const withoutAspas = new String(res.data.cupom).replace(/[']/g,'"');           
      // const withoutAspas2 = new String(withoutAspas).replace('"return":"{"','"return": {"');     
      // const withoutAspas3 = new String(withoutAspas2).replace('}"}', '}}');   
      
      // console.log(JSON.parse(withoutAspas3));     

      console.log(res.data.cupom.cupom);     
      
      setInsertCupom(true);

      setListaPremios(res.data.cupom.cupom);
      window.scrollTo(0, 0);
      

      
    })
    .catch((error) => {
      console.log(error);
      setError(true);
    })
    .finally(() => {
      setIsLoadingCupom(false);  
    });
};


const  getPremios = (premios) => {

  return (
    <GridItem xs={12} sm={12} md={12}>   
      {/* <Card pricing plain className={classes.marginZero}>
        <CardBody pricing plain> */}
          <h5 className={classes.cardCategory} style={{ color: "#425cc7" }}>Cupom aplicado</h5>                                                               
          <small style={{ fontSize: "1rem", fontWeight: "900" }}>{'\u00A0'} {premios.numeroCupom}</small>
          <ul className={classes.itensResumo}>
            {premios.listaPremios.map((premio, i) => ( 
              <>
                <li>
                  <GridContainer>
                    <GridItem xs={8} sm={8} md={8} style={ { textAlign: "left" } }>
                      {premio.descricaoPremio}  
                    </GridItem>                    
                    <GridItem xs={4} sm={4} md={4}>                        
                      { i == 0 ? (   
                        <>                   
                        R$ { formatValuePresentation( descontoParcela( listaPremios.listaPremios[i], plan.primeiraParcela ) ) } 
                        </>
                      ) : (
                        <>
                        R$ { formatValuePresentation( descontoParcela( listaPremios.listaPremios[i], plan.mensalidade ) ) }  
                        </>
                      )

                      }
                      
                    </GridItem>                    
                  </GridContainer>

                  
                </li>
              </>            
            ))}

            {premios.listaPremios.length < plan.fidelidade && ( 
              <li>
                <GridContainer>
                  <GridItem xs={8} sm={8} md={8} style={ { textAlign: "left" } }>
                    DEMAIS PARCELAS
                  </GridItem>                    
                  <GridItem xs={4} sm={4} md={4}>  
                    R$ {formatValuePresentation(plan.mensalidade)}
                  </GridItem>                    
                </GridContainer>
              </li>
            )}

            {/* <li>
              <Check/> Treinos Personalizados
            </li> */}
          </ul>
        {/* </CardBody> */}

      {/* </Card>                     */}
      
    </GridItem>
    )




}






  const classes = useStyles();
  return (
    <div className="cd-section" >
      {/* Contact us 1 START */}
      <div
        className={classes.contacts + " " + classes.section}
        // style={{ backgroundImage: `url(${city})` }}
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            {/* <GridItem xs={12} sm={12} md={8} className={classes.mlAuto}> */}
            <Box clone order={{ xs: 2, sm: 2, md: 1 }}>
              <GridItem xs={12} sm={12} md={5}>
                <Grow 
                  in={true}
                  style={{ transformOrigin: '0 0 0' }}
                  {...(true ? { timeout: 1000 } : {})}
                >
                  <Card className={classes.card1}>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <CardHeader
                      contact
                      color="primary"
                      className={classes.textCenter}
                    >
                      <h4 className={classes.cardTitle}>Pagamento</h4>
                    </CardHeader>

                    
                    <Grow 
                      in={activeForm === 0}
                      style={{ transformOrigin: '0 0 0', display: activeForm === 0 ? "block" : "none" }}
                      {...(activeForm === 0 ? { timeout: 1000 } : {})}
                    >

                      <CardBody>

                      

                      <Card color="info" className={classes.containerCart}>
                        <CardBody color className={classes.noPaddingBottom}>
                          {/* <div className={classes.containerCart}> */}
                            <h5 className={classes.cardCategorySocialWhite}>
                              <img src={chipCard}></img>
                              
                            </h5>
                            <h4 className={classes.cardTitleWhite}>
                              {cardField.number}
                            </h4>
                            <h4 className={classes.cardTitleWhite}>
                              {cardField.name}
                            </h4>
                          {/* </div> */}
                        </CardBody>
                        <CardFooter>
                          <div>
                            <a href="#pablo" onClick={e => e.preventDefault()}>                            
                              <span>Valid</span> {cardField.valid} &nbsp; &nbsp;
                              <span>CVV</span> {cardField.cvv}
                            </a>
                          </div>
                          <div
                            className={classes.statsWhite + " " + classes.mlAuto}
                          >
                            <img src={activeCard}></img>                    
                          </div>
                        </CardFooter>
                      </Card>

                        <GridContainer justify="center" className={ classes.containerFieldsCard }> 
                          <GridItem xs={12} sm={12} md={12}>
                            <CustomInput
                              labelText="Número do cartão *"
                              labelError={errors.number && errors.number.message}                          
                              error={errors.number ? true : false}
                              id="number"
                              formControlProps={{
                                fullWidth: true
                              }}
                              inputProps={{
                                type: "tel",
                                name: "number",
                                inputRef: register,
                                onClick: handleFocus,                              
                                inputComponent: CardMask,
                                onBlur: handlerOnBlur,
                                // startAdornment: (
                                //   <InputAdornment position="start">
                                //     <AssignmentInd className={classes.inputIconsColor} />
                                //   </InputAdornment>
                                // )                           
                              }}
                            />  
                          </GridItem>                   
                          <GridItem xs={12} sm={12} md={12}>
                          
                            <CustomInput
                              labelText="Nome impresso no cartão"
                              labelError={errors.name && errors.name.message}                          
                              error={errors.name ? true : false}
                              id="name"
                              formControlProps={{
                                fullWidth: true
                              }}                            
                              inputProps={{
                                name: "name",
                                inputRef: register,
                                onChange: handlerOnChange,                                                           
                              }}
                            />   
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>                                                            
                            <CustomInput
                              labelText="Validade (MM/AAAA)"
                              labelError={errors.validade && errors.validade.message}                          
                              error={errors.validade ? true : false}
                              id="validade"
                              formControlProps={{
                                fullWidth: true
                              }}
                              inputProps={{
                                type: "tel",
                                name: "validade",
                                inputRef: register,  
                                onClick: handleFocus,                              
                                inputComponent: ValidadeMask,
                                onChange: handlerOnChange,                                                                                                              
                              }}
                            /> 
                          </GridItem> 
                          <GridItem xs={12} sm={12} md={6}>                                                             
                            <CustomInput
                              labelText="CVV"
                              labelError={errors.cvv && errors.cvv.message}                          
                              error={errors.cvv ? true : false}
                              id="cvv"
                              formControlProps={{
                                fullWidth: true
                              }}
                              inputProps={{
                                type: "tel",
                                name: "cvv",
                                inputRef: register,                                
                                onClick: handleFocus,                              
                                inputComponent: CVVMask,
                                onChange: handlerOnChange,
                              }}
                            />        
                          </GridItem>   
                          <GridItem xs={12} sm={12} md={12}>
                          
                            <CustomInput
                              labelText="CPF do titular do cartão"
                              labelError={errors.cpf && errors.cpf.message}                          
                              error={errors.cpf ? true : false}
                              id="cpf"
                              formControlProps={{
                                fullWidth: true
                              }}                            
                              inputProps={{
                                name: "cpf",
                                inputRef: register,                                    
                                inputComponent: TextMaskCustom                                                    
                              }}
                            />   
                          </GridItem>
                          <GridItem xs={8} sm={8} md={9}>
                          
                            <CustomInput
                              labelText="Inserir cupom"
                              labelError={errors.cupom && errors.cupom.message}                          
                              error={errors.cupom ? true : false}
                              id="cupom"
                              formControlProps={{
                                fullWidth: true
                              }}                            
                              inputProps={{
                                name: "cupom",
                                inputRef: register, 
                                onBlur: () => getCupom(getValues('cupom'))
                                                                                                                                                     
                              }}
                            />   
                          </GridItem>
                         
                          <GridItem xs={4} sm={4} md={3}>   
                            {
                              isLoadingCupom ? (
                                <CircularProgress style={{ color: "#425CD0", position:"absolute", bottom:"20px", left:"20px" }} size={30}/>

                              ) : (
                                <Button style={{ position:"absolute", bottom:"10px", left:"10px" }} color="primary" onClick={ () => getCupom(getValues('cupom'))}>
                                  Ok
                                </Button>
                              )

                            }                       
                            
                          </GridItem>
                          {error && ( 
                            <GridItem xs={12} sm={12} md={12}>   
                              <SnackbarContent
                                message={
                                  <span>
                                    <b>Cupom não encontrado</b> <br/> Insira um cupom válido
                                  </span>
                                }
                                // close
                                color="danger"
                                icon="info_outline"
                              />
                            </GridItem>   
                          )} 
                          
                          
                          
                        </GridContainer>                 
                    
                      </CardBody>

                    </Grow>

                    
                    <CardFooter className={classes.textCenter}>   
                      <GridContainer justify="center" style={{ margin: "0", width: "100%" }}> 
                        
                        <GridItem xs={12} sm={12} md={12}>


                          {
                            isLoadingCupom ? (
                              <CircularProgress style={{ color: "#425CD0" }} size={30}/>

                            ) : (
                              <Button color="primary" fullWidth onClick={handleNext}>
                                Próximo
                              </Button>
                                            
                            )

                          }  
                          
                                   
                          
                        </GridItem> 
                        <GridItem xs={12} sm={12} md={12}>
                          
                          <Button simple color="primary" fullWidth onClick={handleBack}>
                            Voltar
                          </Button>
                          
                        </GridItem> 
                      </GridContainer>  
                      
                    </CardFooter>
                  </form>
                </Card>
                </Grow>
              </GridItem>
            </Box>
            
            <Box clone order={{ xs: 1, sm: 1, md: 2 }}>
              <GridItem xs={12} sm={12} md={4}>
                <Grow 
                  in={true}
                  style={{ transformOrigin: '0 0 0' }}
                  {...(true ? { timeout: 1000 } : {})}
                >
                  <Card className={classes.card1}>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <CardHeader
                      contact
                      color="primary"
                      className={classes.textCenter}
                    >
                      <h4 className={classes.cardTitle}>Resumo</h4>
                    </CardHeader>

                    
                    <Grow 
                      in={activeForm === 0}
                      style={{ transformOrigin: '0 0 0', display: activeForm === 0 ? "block" : "none" }}
                      {...(activeForm === 0 ? { timeout: 1000 } : {})}
                    >

                      <CardBody>

             

                        <GridContainer justify="center"> 
                          <GridItem xs={12} sm={12} md={12}>
                            <Card pricing plain className={classes.marginZero}>
                              <CardBody pricing plain>
                                <h5 className={classes.cardCategory} style={{ color: "#425cc7" }}>Plano <br/> {plan.nome}</h5>
                                <hr/>
                                
                                {
                                  insertCupom ? (
                                    <>
                                      <small style={{ fontSize: "1rem" }}>{'\u00A0'} Primeira mensalidade</small>
                                      <h1 className={classes.cardTitle} style={{ color: "#425cc7", marginTop: "0.75rem", marginBottom: "0 !important" }}>
                                        <small style={{ color: "#425cc7" }}>R$</small> { formatValuePresentation( descontoParcela( listaPremios.listaPremios[0], plan.primeiraParcela ) ) } 
                                      </h1>      
                                      <small style={{ fontSize: "0.7rem" }}>{'\u00A0'} Valor anual do plano: R$ { formatValuePresentation( (formatValueParcela(plan.mensalidade) * formatValueParcela(plan.fidelidade)) - descontoTotal( listaPremios, plan ) ) }</small>
                                      {getPremios(listaPremios)}    
                                    </>                  
                                  ): (
                                    <>
                                      <small style={{ fontSize: "1rem" }}>{'\u00A0'} {plan.fidelidade} parcelas de</small>
                                      <h1 className={classes.cardTitle} style={{ color: "#425cc7", marginTop: "0.75rem", marginBottom: "0 !important" }}>
                                        <small style={{ color: "#425cc7" }}>R$</small> {formatValuePresentation(plan.mensalidade)}
                                      </h1>
                                      <small style={{ fontSize: "0.7rem" }}>{'\u00A0'} Valor anual do plano: R$ { formatValuePresentation( (formatValueParcela(plan.mensalidade) * formatValueParcela(plan.fidelidade)) ) }</small>
                                    </>
                                  )                            
                                }
        
                                <ul className={classes.itensResumo}>
                                  <li>
                                    <Check/> Treinos Personalizados
                                  </li>
                                  <li>
                                    <Check/> Acompanhamento em Grupo
                                  </li>
                                  <li>
                                    <Check/> Vídeos Explicativos por Exercício
                                  </li>                                  
                                  <li>
                                    <Check/> Master Classes Ao Vivo 1x/semana
                                  </li>
                                </ul>
                              </CardBody>
              
                            </Card>
                          </GridItem>                                        
                        </GridContainer>                 
                    
                      </CardBody>

                    </Grow>
                  </form>
                </Card>
                </Grow>
              </GridItem>
            </Box>
          </GridContainer>
        </div>
      </div>
      {/* Contact us 1 END */}
    </div>
  );
}
