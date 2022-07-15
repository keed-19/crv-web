import React, { useEffect, useReducer, useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import '../../App.css';
import AddressReducer from '../../reducers/AddressReducer';
import BeneficiariosReducer from '../../reducers/BeneficiariosReducer';
import BusinessDataReducer from '../../reducers/BusinessDataReducer';
import ClientPhoneReducer from '../../reducers/ClientPhoneReducer';
import GuaranteeReducer from '../../reducers/GuaranteeReducer';
import GuarantorReducer from '../../reducers/GuarantorReducer';
import ObjectReducer from '../../reducers/ObjectReducer';
import ReferencesPersonalReducer from '../../reducers/ReferencesPersonalReducer';

const FormClients = ({clients, onSend}) => {

    const [PhoneClient, DespacharPhoneClient] = useReducer(ClientPhoneReducer,[]);
    const [address, DespacharAddress] = useReducer(AddressReducer,[]);

     
    const [name, setName ] = useState('');
    const [aPaterno, setApaterno ] = useState('');
    const [aMaterno, setAmaterno ] = useState('');
    const [identificationTypeC, setIdentificationTypeC ] = useState('');
    const [email, setEmail ] = useState('');
    const [clientType, setClientType ] = useState('');
    const [curp, setCurp ] = useState('');
    const [externalId, setExternalId ] = useState('');
    const [branch, setBranch ] = useState('');
    const [gender, setGender ] = useState('');
    const [ineFolio, setIneFolio ] = useState('');
    const [loanCicle, setLoanCicle ] = useState('');
    const [escolaridad, setEscolaridad ] = useState('');
    const [dob, setDob ] = useState('');
    // const [segmento, setSegmento ] = useState('');
    const [phone, setPhone ] = useState('');
    const [typePhone, setTypePhone ] = useState('');
    const [propertyPhone, setPropertyPhone ] = useState('');
    const [countryOfBirth, setCountryOfBirth ] = useState('');
    const [provinceOfBirth, setProvinceOfBirth ] = useState('');
    const [nationality, setNationality ] = useState('');
    const [maritalStatus, setMaritalStatus ] = useState('');
    const [ocupation, setOcupation ] = useState('');
    const [rfc, setRfc ] = useState('');
    const [tributaryRegime, setTributaryRegime ] = useState('');
    // const [posiciones, setPosiciones ] = useState([]);
    
    // constantes para direccion
    const [addressLine, setAddressLine ] = useState('');
    const [addressType, setAddressType ] = useState('');
    const [federalEntity, setFederalEntity ] = useState('');
    const [municipality, setMunicipality ] = useState('');
    const [city, setCity ] = useState('');
    const [country, setCountry ] = useState('');
    const [residenceSince, setResidenceSince ] = useState('');
    const [streetReference, setStreetReference ] = useState('');
    const [defaultA, setDefaultA ] = useState('');
    const [ownershipType, setOwnershipType ] = useState('');

    // constantes para definir los beneficiarios
    const [PhoneB, DespacharPhoneB] = useReducer(ClientPhoneReducer,[]);
    const [addressB, DespacharAddressB] = useReducer(AddressReducer,[]);
    const [beneficiares, DespacharBeneficiares] = useReducer(BeneficiariosReducer,[]);

    const [nameb, setNameb] = useState('');
    const [lastNameb, setLastNameb] = useState('');
    const [secondLastname, setSecondLastname] = useState('');    
    const [dobB, setDobB] = useState('');

    const [addressLineB, setAddressLineB ] = useState('');
    const [addressTypeB, setAddressTypeB ] = useState('');
    const [federalEntityB, setFederalEntityB ] = useState('');
    const [municipalityB, setMunicipalityB ] = useState('');
    const [cityB, setCityB ] = useState('');
    const [countryB, setCountryB ] = useState('');
    const [residenceSinceB, setResidenceSinceB ] = useState('');
    const [streetReferenceB, setStreetReferenceB ] = useState('');
    const [defaultAB, setDefaultAB ] = useState('');
    const [ownershipTypeB, setOwnershipTypeB ] = useState('');

    const [percentage, setPercentage ] = useState('');

    const [phoneB, setPhoneB ] = useState('');
    const [typePhoneB, setTypePhoneB ] = useState('');
    const [propertyPhoneB, setPropertyPhoneB ] = useState('');

    const [relationship, setrelationship ] = useState('');

    // constantes para los datos del negocio
    const [phoneDataBusiness, DespacharPhoneDataBusiness] = useReducer(ClientPhoneReducer,[]);
    const [businessName, setBusinessName] = useState(''); 
	const [businessSince, setBusinessSince] = useState('');
	const [economicActivityR, setEconomicActivityR] = useReducer(ObjectReducer, []);
	const [economicActivity, setEconomicActivity] = useState('');
    const [addressDataBusiness, DespacharAddressDataBusiness] = useReducer(AddressReducer,[]);
    // const [storeType, setstoreType] = useState('');
    const [previousBusinessActivity, setPreviousBusinessActivity] = useState('');
    const [sectorR, DespacharSectorR] = useReducer(ObjectReducer, []);
    const [sector, setSector] = useState('');
    const [storeTypeR, DespacharStoreTypeR] = useReducer(ObjectReducer, []);
    const [storeType, setStoreType] = useState('');
    const [businessData, DespacharBusinessData] = useReducer(BusinessDataReducer, []);

    const [addressLineBD, setAddressLineBD ] = useState('');
    const [addressTypeBD, setAddressTypeBD ] = useState('');
    const [federalEntityBD, setFederalEntityBD ] = useState('');
    const [municipalityBD, setMunicipalityBD ] = useState('');
    const [cityBD, setCityBD ] = useState('');
    const [countryBD, setCountryBD ] = useState('');
    const [residenceSinceBD, setResidenceSinceBD ] = useState('');
    const [streetReferenceBD, setStreetReferenceBD ] = useState('');
    const [defaultABD, setDefaultABD ] = useState('');
    const [ownershipTypeBD, setOwnershipTypeBD ] = useState('');

    const [phoneBD, setPhoneBD ] = useState('');
    const [typePhoneBD, setTypePhoneBD ] = useState('');

    // constantes para la garantia de los clientes
    const [description, setDescription] = useState('');
    const [expirationDate, setExpirationDate] = useState('');    
    const [guaranteeType, setGuaranteeType] = useState('');
    const [percentageGuarantee, setPercentageGuarantee] = useState('');
    const [value, setValue] = useState('');
    const [guarantee, DespacharGuarantee] = useReducer(GuaranteeReducer, []);

    // constantes para el aval del cliente
    
    const [guarantor, DespacharGuarantor] = useReducer(GuarantorReducer,[]);
    const [guarantorAddress, DespacharGuarantorAddress] = useReducer(AddressReducer,[]);
    const [addressLineGuarantor, setAddressLineGuarantor ] = useState('');
    const [addressTypeGuarantor, setAddressTypeGuarantor ] = useState('');
    const [federalEntityGuarantor, setFederalEntityGuarantor ] = useState('');
    const [municipalityGuarantor, setMunicipalityGuarantor ] = useState('');
    const [cityGuarantor, setCityGuarantor ] = useState('');
    const [countryGuarantor, setCountryGuarantor ] = useState('');
    const [residenceSinceGuarantor, setResidenceSinceGuarantor ] = useState('');
    const [streetReferenceGuarantor, setStreetReferenceGuarantor ] = useState('');
    const [defaultAGuarantor, setDefaultAGuarantor ] = useState('');
    const [ownershipTypeGuarantor, setOwnershipTypeGuarantor ] = useState('');

    
    const [companyWorksAt, setCompanyWorksAt] = useState('');
    const [countryOfBirthGuarantor, setCountryOfBirthGuarantor] = useState('');
    const [curpGuarantor, setCurpGuarantor] = useState('');
    const [dobGuarantor, setDobGuarantor] = useState('');
    const [eSignature, setESignature] = useState('');
    const [emailGuarantor, setEmailGuarantor] = useState('');
    const [genderGuarantor, setGenderGuarantor] = useState('');
    const [identificationNumber, setIdentificationNumber] = useState('');
    const [identificationTypeR, DespacharIdentificationTypeR] = useReducer(ObjectReducer, []);
    const [identificationType, setIdentificationType] = useState('');
    const [lastname, setLastname] = useState('');
    const [maritalStatusGuarantor, setMaritalStatusGuarantor] = useState('');
    const [nameGuarantor, setNameGuarantor] = useState('');
    const [nationalityGuarantor, setNationalityGuarantor] = useState('');
    const [ocupationGuarantorR, setOcupationGuarantorR] = useReducer(ObjectReducer, []);
    const [ocupationGuarantor, setOcupationGuarantor] = useState('');
    const [personResidesIn, setPersonResidesIn] = useState('');

    const [phoneGuarantor, DespacharPhoneGuarantor] = useReducer(ClientPhoneReducer,[]);
    const [phonesGuarantor, setPhonesGuarantor ] = useState('');
    const [typePhoneGuarantor, setTypePhoneGuarantor ] = useState('');

    const [provinceOfBirthGuarantor, setProvinceOfBirthGuarantor] = useState('');
    const [rfcGuarantor, setRfcGuarantor] = useState('');
    const [secondLastnameGuarantor, setSecondLastnameGuarantor] = useState('');
    // const [sexGuarantorR, setSexGuarantorR] = useReducer(ObjectReducer, []);
    const [sexGuarantor, setSexGuarantor] = useState('');

    // constantes para la referencia personal
    const [rP, DespacharRP] = useReducer(ReferencesPersonalReducer,[]);
    const [dobRP, setDobRP] = useState('');
    const [lastnameRP, setLastnameRP] = useState('');
    const [nameRP, setNameRP] = useState('');
    const [relationshipRP, setRelationshipRP] = useState('');
    const [secondLastnameRP, setSecondLastnameRP] = useState('');

    const [addressRP, DespacharAddressRP] = useReducer(AddressReducer,[]);
    const [addressLineRP, setAddressLineRP ] = useState('');
    const [addressTypeRP, setAddressTypeRP ] = useState('');
    const [federalEntityRP, setFederalEntityRP ] = useState('');
    const [municipalityRP, setMunicipalityRP ] = useState('');
    const [cityRP, setCityRP ] = useState('');
    const [countryRP, setCountryRP ] = useState('');
    const [residenceSinceRP, setResidenceSinceRP ] = useState('');
    const [streetReferenceRP, setStreetReferenceRP ] = useState('');
    const [defaultARP, setDefaultARP ] = useState('');
    const [ownershipTypeRP, setOwnershipTypeRP ] = useState('');

    const [phoneRP, DespacharPhoneRP] = useReducer(ClientPhoneReducer,[]);
    const [phonesRP, setPhonesRP ] = useState('');
    const [typePhoneRP, setTypePhoneRP ] = useState('');



    function isObjEmpty(obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) return false;
        }        
        return true;
    }

    useEffect(()=>{
        console.log(clients)
        const validador = isObjEmpty(clients);
        if(validador === false){
            setName(clients.name);
            setApaterno(clients.lastname);
            setBranch(clients.branch)
            setAmaterno(clients.second_lastname);
            setEmail(clients.email)
            setClientType(clients.client_type)
            setCurp(clients.curp)
            setGender(clients.gender)
            setIneFolio(clients.ine_folio)
            setLoanCicle(clients.loan_cycle)
            setIdentificationTypeC(clients.identification_type)
            setCountryOfBirth(clients.country_of_birth)
            setProvinceOfBirth(clients.province_of_birth)
            setNationality(clients.nationality)
            setMaritalStatus(clients.marital_status)
            setOcupation(clients.ocupation)
            setRfc(clients.rfc)
            setTributaryRegime(clients.tributary_regime)
            setEscolaridad(clients.scolarship)
            setDob(clients.dob.substring(0, 10))
            DespacharPhoneClient({ type:'LLENAR', data: clients.phones })
            DespacharAddress({ type:'LLENAR', data: clients.address })
            DespacharBeneficiares({ type:'LLENAR', data: clients.beneficiaries })
            setExternalId(clients.external_id)
            DespacharBusinessData({ type:'LLENAR', data: clients.business_data })
            DespacharGuarantee({ type:'LLENAR', data: clients.guarantee })
            DespacharGuarantor({ type:'LLENAR', data: clients.guarantor })
            DespacharRP({ type:'LLENAR', data: clients.personal_references })
        }
    },[clients]);

    // console.log('sm', beneficiares[0].address)
    // nuevo

    // console.log('se llena? : ' + termType)

    // provando la nueva funcionalidad, con datos para agregar un producto, aun no lo he provado
    // const handleChange = async(event)=>{
    //     await setValorSelect(event.target.value);
    // }

    // const OnhandleChangeTerm = async(event)=>{
    //     await setTermSelect(event.target.value);
    // }

    // const OnPorpuseValue = async(event)=>{
    //     await setPurpose(event.target.value);
    // }

    // const handleSubmit = async(e) => {
    //     e.preventDefault();
    //     const resultado = valuesPrueba.find( x => x.value === valorSelect );
    //     DespacharPrueba({
    //         type: 'AGREGAR',
    //         identifier: resultado.identifier,
    //         value: resultado.value
    //     });
    // }

    // const handleSubmitTermType = async(e) => {
    //     e.preventDefault();
    //     const resultadoTermType = termTypeAlowed.find( i => i.value === termSelect );      
    //     DespacharTermType({
    //         type: 'AGREGAR',
    //         identifier: resultadoTermType.identifier,
    //         value: resultadoTermType.value,
    //         year_periods: resultadoTermType.year_periods
    //     });
    // }

    // const handleSubmitPurpose = async(e) => {
    //     e.preventDefault();
    //     const resultadoPurpose = valuesPurpose.find( j => j.description === purpose );     
    //     DespacharLoanPurpose({
    //         type: 'AGREGAR',
    //         external_id: resultadoPurpose.external_id,
    //         description: resultadoPurpose.description
    //     });
    // }
    
    const OnEliminarPhone = (e)=>{
        e.preventDefault();
        DespacharPhoneClient({
            type: 'ELIMINAR',
            phone: e.target.id
        })
    }

    const OnEliminarPhoneB = (e)=>{
        e.preventDefault();
        DespacharPhoneB({
            type: 'ELIMINAR',
            phone: e.target.id
        })
    }

    const OnEliminarAddress = (e) => {
        e.preventDefault();
        DespacharAddress({
            type: 'ELIMINAR',
            address_line: e.target.id
        })
    }

    const OnEliminarAddressB = (e) => {
        e.preventDefault();
        DespacharAddressB({
            type: 'ELIMINAR',
            address_line: e.target.id
        })
    }

    const onAddPhone = (e) => {
        e.preventDefault();

        DespacharPhoneClient({
            type: 'AGREGAR',
            phone: phone,
            phone_type: typePhone,
            phone_propierty: propertyPhone
        });

        setPhone('');
        setTypePhone('');
        setPropertyPhone('');
    }

    const onAddAddress = (e) => {
        e.preventDefault();

        DespacharAddress({
            type: 'AGREGAR',
            address_line: addressLine,
            city: city,
            municipality: municipality,
            province: federalEntity,
            country: country,
            address_type: addressType,
            ownership_type: ownershipType,
            residence_since: residenceSince,
            street_reference: streetReference,
            default: defaultA
        });

        setAddressLine('');
        setCity('');
        setMunicipality('');
        setFederalEntity('');
        setCountry('');
        setAddressType('');
        setOwnershipType('');
        setResidenceSince('');
        setStreetReference('');
        setDefaultA('');
    }

    const onAddAddressB = (e) => {
        e.preventDefault();

        DespacharAddressB({
            type: 'AGREGAR',
            address_line: addressLineB,
            city: cityB,
            municipality: municipalityB,
            province: federalEntityB,
            country: countryB,
            address_type: addressTypeB,
            ownership_type: ownershipTypeB,
            residence_since: residenceSinceB,
            street_reference: streetReferenceB,
            default: defaultAB
        });

        setAddressLineB('');
        setCityB('');
        setMunicipalityB('');
        setFederalEntityB('');
        setCountryB('');
        setAddressTypeB('');
        setOwnershipTypeB('');
        setResidenceSinceB('');
        setStreetReferenceB('');
        setDefaultAB('');

        // addressLineB = await ''
    }

    const onAddPhoneB = (e) => {
        e.preventDefault();

        DespacharPhoneB({
            type: 'AGREGAR',
            phone: phoneB,
            phone_type: typePhoneB,
            phone_propierty: propertyPhoneB
        });

        setPhoneB('');
        setTypePhoneB('');
        setPropertyPhoneB('');
    }

    const onBeneficiaries = (e) => {
        e.preventDefault()

        DespacharBeneficiares({
            type: 'AGREGAR',
            name: nameb,
            lastname: lastNameb,
            second_lastname: secondLastname,
            dob: dobB,
            address: addressB,
            percentage: percentage,
            phones: PhoneB,
            relationship:relationship
        });

        setNameb('');
        setLastNameb('');
        setSecondLastname('');
        setDobB('');
        setPercentage('');
        setrelationship('');
        console.log('antes', DespacharAddressB)
        DespacharPhoneB({ type:'LLENAR', data: [] })
        DespacharAddressB({ type:'LLENAR', data: [] })
        console.log('despues', DespacharAddressB)
    }

    const OnEliminarBeneficiaries = (e) => {
        e.preventDefault();
        DespacharBeneficiares({
            type: 'ELIMINAR',
            dob: e.target.id
        })
    }

    const onAddEconomicActivity = (e) =>  {
        e.preventDefault();

        setEconomicActivityR({
            type: 'AGREGAR',
            value: economicActivity
        });

        setEconomicActivity('');
    }

    const OnEliminarEconomicActivity = (e) => {
        e.preventDefault();
        // console.log(e.target.id)
        setEconomicActivityR({
            type: 'ELIMINAR',
            value: e.target.id
        })
    }

    const onAddSector = (e) =>  {
        e.preventDefault();

        DespacharSectorR({
            type: 'AGREGAR',
            value: sector
        });

        setSector('');
    }

    const OnEliminarSector = (e) => {
        e.preventDefault();
        // console.log(e.target.id)
        DespacharSectorR({
            type: 'ELIMINAR',
            value: e.target.id
        })
    }

    const onAddStoreType = (e) =>  {
        e.preventDefault();

        DespacharStoreTypeR({
            type: 'AGREGAR',
            value: storeType
        });

        setStoreType('');
    }

    const OnEliminarStoreType = (e) => {
        e.preventDefault();
        // console.log(e.target.id)
        DespacharStoreTypeR({
            type: 'ELIMINAR',
            value: e.target.id
        })
    }

    const onAddBusinessDataAddress = (e) => {
        e.preventDefault();

        DespacharAddressDataBusiness({
            type: 'AGREGAR',
            address_line: addressLineBD,
            city: cityBD,
            municipality: municipalityBD,
            province: federalEntityBD,
            country: countryBD,
            address_type: addressTypeBD,
            ownership_type: ownershipTypeBD,
            residence_since: residenceSinceBD,
            street_reference: streetReferenceBD,
            default: defaultABD
        });

        setAddressLineBD('');
        setCityBD('');
        setMunicipalityBD('');
        setFederalEntityBD('');
        setCountryBD('');
        setAddressTypeBD('');
        setOwnershipTypeBD('');
        setResidenceSinceBD('');
        setStreetReferenceBD('');
        setDefaultABD('');

        // addressLineB = await ''
    }

    const OnEliminarBusinessDataAddress = (e) => {
        e.preventDefault();
        DespacharAddressDataBusiness({
            type: 'ELIMINAR',
            address_line: e.target.id
        })
    }

    const onAddBusinessDataPhone = (e) => {
        e.preventDefault();

        DespacharPhoneDataBusiness({
            type: 'AGREGAR',
            phone: phoneBD,
            phone_type: typePhoneBD
        });

        setPhoneBD('');
        setTypePhoneBD('');
    }

    const OnEliminarBusinessDataPhone = (e)=>{
        e.preventDefault();
        DespacharPhoneDataBusiness({
            type: 'ELIMINAR',
            phone: e.target.id
        })
    }

    const onAddBusinessData = (e) => {
        e.preventDefault()

        DespacharBusinessData({
            type: 'AGREGAR',
            address: addressDataBusiness,
            business_name: businessName,
            business_since: businessSince,
            economic_activity: economicActivityR,
            phones: phoneDataBusiness,
            previous_business_activity: previousBusinessActivity,
            sector: sectorR,
            store_type: storeTypeR
        });

        setBusinessName('');
        setBusinessSince('');
        setPreviousBusinessActivity('');
        DespacharAddressDataBusiness({ type:'LLENAR', data: [] })
        setEconomicActivityR({ type:'LLENAR', data: [] })
        DespacharPhoneDataBusiness({ type:'LLENAR', data: [] })
        DespacharSectorR({ type:'LLENAR', data: [] })
        DespacharStoreTypeR({ type:'LLENAR', data: [] })
    }

    const OnEliminarBusinessData = (e) => {
        e.preventDefault();
        DespacharBusinessData({
            type: 'ELIMINAR',
            business_name: e.target.id
        })
    }

    const onAddGuarantee = (e) => {
        e.preventDefault()

        DespacharGuarantee({
            type: 'AGREGAR',
            description: description,
            expiration_date: expirationDate,
            guarantee_type: guaranteeType,
            percentage: percentageGuarantee,
            value: value
        });

        setDescription('');
        setExpirationDate('');
        setGuaranteeType('');
        setPercentageGuarantee('');
        setValue('');
    }

    const OnEliminarGuarantee = (e) => {
        e.preventDefault();
        DespacharGuarantee({
            type: 'ELIMINAR',
            expiration_date: e.target.id
        })
    }

    const onAddIdentificationType = (e) =>  {
        e.preventDefault();

        DespacharIdentificationTypeR({
            type: 'AGREGAR',
            value: identificationType
        });

        setIdentificationType('');
    }

    const OnEliminarIdentificationType = (e) => {
        e.preventDefault();

        DespacharIdentificationTypeR({
            type: 'ELIMINAR',
            value: e.target.id
        })
    }

    const onAddOcupation = (e) =>  {
        e.preventDefault();

        setOcupationGuarantorR({
            type: 'AGREGAR',
            value: ocupationGuarantor
        });

        setOcupationGuarantor('');
    }

    const OnEliminarOcupation = (e) => {
        e.preventDefault();

        setOcupationGuarantorR({
            type: 'ELIMINAR',
            value: e.target.id
        })
    }

    const onAddGuarantorDataAddress = (e) => {
        e.preventDefault();

        DespacharGuarantorAddress({
            type: 'AGREGAR',
            address_line: addressLineGuarantor,
            city: cityGuarantor,
            municipality: municipalityGuarantor,
            province: federalEntityGuarantor,
            country: countryGuarantor,
            address_type: addressTypeGuarantor,
            ownership_type: ownershipTypeGuarantor,
            residence_since: residenceSinceGuarantor,
            street_reference: streetReferenceGuarantor,
            default: defaultAGuarantor
        });

        setAddressLineGuarantor('');
        setCityGuarantor('');
        setMunicipalityGuarantor('');
        setFederalEntityGuarantor('');
        setCountryGuarantor('');
        setAddressTypeGuarantor('');
        setOwnershipTypeGuarantor('');
        setResidenceSinceGuarantor('');
        setStreetReferenceGuarantor('');
        setDefaultAGuarantor('');        
    }

    const OnEliminarGuarantorAddress = (e) => {
        e.preventDefault();
        DespacharGuarantorAddress({
            type: 'ELIMINAR',
            address_line: e.target.id
        })
    }

    const onAddGuarantorPhone = (e) => {
        e.preventDefault();

        DespacharPhoneGuarantor({
            type: 'AGREGAR',
            phone: phonesGuarantor,
            phone_type: typePhoneGuarantor
        });

        setPhonesGuarantor('');
        setTypePhoneGuarantor('');
    }

    const OnEliminarGuarantorPhone = (e)=>{
        e.preventDefault();
        DespacharPhoneGuarantor({
            type: 'ELIMINAR',
            phone: e.target.id
        })
    }

    const onAddGuarantor = (e) => {
        e.preventDefault()

        DespacharGuarantor({
            type: 'AGREGAR',
            address: guarantorAddress,
            company_works_at: companyWorksAt,
            country_of_birth: countryOfBirthGuarantor,
            curp: curpGuarantor,
            dob: dobGuarantor,
            e_signature: eSignature,
            email: emailGuarantor,
            gender: genderGuarantor,
            identification_number: identificationNumber,
            identification_type: identificationTypeR,
            lastname: lastname,
            marital_status: maritalStatusGuarantor,
            name: nameGuarantor,
            nationality: nationalityGuarantor,
            ocupation: ocupationGuarantorR,
            person_resides_in: personResidesIn,
            phones: phoneGuarantor,
            province_of_birth: provinceOfBirthGuarantor,
            rfc: rfcGuarantor,
            second_lastname: secondLastnameGuarantor,
            sex: sexGuarantor
        });

        setCompanyWorksAt('');
        setCountryOfBirthGuarantor('');
        setCurpGuarantor('');
        setDobGuarantor('');
        setESignature('');
        setEmailGuarantor('');
        setGenderGuarantor('');
        setIdentificationNumber('');
        setLastname('');
        setMaritalStatusGuarantor('');
        setNameGuarantor('');
        setNationalityGuarantor('');
        setPersonResidesIn('');
        setProvinceOfBirthGuarantor('');
        setRfcGuarantor('');
        setSecondLastnameGuarantor('');
        setSexGuarantor('');
        DespacharIdentificationTypeR({ type:'LLENAR', data: [] })
        setOcupationGuarantorR({ type:'LLENAR', data: [] })
        DespacharPhoneGuarantor({ type:'LLENAR', data: [] })
        DespacharGuarantorAddress({ type:'LLENAR', data: [] })
    }

    const OnEliminarGuarantor = (e) => {
        e.preventDefault();
        DespacharGuarantor({
            type: 'ELIMINAR',
            rfc: e.target.id
        })
    }


    const onAddGuarantorRP = (e) => {
        e.preventDefault();

        DespacharAddressRP({
            type: 'AGREGAR',
            address_line: addressLineRP,
            city: cityRP,
            municipality: municipalityRP,
            province: federalEntityRP,
            country: countryRP,
            address_type: addressTypeRP,
            ownership_type: ownershipTypeRP,
            residence_since: residenceSinceRP,
            street_reference: streetReferenceRP,
            default: defaultARP
        });

        setAddressLineRP('');
        setCityRP('');
        setMunicipalityRP('');
        setFederalEntityRP('');
        setCountryRP('');
        setAddressTypeRP('');
        setOwnershipTypeRP('');
        setResidenceSinceRP('');
        setStreetReferenceRP('');
        setDefaultARP('');        
    }

    const OnEliminarRPAddress = (e) => {
        e.preventDefault();
        DespacharAddressRP({
            type: 'ELIMINAR',
            address_line: e.target.id
        })
    }

    const onAddRPPhone = (e) => {
        e.preventDefault();

        DespacharPhoneRP({
            type: 'AGREGAR',
            phone: phonesRP,
            phone_type: typePhoneRP
        });

        setPhonesRP('');
        setTypePhoneRP('');
    }

    const OnEliminarRPPhone = (e)=>{
        e.preventDefault();
        DespacharPhoneRP({
            type: 'ELIMINAR',
            phone: e.target.id
        })
    }

    const onAddRP = (e) => {
        e.preventDefault()

        DespacharRP({
            type: 'AGREGAR',
            address: addressRP,
            dob: dobRP,
            lastname: lastnameRP,
            name: nameRP,
            phones: phoneRP,
            relationship: relationshipRP,
            second_lastname: secondLastnameRP
        });

        setDobRP('');
        setLastnameRP('');
        setNameRP('');
        setRelationshipRP('');
        setSecondLastnameRP('');
        DespacharPhoneRP({ type:'LLENAR', data: [] })
        DespacharAddressRP({ type:'LLENAR', data: [] })
    }

    const OnEliminarRP = (e) => {
        e.preventDefault();
        DespacharRP({
            type: 'ELIMINAR',
            dob: e.target.id
        })
    }

    const onSave = ()=> {
        // e.preventDefault()
        const data = {
            address: address,
            branch: branch,
            bussiness_data: businessData,
            beneficiaries: beneficiares,
            personal_references: rP,
            identification_type: identificationTypeC,
            guarantor: guarantor,
            dob: dob,
            country_of_birth: countryOfBirth,
            province_of_birth: provinceOfBirth,
            nationality: nationality,
            marital_status: maritalStatus,
            ocupation: ocupation,
            rfc: rfc,
            tributary_regime: tributaryRegime,
            client_type: clientType,
            credit_circuit_data: [],
            guarantee: guarantee,
            curp: curp,
            email: email,
            external_id: externalId,
            gender: gender,
            ine_folio: ineFolio,
            is_new: true,
            name: name,
            lastname: aPaterno,
            second_lastname: aMaterno,
            loan_cycle: loanCicle,
            phones: PhoneClient,
            scolarship: escolaridad,
            // segmento: segmento
        }
        onSend(data)
        // console.log(data) 
    }

    return (
        <section>

            <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                    <div className="border-t border-gray-200"></div>
                </div>
            </div>

            <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    
                    <div className="mt-5 md:mt-0 md:col-span-6 form-style">
                        <form onSubmit={onSave}>
                            <div className="shadow overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="first-name" className="block text-sm font-medium text-gray-700">Nombre</label>
                                            <input type="text" value={name} onChange={(e)=> setName(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="first-name" className="block text-sm font-medium text-gray-700">Apellido paterno</label>
                                            <input type="text" value={aPaterno} onChange={(e)=> setApaterno(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Apellido materno</label>
                                            <input type="text" value={aMaterno} onChange={(e)=> setAmaterno(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Fecha de nacimiento</label>
                                            <input type="text" value={dob} onChange={(e)=> setDob(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">País de nacimiento</label>
                                            <input type="text" value={countryOfBirth} onChange={(e)=> setCountryOfBirth(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Estado de nacimiento</label>
                                            <input type="text" value={provinceOfBirth} onChange={(e)=> setProvinceOfBirth(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Nacionalidad</label>
                                            <input type="text" value={nationality} onChange={(e)=> setNationality(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Estado civil</label>
                                            <input type="text" value={maritalStatus} onChange={(e)=> setMaritalStatus(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Ocupación</label>
                                            <input type="text" value={ocupation} onChange={(e)=> setOcupation(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="first-name" className="block text-sm font-medium text-gray-700">Email</label>
                                            <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Tipo de cliente</label>
                                            <input type="text" value={clientType} onChange={(e)=> setClientType(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Curp</label>
                                            <input type="text" value={curp} onChange={(e)=> setCurp(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">RFC</label>
                                            <input type="text" value={rfc} onChange={(e)=> setRfc(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Regimen tributario</label>
                                            <input type="text" value={tributaryRegime} onChange={(e)=> setTributaryRegime(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2 lg:col-span-2">
                                            <label for="postal-code" className="block text-sm font-medium text-gray-700">External id</label>
                                            <input type="text" value={externalId} onChange={(e)=> setExternalId(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="first-name" className="block text-sm font-medium text-gray-700">Genero</label>
                                            <input type="text" value={gender} onChange={(e)=> setGender(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="first-name" className="block text-sm font-medium text-gray-700">Tipo de identificación</label>
                                            <input type="text" value={identificationTypeC} onChange={(e)=> setIdentificationTypeC(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="first-name" className="block text-sm font-medium text-gray-700">Folio del INE</label>
                                            <input type="text" value={ineFolio} onChange={(e)=> setIneFolio(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="first-name" className="block text-sm font-medium text-gray-700">Sucursal</label>
                                            <input type="text" value={branch} onChange={(e)=> setBranch(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="first-name" className="block text-sm font-medium text-gray-700">círculo de préstamo</label>
                                            <input type="text" value={loanCicle} onChange={(e)=> setLoanCicle(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="first-name" className="block text-sm font-medium text-gray-700">Grado de estudio</label>
                                            <input type="text" value={escolaridad} onChange={(e)=> setEscolaridad(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>
                                        
                                        <div className='col-span-4 sm:col-span-6 items-center justify-center'>
                                            <label className="block text-sm font-medium text-gray-700">Dirección del cliente</label>
                                        </div>

                                        <div class="col-span-4 sm:col-span-3 items-center justify-center">
                                            <div className='tarea-formulario'>
                                            {/* <label for="first-name" className="block text-sm font-medium text-gray-700">Dirección</label> */}
                                                <div>
                                                <label for="first-name" className="block text-sm font-medium text-gray-700">Dirección</label>
                                                    <input type="text" value={addressLine} onChange={(e)=> setAddressLine(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Tipo de domicilio</label>
                                                    <input type="text" value={addressType} onChange={(e)=> setAddressType(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Tipo de recidencia</label>
                                                    <input type="text" value={ownershipType} onChange={(e)=> setOwnershipType(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Entidad federativa</label>
                                                    <input type="text" value={federalEntity} onChange={(e)=> setFederalEntity(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Municipio</label>
                                                    <input type="text" value={municipality} onChange={(e)=> setMunicipality(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Ciudad</label>
                                                    <input type="text" value={city} onChange={(e)=> setCity(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">País</label>
                                                    <input type="text" value={country} onChange={(e)=> setCountry(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Tiempo de residencia</label>
                                                    <input type="text" value={residenceSince} onChange={(e)=> setResidenceSince(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Calles de referencia</label>
                                                    <input type="text" value={streetReference} onChange={(e)=> setStreetReference(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Dirección Actual</label>
                                                    <input type="text" value={defaultA} onChange={(e)=> setDefaultA(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <button onClick={onAddAddress}>add</button>
                                                </div>
                                            </div>

                                            {address?.map((x)=>
                                                <div className='tarea-contenedor' id={x.address_line}>
                                                    <div 
                                                        className='tarea-texto text-black'>
                                                        {x.address_line}
                                                    </div>
                                                    <div
                                                        className='tarea-contenedor-iconos'
                                                        id={x.address_line} 
                                                        onClick={OnEliminarAddress}>
                                                        <AiOutlineCloseCircle id={x.address_line} className='tarea-icono text-black' />
                                                    </div>                                                    
                                                </div>                                                
                                            )}
                                        </div>

                                        <div class="col-span-4 sm:col-span-3 items-center justify-center">
                                            <div className='tarea-formulario'>
                                                <div>
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Numero de telefono</label>
                                                    <input type="number" value={phone} onChange={(e)=> setPhone(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Tipo</label>
                                                    <input type="text" value={typePhone} onChange={(e)=> setTypePhone(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />                                          
                                                    <fieldset>
                                                        <legend>¿Es propio?</legend>
                                                        <label>
                                                            <input type="radio" onChange={(e)=> setPropertyPhone(true)} /> Si
                                                        </label>
                                                        <label>
                                                            <input type="radio" onChange={(e)=> setPropertyPhone(false)} />  No
                                                        </label>

                                                    </fieldset>

                                                    <button onClick={onAddPhone}>add</button>
                                                </div>
                                            </div>
                                            {PhoneClient?.map((j)=>
                                                <div className='tarea-contenedor' id={j.phone}>
                                                    <div 
                                                        className='tarea-texto text-black'>
                                                        {j.phone}
                                                    </div>
                                                    <div
                                                        className='tarea-contenedor-iconos'
                                                        id={j.phone} 
                                                        onClick={OnEliminarPhone}>
                                                        <AiOutlineCloseCircle id={j.phone} className='tarea-icono text-black' />
                                                    </div>                                                    
                                                </div>                                                
                                            )}
                                        </div>

                                        {/* DATOS DEL BENFICIARIO */}

                                        <div className='col-span-4 sm:col-span-6 items-center justify-center'>
                                            <label className="block text-sm font-medium text-gray-700">Beneficiarios</label>
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Nombre</label>
                                            <input type="text" value={nameb} onChange={(e)=> setNameb(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Apellido paterno</label>
                                            <input type="text" value={lastNameb} onChange={(e)=> setLastNameb(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Apellido materno</label>
                                            <input type="text" value={secondLastname} onChange={(e)=> setSecondLastname(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Fecha de nacimiento</label>
                                            <input type="text" value={dobB} onChange={(e)=> setDobB(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Porcentaje</label>
                                            <input type="text" value={percentage} onChange={(e)=> setPercentage(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Relación</label>
                                            <input type="text" value={relationship} onChange={(e)=> setrelationship(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div class="col-span-4 sm:col-span-3 items-center justify-center">
                                            <div className='tarea-formulario'>
                                            {/* <label for="first-name" className="block text-sm font-medium text-gray-700">Dirección</label> */}
                                                <div>
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Dirección</label>

                                                    <input type="text" value={addressLineB} onChange={(e)=> setAddressLineB(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Tipo de domicilio</label>
                                                    <input type="text" value={addressTypeB} onChange={(e)=> setAddressTypeB(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Tipo de recidencia</label>
                                                    <input type="text" value={ownershipTypeB} onChange={(e)=> setOwnershipTypeB(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Entidad federativa</label>
                                                    <input type="text" value={federalEntityB} onChange={(e)=> setFederalEntityB(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Municipio</label>
                                                    <input type="text" value={municipalityB} onChange={(e)=> setMunicipalityB(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Ciudad</label>
                                                    <input type="text" value={cityB} onChange={(e)=> setCityB(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">País</label>
                                                    <input type="text" value={countryB} onChange={(e)=> setCountryB(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Tiempo de residencia</label>
                                                    <input type="text" value={residenceSinceB} onChange={(e)=> setResidenceSinceB(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Calles de referencia</label>
                                                    <input type="text" value={streetReferenceB} onChange={(e)=> setStreetReferenceB(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Dirección Actual</label>
                                                    <input type="text" value={defaultAB} onChange={(e)=> setDefaultAB(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <button onClick={onAddAddressB}>add</button>
                                                </div>
                                            </div>

                                            {addressB?.map((x)=>
                                                <div className='tarea-contenedor' id={x.address_line}>
                                                    <div 
                                                        className='tarea-texto text-black'>
                                                        {x.address_line}
                                                    </div>
                                                    <div
                                                        className='tarea-contenedor-iconos'
                                                        id={x.address_line} 
                                                        onClick={OnEliminarAddressB}>
                                                        <AiOutlineCloseCircle id={x.address_line} className='tarea-icono text-black' />
                                                    </div>                                                    
                                                </div>                                                
                                            )}
                                        </div>

                                        <div class="col-span-4 sm:col-span-3 items-center justify-center">
                                            <div className='tarea-formulario'>
                                                <div>
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Numero de telefono</label>
                                                    <input type="number" value={phoneB} onChange={(e)=> setPhoneB(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Tipo</label>
                                                    <input type="text" value={typePhoneB} onChange={(e)=> setTypePhoneB(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />                                          
                                                    <fieldset>
                                                        <legend>¿Es propio?</legend>
                                                        <label>
                                                            <input type="radio" onChange={(e)=> setPropertyPhoneB(true)} /> Si
                                                        </label>
                                                        <label>
                                                            <input type="radio" onChange={(e)=> setPropertyPhoneB(false)} />  No
                                                        </label>

                                                    </fieldset>

                                                    <button onClick={onAddPhoneB}>add</button>                                                    
                                                </div>
                                            </div>
                                            {PhoneB?.map((j)=>
                                                <div className='tarea-contenedor' id={j.phone}>
                                                    <div 
                                                        className='tarea-texto text-black'>
                                                        {j.phone}
                                                    </div>
                                                    <div
                                                        className='tarea-contenedor-iconos'
                                                        id={j.phone} 
                                                        onClick={OnEliminarPhoneB}>
                                                        <AiOutlineCloseCircle id={j.phone} className='tarea-icono text-black' />
                                                    </div>                                                    
                                                </div>                                                
                                            )}
                                            {/* <button onClick={onBeneficiaries}>add Beneficiaries</button> */}
                                        </div>

                                        <div className='col-span-4 sm:col-span-6 items-center justify-center'>
                                            <button onClick={onBeneficiaries}>add Beneficiaries</button>

                                            {beneficiares?.map((y)=>
                                                <div className='tarea-contenedor' id={y.name}>
                                                    <div 
                                                        className='tarea-texto text-black'>
                                                        {y.name}
                                                    </div>
                                                    <div
                                                        className='tarea-contenedor-iconos'
                                                        id={y.dob} 
                                                        onClick={OnEliminarBeneficiaries}
                                                        >
                                                        <AiOutlineCloseCircle id={y.dob} className='tarea-icono text-black' />
                                                    </div>                                                    
                                                </div>                                                
                                            )}
                                        </div>

                                        {/* DATOS DEL NEGOCIO */}

                                        <div className='col-span-4 sm:col-span-6 items-center justify-center'>
                                            <label className="block text-sm font-medium text-gray-700">Datos del negocio</label>
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Nombre del negocio</label>
                                            <input type="text" value={businessName} onChange={(e)=> setBusinessName(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Tiempo de servicio</label>
                                            <input type="text" value={businessSince} onChange={(e)=> setBusinessSince(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Tiempo de servicio</label>
                                            <input type="text" value={businessSince} onChange={(e)=> setBusinessSince(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Actividad del negocio previo</label>
                                            <input type="text" value={previousBusinessActivity} onChange={(e)=> setPreviousBusinessActivity(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className='tarea-formulario'>
                                            <div>
                                                <label for="first-name" className="block text-sm font-medium text-gray-700">Actividad economica</label>
                                                <input type="text" value={economicActivity} onChange={(e)=> setEconomicActivity(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                <button onClick={onAddEconomicActivity}>add</button>                                                    
                                            </div>

                                            {economicActivityR?.map((j)=>
                                                <div className='tarea-contenedor' >
                                                    <div 
                                                        className='tarea-texto text-black'>
                                                        {j}
                                                    </div>
                                                    <div
                                                        className='tarea-contenedor-iconos'
                                                        id={j} 
                                                        onClick={OnEliminarEconomicActivity}>
                                                        <AiOutlineCloseCircle id={j} className='tarea-icono text-black' />
                                                    </div>                                                    
                                                </div>                                                
                                            )}
                                        </div>

                                        <div className='tarea-formulario'>
                                            <div>
                                                <label for="first-name" className="block text-sm font-medium text-gray-700">Sector</label>
                                                <input type="text" value={sector} onChange={(e)=> setSector(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                <button onClick={onAddSector}>add</button>                                                    
                                            </div>

                                            {sectorR?.map((j)=>
                                                <div className='tarea-contenedor' >
                                                    <div 
                                                        className='tarea-texto text-black'>
                                                        {j}
                                                    </div>
                                                    <div
                                                        className='tarea-contenedor-iconos'
                                                        id={j} 
                                                        onClick={OnEliminarSector}>
                                                        <AiOutlineCloseCircle id={j} className='tarea-icono text-black' />
                                                    </div>                                                    
                                                </div>                                                
                                            )}
                                        </div>

                                        <div className='tarea-formulario'>
                                            <div>
                                                <label for="first-name" className="block text-sm font-medium text-gray-700">Tipo de tienda</label>
                                                <input type="text" value={storeType} onChange={(e)=> setStoreType(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                <button onClick={onAddStoreType}>add</button>                                                    
                                            </div>

                                            {storeTypeR?.map((j)=>
                                                <div className='tarea-contenedor' >
                                                    <div 
                                                        className='tarea-texto text-black'>
                                                        {j}
                                                    </div>
                                                    <div
                                                        className='tarea-contenedor-iconos'
                                                        id={j} 
                                                        onClick={OnEliminarStoreType}>
                                                        <AiOutlineCloseCircle id={j} className='tarea-icono text-black' />
                                                    </div>                                                    
                                                </div>                                                
                                            )}
                                        </div>

                                        <div class="col-span-4 sm:col-span-3 items-center justify-center">
                                            <div className='tarea-formulario'>
                                            {/* <label for="first-name" className="block text-sm font-medium text-gray-700">Dirección</label> */}
                                                <div>
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Dirección</label>

                                                    <input type="text" value={addressLineBD} onChange={(e)=> setAddressLineBD(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Tipo de domicilio</label>
                                                    <input type="text" value={addressTypeBD} onChange={(e)=> setAddressTypeBD(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Tipo de recidencia</label>
                                                    <input type="text" value={ownershipTypeBD} onChange={(e)=> setOwnershipTypeBD(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Entidad federativa</label>
                                                    <input type="text" value={federalEntityBD} onChange={(e)=> setFederalEntityBD(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Municipio</label>
                                                    <input type="text" value={municipalityBD} onChange={(e)=> setMunicipalityBD(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Ciudad</label>
                                                    <input type="text" value={cityBD} onChange={(e)=> setCityBD(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">País</label>
                                                    <input type="text" value={countryBD} onChange={(e)=> setCountryBD(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Tiempo de residencia</label>
                                                    <input type="text" value={residenceSinceBD} onChange={(e)=> setResidenceSinceBD(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Calles de referencia</label>
                                                    <input type="text" value={streetReferenceBD} onChange={(e)=> setStreetReferenceBD(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Dirección Actual</label>
                                                    <input type="text" value={defaultABD} onChange={(e)=> setDefaultABD(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <button onClick={onAddBusinessDataAddress}>add</button>
                                                </div>
                                            </div>

                                            {addressDataBusiness?.map((x)=>
                                                <div className='tarea-contenedor' id={x.address_line}>
                                                    <div 
                                                        className='tarea-texto text-black'>
                                                        {x.address_line}
                                                    </div>
                                                    <div
                                                        className='tarea-contenedor-iconos'
                                                        id={x.address_line} 
                                                        onClick={OnEliminarBusinessDataAddress}>
                                                        <AiOutlineCloseCircle id={x.address_line} className='tarea-icono text-black' />
                                                    </div>                                                    
                                                </div>                                                
                                            )}
                                        </div>

                                        <div class="col-span-4 sm:col-span-3 items-center justify-center">
                                            <div className='tarea-formulario'>
                                                <div>
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Numero de telefono</label>
                                                    <input type="number" value={phoneBD} onChange={(e)=> setPhoneBD(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Tipo</label>
                                                    <input type="text" value={typePhoneBD} onChange={(e)=> setTypePhoneBD(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />

                                                    <button onClick={onAddBusinessDataPhone}>add</button>                                                    
                                                </div>
                                            </div>
                                            {phoneDataBusiness?.map((j)=>
                                                <div className='tarea-contenedor' id={j.phone}>
                                                    <div 
                                                        className='tarea-texto text-black'>
                                                        {j.phone}
                                                    </div>
                                                    <div
                                                        className='tarea-contenedor-iconos'
                                                        id={j.phone} 
                                                        onClick={OnEliminarBusinessDataPhone}>
                                                        <AiOutlineCloseCircle id={j.phone} className='tarea-icono text-black' />
                                                    </div>                                                    
                                                </div>                                                
                                            )}
                                        </div>

                                        <div className='col-span-4 sm:col-span-6 items-center justify-center'>
                                            <button onClick={onAddBusinessData}>Agregar datos del negocio</button>

                                            {businessData?.map((y)=>
                                                <div className='tarea-contenedor' id={y.business_name}>
                                                    <div 
                                                        className='tarea-texto text-black'>
                                                        {y.business_name}
                                                    </div>
                                                    <div
                                                        className='tarea-contenedor-iconos'
                                                        id={y.business_name} 
                                                        onClick={OnEliminarBusinessData}
                                                        >
                                                        <AiOutlineCloseCircle id={y.business_name} className='tarea-icono text-black' />
                                                    </div>                                                    
                                                </div>                                                
                                            )}
                                        </div>

                                        {/* DATOS DE LA GARANTIA */}

                                        <div className='col-span-4 sm:col-span-6 items-center justify-center'>
                                            <label className="block text-sm font-medium text-gray-700">Datos de la garantía</label>
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Descripción</label>
                                            <input type="text" value={description} onChange={(e)=> setDescription(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Fecha de expiración</label>
                                            <input type="text" value={expirationDate} onChange={(e)=> setExpirationDate(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Tipo de garantía</label>
                                            <input type="text" value={guaranteeType} onChange={(e)=> setGuaranteeType(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Porcentaje</label>
                                            <input type="text" value={percentageGuarantee} onChange={(e)=> setPercentageGuarantee(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Valor</label>
                                            <input type="text" value={value} onChange={(e)=> setValue(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className='col-span-4 sm:col-span-6 items-center justify-center'>
                                            <button onClick={onAddGuarantee} className="">Agregar garantía</button>

                                            {guarantee?.map((y)=>
                                                <div className='tarea-contenedor' id={y.expiration_date}>
                                                    <div 
                                                        className='tarea-texto text-black'>
                                                        {y.description}
                                                    </div>
                                                    <div
                                                        className='tarea-contenedor-iconos'
                                                        id={y.expiration_date} 
                                                        onClick={OnEliminarGuarantee}
                                                        >
                                                        <AiOutlineCloseCircle id={y.expiration_date} className='tarea-icono text-black' />
                                                    </div>                                                    
                                                </div>                                                
                                            )}
                                        </div>

                                        {/* DATOS DE EL AVAL */}

                                        <div className='col-span-4 sm:col-span-6 items-center justify-center'>
                                            <label className="block text-sm font-medium text-gray-700">Datos de el aval</label>
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Nombre</label>
                                            <input type="text" value={nameGuarantor} onChange={(e)=> setNameGuarantor(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Apellido paterno</label>
                                            <input type="text" value={lastname} onChange={(e)=> setLastname(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Apellido materno</label>
                                            <input type="text" value={secondLastnameGuarantor} onChange={(e)=> setSecondLastnameGuarantor(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">A que se dedica la empresa</label>
                                            <input type="text" value={companyWorksAt} onChange={(e)=> setCompanyWorksAt(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Curp</label>
                                            <input type="text" value={curpGuarantor} onChange={(e)=> setCurpGuarantor(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Fecha de nacimiento</label>
                                            <input type="text" value={dobGuarantor} onChange={(e)=> setDobGuarantor(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">e. firma</label>
                                            <input type="text" value={eSignature} onChange={(e)=> setESignature(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Email</label>
                                            <input type="text" value={emailGuarantor} onChange={(e)=> setEmailGuarantor(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Genero</label>
                                            <input type="text" value={genderGuarantor} onChange={(e)=> setGenderGuarantor(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Número de identificación</label>
                                            <input type="text" value={identificationNumber} onChange={(e)=> setIdentificationNumber(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Número de identificación</label>
                                            <input type="text" value={identificationNumber} onChange={(e)=> setIdentificationNumber(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">La persona recide en</label>
                                            <input type="text" value={personResidesIn} onChange={(e)=> setPersonResidesIn(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">RFC</label>
                                            <input type="text" value={rfcGuarantor} onChange={(e)=> setRfcGuarantor(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className='col-span-6 sm:col-span-2'>
                                            <div>
                                                <label for="first-name" className="block text-sm font-medium text-gray-700">Sexo</label>
                                                <input type="text" value={sexGuarantor} onChange={(e)=> setSexGuarantor(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />                                                  
                                            </div>
                                        </div>

                                        <div className='col-span-6 sm:col-span-2'>
                                            <div>
                                                <label for="first-name" className="block text-sm font-medium text-gray-700">Nacionalidad</label>
                                                <input type="text" value={nationalityGuarantor} onChange={(e)=> setNationalityGuarantor(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />                                                  
                                            </div>
                                        </div>

                                        <div className='col-span-6 sm:col-span-2'>
                                            <div>
                                                <label for="first-name" className="block text-sm font-medium text-gray-700">Lugar de nacimeinto</label>
                                                <input type="text" value={provinceOfBirthGuarantor} onChange={(e)=> setProvinceOfBirthGuarantor(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />                                                  
                                            </div>
                                        </div>

                                        <div className='col-span-6 sm:col-span-2'>
                                            <div>
                                                <label for="first-name" className="block text-sm font-medium text-gray-700">Ciudad de nacimeinto</label>
                                                <input type="text" value={countryOfBirthGuarantor} onChange={(e)=> setCountryOfBirthGuarantor(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />                                                  
                                            </div>
                                        </div>
                                        
                                        <div className='col-span-6 sm:col-span-2'>
                                            <div>
                                                <label for="first-name" className="block text-sm font-medium text-gray-700">Estado civil</label>
                                                <input type="text" value={maritalStatusGuarantor} onChange={(e)=> setMaritalStatusGuarantor(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />                                                  
                                            </div>
                                        </div>

                                        <div className='tarea-formulario sm:col-span-3'>
                                            <div>
                                                <label for="first-name" className="block text-sm font-medium text-gray-700">Tipo de identificación</label>
                                                <input type="text" value={identificationType} onChange={(e)=> setIdentificationType(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                <button onClick={onAddIdentificationType}>add</button>                                                    
                                            </div>

                                            {identificationTypeR?.map((j)=>
                                                <div className='tarea-contenedor' >
                                                    <div 
                                                        className='tarea-texto text-black'>
                                                        {j}
                                                    </div>
                                                    <div
                                                        className='tarea-contenedor-iconos'
                                                        id={j} 
                                                        onClick={OnEliminarIdentificationType}>
                                                        <AiOutlineCloseCircle id={j} className='tarea-icono text-black' />
                                                    </div>                                                    
                                                </div>                                                
                                            )}
                                        </div>

                                        <div className='tarea-formulario sm:col-span-3'>
                                            <div>
                                                <label for="first-name" className="block text-sm font-medium text-gray-700">Ocupación</label>
                                                <input type="text" value={ocupationGuarantor} onChange={(e)=> setOcupationGuarantor(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                <button onClick={onAddOcupation}>add</button>                                                    
                                            </div>

                                            {ocupationGuarantorR?.map((j)=>
                                                <div className='tarea-contenedor' >
                                                    <div 
                                                        className='tarea-texto text-black'>
                                                        {j}
                                                    </div>
                                                    <div
                                                        className='tarea-contenedor-iconos'
                                                        id={j} 
                                                        onClick={OnEliminarOcupation}>
                                                        <AiOutlineCloseCircle id={j} className='tarea-icono text-black' />
                                                    </div>                                                    
                                                </div>                                                
                                            )}
                                        </div>

                                        <div class="col-span-4 sm:col-span-3 items-center justify-center">
                                            <div className='tarea-formulario'>
                                            {/* <label for="first-name" className="block text-sm font-medium text-gray-700">Dirección</label> */}
                                                <div>
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Dirección</label>

                                                    <input type="text" value={addressLineGuarantor} onChange={(e)=> setAddressLineGuarantor(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Tipo de domicilio</label>
                                                    <input type="text" value={addressTypeGuarantor} onChange={(e)=> setAddressTypeGuarantor(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Tipo de recidencia</label>
                                                    <input type="text" value={ownershipTypeGuarantor} onChange={(e)=> setOwnershipTypeGuarantor(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Entidad federativa</label>
                                                    <input type="text" value={federalEntityGuarantor} onChange={(e)=> setFederalEntityGuarantor(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Municipio</label>
                                                    <input type="text" value={municipalityGuarantor} onChange={(e)=> setMunicipalityGuarantor(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Ciudad</label>
                                                    <input type="text" value={cityGuarantor} onChange={(e)=> setCityGuarantor(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">País</label>
                                                    <input type="text" value={countryGuarantor} onChange={(e)=> setCountryGuarantor(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Tiempo de residencia</label>
                                                    <input type="text" value={residenceSinceGuarantor} onChange={(e)=> setResidenceSinceGuarantor(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Calles de referencia</label>
                                                    <input type="text" value={streetReferenceGuarantor} onChange={(e)=> setStreetReferenceGuarantor(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Dirección Actual</label>
                                                    <input type="text" value={defaultAGuarantor} onChange={(e)=> setDefaultAGuarantor(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <button onClick={onAddGuarantorDataAddress}>add</button>
                                                </div>
                                            </div>

                                            {guarantorAddress?.map((x)=>
                                                <div className='tarea-contenedor' id={x.address_line}>
                                                    <div 
                                                        className='tarea-texto text-black'>
                                                        {x.address_line}
                                                    </div>
                                                    <div
                                                        className='tarea-contenedor-iconos'
                                                        id={x.address_line} 
                                                        onClick={OnEliminarGuarantorAddress}>
                                                        <AiOutlineCloseCircle id={x.address_line} className='tarea-icono text-black' />
                                                    </div>                                                    
                                                </div>                                                
                                            )}
                                        </div>

                                        <div class="col-span-4 sm:col-span-3 items-center justify-center">
                                            <div className='tarea-formulario'>
                                                <div>
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Numero de telefono</label>
                                                    <input type="number" value={phonesGuarantor} onChange={(e)=> setPhonesGuarantor(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Tipo</label>
                                                    <input type="text" value={typePhoneGuarantor} onChange={(e)=> setTypePhoneGuarantor(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />

                                                    <button onClick={onAddGuarantorPhone}>add</button>                                                    
                                                </div>
                                            </div>
                                            {phoneGuarantor?.map((j)=>
                                                <div className='tarea-contenedor' id={j.phone}>
                                                    <div 
                                                        className='tarea-texto text-black'>
                                                        {j.phone}
                                                    </div>
                                                    <div
                                                        className='tarea-contenedor-iconos'
                                                        id={j.phone} 
                                                        onClick={OnEliminarGuarantorPhone}>
                                                        <AiOutlineCloseCircle id={j.phone} className='tarea-icono text-black' />
                                                    </div>                                                    
                                                </div>                                                
                                            )}
                                        </div>

                                        <div className='col-span-4 sm:col-span-6 items-center justify-center'>
                                            <button onClick={onAddGuarantor} className="">Agregar aval</button>

                                            {guarantor?.map((y)=>
                                                <div className='tarea-contenedor' id={y.rfc}>
                                                    <div 
                                                        className='tarea-texto text-black'>
                                                        {y.name} {y.lastname}
                                                    </div>
                                                    <div
                                                        className='tarea-contenedor-iconos'
                                                        id={y.rfc} 
                                                        onClick={OnEliminarGuarantor}
                                                        >
                                                        <AiOutlineCloseCircle id={y.rfc} className='tarea-icono text-black' />
                                                    </div>                                                    
                                                </div>                                                
                                            )}
                                        </div>

                                        {/* DATOS de Referencia personal */}

                                        <div className='col-span-4 sm:col-span-6 items-center justify-center'>
                                            <label className="block text-sm font-medium text-gray-700">Referencia personal</label>
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Nombre</label>
                                            <input type="text" value={nameRP} onChange={(e)=> setNameRP(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Apellido paterno</label>
                                            <input type="text" value={lastnameRP} onChange={(e)=> setLastnameRP(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Apellido materno</label>
                                            <input type="text" value={secondLastnameRP} onChange={(e)=> setSecondLastnameRP(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Fecha de nacimeinto</label>
                                            <input type="text" value={dobRP} onChange={(e)=> setDobRP(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-2">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Relación</label>
                                            <input type="text" value={relationshipRP} onChange={(e)=> setRelationshipRP(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div class="col-span-4 sm:col-span-3 items-center justify-center">
                                            <div className='tarea-formulario'>
                                            {/* <label for="first-name" className="block text-sm font-medium text-gray-700">Dirección</label> */}
                                                <div>
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Dirección</label>

                                                    <input type="text" value={addressLineRP} onChange={(e)=> setAddressLineRP(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Tipo de domicilio</label>
                                                    <input type="text" value={addressTypeRP} onChange={(e)=> setAddressTypeRP(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Tipo de recidencia</label>
                                                    <input type="text" value={ownershipTypeRP} onChange={(e)=> setOwnershipTypeRP(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Entidad federativa</label>
                                                    <input type="text" value={federalEntityRP} onChange={(e)=> setFederalEntityRP(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Municipio</label>
                                                    <input type="text" value={municipalityRP} onChange={(e)=> setMunicipalityRP(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Ciudad</label>
                                                    <input type="text" value={cityRP} onChange={(e)=> setCityRP(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">País</label>
                                                    <input type="text" value={countryRP} onChange={(e)=> setCountryRP(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Tiempo de residencia</label>
                                                    <input type="text" value={residenceSinceRP} onChange={(e)=> setResidenceSinceRP(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Calles de referencia</label>
                                                    <input type="text" value={streetReferenceRP} onChange={(e)=> setStreetReferenceRP(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Dirección Actual</label>
                                                    <input type="text" value={defaultARP} onChange={(e)=> setDefaultARP(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <button onClick={onAddGuarantorRP}>add</button>
                                                </div>
                                            </div>

                                            {addressRP?.map((x)=>
                                                <div className='tarea-contenedor' id={x.address_line}>
                                                    <div 
                                                        className='tarea-texto text-black'>
                                                        {x.address_line}
                                                    </div>
                                                    <div
                                                        className='tarea-contenedor-iconos'
                                                        id={x.address_line} 
                                                        onClick={OnEliminarRPAddress}>
                                                        <AiOutlineCloseCircle id={x.address_line} className='tarea-icono text-black' />
                                                    </div>                                                    
                                                </div>                                                
                                            )}
                                        </div>

                                        <div class="col-span-4 sm:col-span-3 items-center justify-center">
                                            <div className='tarea-formulario'>
                                                <div>
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Numero de telefono</label>
                                                    <input type="number" value={phonesRP} onChange={(e)=> setPhonesRP(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    <label for="first-name" className="block text-sm font-medium text-gray-700">Tipo</label>
                                                    <input type="text" value={typePhoneRP} onChange={(e)=> setTypePhoneRP(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />

                                                    <button onClick={onAddRPPhone}>add</button>                                                    
                                                </div>
                                            </div>
                                            {phoneRP?.map((j)=>
                                                <div className='tarea-contenedor' id={j.phone}>
                                                    <div 
                                                        className='tarea-texto text-black'>
                                                        {j.phone}
                                                    </div>
                                                    <div
                                                        className='tarea-contenedor-iconos'
                                                        id={j.phone} 
                                                        onClick={OnEliminarRPPhone}>
                                                        <AiOutlineCloseCircle id={j.phone} className='tarea-icono text-black' />
                                                    </div>                                                    
                                                </div>                                                
                                            )}
                                        </div>

                                        <div className='col-span-4 sm:col-span-6 items-center justify-center'>
                                            <button onClick={onAddRP} className="">Agregar referencia personal</button>

                                            {rP?.map((y)=>
                                                <div className='tarea-contenedor' id={y.dob}>
                                                    <div 
                                                        className='tarea-texto text-black'>
                                                        {y.name} {y.lastname}
                                                    </div>
                                                    <div
                                                        className='tarea-contenedor-iconos'
                                                        id={y.dob} 
                                                        onClick={OnEliminarRP}
                                                        >
                                                        <AiOutlineCloseCircle id={y.dob} className='tarea-icono text-black' />
                                                    </div>                                                    
                                                </div>                                                
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                    <div className="border-t border-gray-200"></div>
                </div>
            </div>
        </section>
    );
}

export { FormClients as default };
