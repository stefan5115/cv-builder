import {v4 as uuidv4} from 'uuid'

const CV = {
    info:[
        {
          name:'First And Last Name',
          text:'Tanase Stefan'
        },
        {
          name:'Enter Email',
          text:'stefan.tanase.t@gmail.com'
        },
        {
          name:'Enter Phone Number',
          text:'079-999-999-9'
        },
        {
          name:'City, Country',
          text:'Braila, RO'
        }
      ],
      educations: [
        {
          id: uuidv4(),
          school:'London City University',
          degree:'Bachelors in Economics',
          startDate:'08/2020',
          endDate:'present',
          location:'New York City, US',
        }
      ],
      experiences: [
        {
          id: uuidv4(),
          company:'Umbrella Inc.',
          position:'UX & UI Designer',
          startDate:'08/2020',
          endDate:'present',
          location:'New York City, US',
          description:'Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android',
        },
        {
          id: uuidv4(),
          company:'Umbrella Inc.',
          position:'UX & UI Designer',
          startDate:'08/2020',
          endDate:'present',
          location:'New York City, US',
          description:'Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android',
        }
      ]
    
}

export default CV