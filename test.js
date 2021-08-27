// Tests

const axios = require('axios');

const data_struct = {
  philhealth_info: {
    isMember: true,
    number: '',
    category: ''
  },
  personal_info: {
    first_name: '',
    middle_name: '',
    last_name: '',
    suffix: '',
    sex: '',
    birth: Date.now(),
    civil_status: '',
    contact: {
      number: '',
      address: ''
    },
    employment: {
      status: '',
      work: '',
      employer_name: '',
      company_name: '',
      company_address: '',
      category: ''
    }
  },
  health_information: {
    covid: {
      has_interaction: false,
      is_diagnosed: false,
      diagnosis_date: Date.now(),
      classification: ''
    },
    has_comorbidity: false,
    comorbidity: '',
    is_pregnant: false,
    medical_history: {
      disease: [],
      allergies: []
    }
  },
  vaccine_info: [
    {
      name: '',
      date_of_vaccination: '',
      dosage: '1',
      batch_no: '',
      health_facility: '',
      vaccinator: {
        last_name: '',
        first_name: '',
        middle_name: '',
        suffix: ''
      }
    }
  ],
  voucher_info: [
    {
      name: 'Jalibi Not Makdo',
      discount: '10 PHP DSCT ON YAM BURGIR'
    }
  ]
};

const sampleEntry1 = { ...data_struct };
sampleEntry1.philhealth_info.isMember = true;
sampleEntry1.philhealth_info.number = '11-201534404-7';
sampleEntry1.personal_info.category = "OFW";
sampleEntry1.personal_info.first_name = 'John';
sampleEntry1.personal_info.middle_name = "Matrix"
sampleEntry1.personal_info.last_name = 'Doe';
sampleEntry1.personal_info.sex = "Male";
sampleEntry1.personal_info.contact.number = 09218956471;
sampleEntry1.personal_info.contact.address = "Somwehere Along the Woods";
sampleEntry1.health_information.covid.has_interaction = true;
sampleEntry1.health_information.covid.is_diagnosed = true;
sampleEntry1.health_information.covid.diagnosis_date = Date.now();
sampleEntry1.health_information.covid.classification = "Asymptomatic";
sampleEntry1.health_information.has_comorbidity = true;
sampleEntry1.health_information.comorbidity = 'Hypertension';
sampleEntry1.vaccine_info.name = "Sinovac CoronaVac";
sampleEntry1.vaccine_info.dosage = '2';
sampleEntry1.vaccine_info.batch_no = '12345';
sampleEntry1.vaccine_info.health_facility = 'RHU Kalibo';

const sampleEntry2 = { ...data_struct };
sampleEntry2.philhealth_info.isMember = true;
sampleEntry2.philhealth_info.number = '11-208975404-7';
sampleEntry2.personal_info.category = "OFW";
sampleEntry2.personal_info.first_name = 'Jane';
sampleEntry2.personal_info.middle_name = "Matrix"
sampleEntry2.personal_info.last_name = 'Doe';
sampleEntry2.personal_info.sex = "Female";
sampleEntry2.personal_info.civil_status = "Married";
sampleEntry2.personal_info.contact.number = 09218426471;
sampleEntry2.personal_info.contact.address = "Somwehere Along the Woods";
sampleEntry2.health_information.covid.has_interaction = true;
sampleEntry2.health_information.covid.is_diagnosed = true;
sampleEntry2.health_information.covid.diagnosis_date = Date.now();
sampleEntry2.health_information.covid.classification = "Mild";
sampleEntry2.health_information.has_comorbidity = true;
sampleEntry2.health_information.comorbidity = 'High Blood';
sampleEntry2.vaccine_info.name = "Sinovac CoronaVac";
sampleEntry2.vaccine_info.dosage = '2';
sampleEntry2.vaccine_info.batch_no = '12346';
sampleEntry2.vaccine_info.health_facility = 'RHU Kalibo';

