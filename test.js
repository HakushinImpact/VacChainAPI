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
      has_interaction: true,
      is_diagnosed: true,
      diagnosis_date: Date.now(),
      classification: ''
    },
    has_comorbidity: true,
    comorbidity: '',
    is_pregnant: true,
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
      name: '',
      discount: ''
    }
  ]
};

const sampleEntry1 = { ...data_struct };
sampleEntry1.personal_info.first_name = 'John';
sampleEntry1.personal_info.last_name = 'Doe';
sampleEntry1.philhealth_info.number = '123456789';

const sampleEntry2 = { ...data_struct };
sampleEntry2.personal_info.first_name = 'Jane';
sampleEntry2.personal_info.last_name = 'Doe';
sampleEntry2.health_information.is_pregnant = false;

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

  await axios.get('http://localhost:5000/getEntries').then(response => {
    console.dir(response.data, { depth: null });
  });

  await axios.get('http://localhost:5000/getBlockchain').then(response => {
    console.dir(response.data, { depth: null });
  });

  await axios
    .get('http://localhost:5000/getEntry?id=612893f6ba0c3925102130f6')
    .then(response => {
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
