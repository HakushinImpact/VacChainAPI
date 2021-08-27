// Tests

const axios = require('axios');

const sampleEntry = {
  philhealth_info: {
    isMember: true,
    number: 1234,
    category: 'OFW'
  },
  personal_info: {
    first_name: 'Dummy',
    middle_name: 'Dummy',
    last_name: '',
    suffix: '',
    sex: 'male',
    birth: Date.now(),
    contact: {
      number: 1234,
      address: '',
      civil_status: '',
      employment: {
        status: '',
        employer_name: '',
        company_name: '',
        company_address: '',
        category: ''
      }
    }
  },
  health_information: {
    covid: {
      has_interaction: true,
      is_diagnosed: true,
      diagnosis_date: Date.now(),
      classification: '',
    },
    has_comorbidity: true,
    comorbidity: [],
    is_pregnant: true,
    medical_history: {
      disease: {
        diabetes: true,
        bronchial_asthma: true,
        hypertension: true,
        cancer: true,
        others: []
      },
      allergies: {
        drug: true,
        food: true,
        insect: true,
        latex: true,
        mold: true,
        pet: true,
        pollen: true
      }
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
        suffix: '',
      }
    }
  ],
  voucher_info: [
    {
      name: '',
      discount: ''
    }
  ]
};

const sampleEntry2 = {
  philhealth_info: {
    isMember: true,
    number: 1234,
    category: 'OFW'
  },
  personal_info: {
    first_name: 'Dummy2',
    middle_name: 'Dummy2',
    last_name: '',
    suffix: '',
    sex: 'male',
    birth: Date.now(),
    contact: {
      number: 1234,
      address: '',
      civil_status: '',
      employment: {
        status: '',
        employer_name: '',
        company_name: '',
        company_address: '',
        category: ''
      }
    }
  },
  health_information: {
    covid: {
      has_interaction: true,
      is_diagnosed: true,
      diagnosis_date: Date.now(),
      classification: '',
    },
    has_comorbidity: true,
    comorbidity: [],
    is_pregnant: true,
    medical_history: {
      disease: {
        diabetes: true,
        bronchial_asthma: true,
        hypertension: true,
        cancer: true,
        others: []
      },
      allergies: {
        drug: true,
        food: true,
        insect: true,
        latex: true,
        mold: true,
        pet: true,
        pollen: true
      }
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
        suffix: '',
      }
    }
  ],
  voucher_info: [
    {
      name: '',
      discount: ''
    }
  ]
};

const test = async () => {
  // await axios.get('http://localhost:5000/getBlockchain').then(response => {
  //   console.log(response.data);
  // });
  await axios
    .post('http://localhost:5000/insert', sampleEntry)
    .then(response => {
      console.log(response.data);
    });
  await axios
    .post('http://localhost:5000/insert', sampleEntry2)
    .then(response => {
      console.log(response.data);
    });
  await axios.get('http://localhost:5000/getAll').then(response => {
    console.log(response.data);
  });
};

test();