const sampleEntry3 = { ...data_struct };
sampleEntry3.philhealth_info.isMember = true;
sampleEntry3.philhealth_info.number = '11-208978742-7';
sampleEntry3.personal_info.category = "Indigent";
sampleEntry3.personal_info.first_name = 'Maria Angela';
sampleEntry3.personal_info.middle_name = "delaCruz"
sampleEntry3.personal_info.last_name = 'Protacio';
sampleEntry3.personal_info.sex = "Female";
sampleEntry3.personal_info.civil_status = "Married";
sampleEntry3.personal_info.contact.number = 09215423671;
sampleEntry3.personal_info.contact.address = "Bonifacio Road Along the Highway";
sampleEntry3.health_information.covid.has_interaction = false;
sampleEntry3.health_information.covid.is_diagnosed = false;
sampleEntry3.health_information.has_comorbidity = true;
sampleEntry3.health_information.comorbidity = 'Anxiety';
sampleEntry3.health_information.medical_history.disease = ['Bronchial Asthma', 'Hypertension'];
sampleEntry3.health_information.medical_history.allergies = ['Food Allegy']
sampleEntry3.vaccine_info.name = "Sinovac CoronaVac";
sampleEntry3.vaccine_info.dosage = '1';
sampleEntry3.vaccine_info.batch_no = '15846';
sampleEntry3.vaccine_info.health_facility = 'RHU Kalibo';

const sampleEntry4 = { ...data_struct };
sampleEntry4.philhealth_info.isMember = true;
sampleEntry4.philhealth_info.number = '11-2016348904-6';
sampleEntry4.personal_info.category = "Self Employed";
sampleEntry4.personal_info.first_name = 'Angelo Cruz';
sampleEntry4.personal_info.middle_name = "Patrisa"
sampleEntry4.personal_info.last_name = 'Ocampo';
sampleEntry4.personal_info.sex = "Male";
sampleEntry4.personal_info.civil_status = "Divorced";
sampleEntry4.personal_info.contact.number = 09215424233;
sampleEntry4.personal_info.contact.address = "Poblacion Aguinaldo Highway";
sampleEntry4.health_information.covid.has_interaction = false;
sampleEntry4.health_information.covid.is_diagnosed = false;
sampleEntry4.health_information.has_comorbidity = false;
sampleEntry4.health_information.comorbidity = '';
sampleEntry4.health_information.medical_history.disease = ['Lung Cancer', 'Hypertension'];
sampleEntry4.health_information.medical_history.allergies = ['Pollen Allegy']
sampleEntry4.vaccine_info.name = "Johnson & Johnson (Jannsen)";
sampleEntry4.vaccine_info.dosage = '1';
sampleEntry4.vaccine_info.batch_no = '15847';
sampleEntry4.vaccine_info.health_facility = 'RHU Kalibo';


const sampleEntry5 = { ...data_struct };
sampleEntry5.philhealth_info.isMember = true;
sampleEntry5.philhealth_info.number = '11-2018752124-6';
sampleEntry5.personal_info.category = "OFW";
sampleEntry5.personal_info.first_name = 'Isabela';
sampleEntry5.personal_info.middle_name = "Ocampo"
sampleEntry5.personal_info.last_name = 'Cruz';
sampleEntry5.personal_info.sex = "Female";
sampleEntry5.personal_info.civil_status = "Separated";
sampleEntry5.personal_info.contact.number = 09254789233;
sampleEntry5.personal_info.contact.address = "Blk 19 Lt 2 Murago Subd.";
sampleEntry5.personal_info.employment.status = "Self Employed";
sampleEntry5.personal_info.employment.work = "Sari-Sari Store";
sampleEntry5.personal_info.employment.company_name = "Isabela's Tingi Store";
sampleEntry5.personal_info.employment.category = 'Small Business'
sampleEntry5.health_information.covid.has_interaction = true;
sampleEntry5.health_information.covid.is_diagnosed = true;
sampleEntry5.health_information.covid.classification = 'Mild';
sampleEntry5.health_information.has_comorbidity = false;
sampleEntry5.health_information.comorbidity = '';
sampleEntry5.health_information.medical_history.disease = ['Lung Cancer', 'Hypertension'];
sampleEntry5.health_information.medical_history.allergies = ['Pollen Allegy']
sampleEntry5.vaccine_info.name = "Sinovac CoronaVac";
sampleEntry5.vaccine_info.dosage = '1';
sampleEntry5.vaccine_info.batch_no = '14147';
sampleEntry5.vaccine_info.health_facility = 'RHU Kalibo';


