import { action, debug, computed } from 'easy-peasy';

const PersonModel = {
  person1_lastname: {
    text: '',
    x: 150,
    y: 575,
  },
  person1_firstname: {
    text: '',
    x: 150,
    y: 545,
  },
  person1_birthname: {
    text: '',
    x: 150,
    y: 527,
  },
  person1_sex: {
    text: '',
    x: 150,
    y: 512,
  },
  person1_birthdata: {
    text: '',
    x: 150,
    y: 498,
  },
  person1_religion: {
    text: '',
    x: 150,
    y: 484,
  },
  person1_nationality: {
    text: '',
    x: 150,
    y: 470,
  },
  person1_alternativename: {
    text: '',
    x: 150,
    y: 456,
  },
  person2_lastname: {
    text: '',
    x: 150,
    y: 417,
  },
  person2_firstname: {
    text: '',
    x: 150,
    y: 388,
  },
  person2_birthname: {
    text: '',
    x: 150,
    y: 370,
  },
  person2_sex: {
    text: '',
    x: 150,
    y: 356,
  },
  person2_birthdata: {
    text: '',
    x: 150,
    y: 341,
  },
  person2_religion: {
    text: '',
    x: 150,
    y: 327,
  },
  person2_nationality: {
    text: '',
    x: 150,
    y: 313,
  },
  person2_alternativename: {
    text: '',
    x: 150,
    y: 299,
  },
  marital_status: {
    text: '',
    x: 42,
    y: 269,
  },
  marital_status_details: {
    text: '',
    x: 150,
    y: 269,
  },
  setField: action((state, payload) => {
    const { field, value } = payload;
    state[field].text = value;
  }),
};

export default PersonModel;
