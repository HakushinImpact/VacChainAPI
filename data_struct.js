const data_struct = {
    philhealth_info: {
      isMember: true,
      number: '',
      category: 'OFW'
    },
    personal_info: {
      first_name: 'Dummy',
      middle_name: 'Dummy',
      last_name: '',
      suffix: '',
      sex: 'Male',
      birth: Date.now(),
      civil_status: '',
      contact: {
        number: '',
        address: '',
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