const sampleEntry6 = { ...data_struct };
sampleEntry6.philhealth_info.isMember = false;
sampleEntry6.personal_info.first_name = 'Ermelino';
sampleEntry6.personal_info.middle_name = "Tirbano"
sampleEntry6.personal_info.last_name = 'Lapila';
sampleEntry6.personal_info.sex = "Male";
sampleEntry6.personal_info.civil_status = "Widowed";
sampleEntry6.personal_info.contact.address = "556 Kungbataan Road";
sampleEntry6.health_information.covid.has_interaction = false;
sampleEntry6.health_information.covid.is_diagnosed = false;
sampleEntry6.health_information.has_comorbidity = true;
sampleEntry6.health_information.comorbidity = 'High Blood Pressure';
sampleEntry6.health_information.medical_history.disease = ['Bronchial Asthma', 'Hypertension'];
sampleEntry6.health_information.medical_history.allergies = ['Food Allegy']
sampleEntry6.vaccine_info.name = "Moderna";
sampleEntry6.vaccine_info.dosage = '2';
sampleEntry6.vaccine_info.batch_no = '25847';
sampleEntry6.vaccine_info.health_facility = 'RHU Kalibo';


const sampleEntry7 = { ...data_struct };
sampleEntry7.philhealth_info.isMember = false;
sampleEntry7.personal_info.first_name = 'Giles';
sampleEntry7.personal_info.middle_name = "Sabando"
sampleEntry7.personal_info.last_name = 'Linggo';
sampleEntry7.personal_info.sex = "Female";
sampleEntry7.personal_info.civil_status = "Married";
sampleEntry7.personal_info.contact.number = 0920105180;
sampleEntry7.personal_info.contact.address = "550 Kawaning Road";
sampleEntry7.personal_info.employment.status = 'Part Time Employed';
sampleEntry7.personal_info.employment.work = 'Service Crew';
sampleEntry7.personal_info.employment.employer_name = 'Jalibi D. Tuazon';
sampleEntry7.personal_info.employment.company_name = 'Jalibi';
sampleEntry7.personal_info.employment.company_address = 'Jalibi Highway';
sampleEntry7.personal_info.employment.category = 'Food Services';
sampleEntry7.health_information.covid.has_interaction = false;
sampleEntry7.health_information.covid.is_diagnosed = false;
sampleEntry7.health_information.has_comorbidity = false;
sampleEntry7.health_information.comorbidity = '';
sampleEntry7.health_information.medical_history.disease = ['Lung Cancer', 'Hypertension'];
sampleEntry7.health_information.medical_history.allergies = ['Pollen Allegy']
sampleEntry7.vaccine_info.name = "Johnson & Johnson (Jannsen)";
sampleEntry7.vaccine_info.dosage = '1';
sampleEntry7.vaccine_info.batch_no = '11267';

const sampleEntry8 = { ...data_struct };
sampleEntry8.philhealth_info.isMember = false;
sampleEntry8.personal_info.first_name = 'Sintiya';
sampleEntry8.personal_info.middle_name = "Ebalagor"
sampleEntry8.personal_info.last_name = 'Untalana';
sampleEntry8.personal_info.sex = "Male";
sampleEntry8.personal_info.civil_status = "Single";
sampleEntry8.personal_info.contact.address = "8758 Kawaling Sinaingang Subd.";
sampleEntry8.health_information.covid.has_interaction = false;
sampleEntry8.health_information.covid.is_diagnosed = false;
sampleEntry8.health_information.has_comorbidity = false;
sampleEntry8.vaccine_info.name = "Sinovac CoronaVac";
sampleEntry8.vaccine_info.dosage = '1';
sampleEntry8.vaccine_info.batch_no = '15947';
sampleEntry8.vaccine_info.health_facility = 'RHU Kalibo';

const sampleEntry9 = { ...data_struct };
sampleEntry9.philhealth_info.isMember = false;
sampleEntry9.personal_info.first_name = 'Kumraeala';
sampleEntry9.personal_info.middle_name = "Kumpila"
sampleEntry9.personal_info.last_name = 'Kasalana';
sampleEntry9.personal_info.sex = "Female";
sampleEntry9.personal_info.civil_status = "Single";
sampleEntry9.personal_info.contact.address = "5589 Kungbataan Road";
sampleEntry9.health_information.covid.has_interaction = false;
sampleEntry9.health_information.covid.is_diagnosed = false;
sampleEntry9.health_information.has_comorbidity = true;
sampleEntry9.health_information.comorbidity = 'Diabetes';
sampleEntry9.health_information.medical_history.disease = ['Skin Cancer'];
sampleEntry9.health_information.medical_history.allergies = ['Pet Allegy']
sampleEntry9.vaccine_info.name = "Sinovac CoronaVac";
sampleEntry9.vaccine_info.dosage = '2';
sampleEntry9.vaccine_info.batch_no = '25888';
sampleEntry9.vaccine_info.health_facility = 'RHU Kalibo';

const sampleEntry10 = { ...data_struct };
sampleEntry10.philhealth_info.isMember = false;
sampleEntry10.personal_info.first_name = 'Ella';
sampleEntry10.personal_info.middle_name = "Tukina"
sampleEntry10.personal_info.last_name = 'Alastresna';
sampleEntry10.personal_info.sex = "Female";
sampleEntry10.personal_info.civil_status = "Married";
sampleEntry10.personal_info.contact.address = "6969 sa Malayo";
sampleEntry10.health_information.covid.has_interaction = false;
sampleEntry10.health_information.covid.is_diagnosed = true;
sampleEntry10.health_information.covid.diagnosis_date = Date.now();
sampleEntry10.health_information.has_comorbidity = false;
sampleEntry10.health_information.medical_history.disease = [];
sampleEntry10.health_information.medical_history.allergies = []
sampleEntry10.vaccine_info.name = "Sinovac CoronaVac";
sampleEntry10.vaccine_info.dosage = '1';
sampleEntry10.vaccine_info.batch_no = '19997';
sampleEntry10.vaccine_info.health_facility = 'RHU Kalibo';

const test = async () => {
  await axios
    .post('http://localhost:5000/insertEntry', sampleEntry1)
    .then(response => {
      console.dir(response.data, { depth: null });
    });
  await axios
    .post('http://localhost:5000/insertEntry', sampleEntry2)
    .then(response => {
      console.dir(response.data, { depth: null });
    });

  await axios
    .post('http://localhost:5000/updateEntry', {
      id: '612893f6ba0c3925102130f6',
      data: { 'philhealth_info.isMember': false }
    })
    .then(response => {
      console.dir(response.data, { depth: null });
    });

  await axios
    .get('http://localhost:5000/getEntry?id=612893f6ba0c3925102130f6')
    .then(response => {
      console.dir(response.data, { depth: null });
    });

  await axios.get('http://localhost:5000/getEntries').then(response => {
    console.dir(response.data, { depth: null });
  });

  await axios.get('http://localhost:5000/getBlockchain').then(response => {
    console.dir(response.data, { depth: null });
  });

  await axios
    .post('http://localhost:5000/countEntries', {
      filter: { vaccine_info: { $gt: 0 } }
    })
    .then(response => {
      console.dir(response.data, { depth: null });
    });
};

test();
