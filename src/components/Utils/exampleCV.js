import { v4 as uuidv4 } from "uuid";

const exampleCV = {
  personalInfo: {
    firstName: "John",
    lastName: "Doe",
    title: "UI/UX Designer",
    address: "123 John Doe St",
    phoneNumber: "123 456 789",
    email: "john.doe@gmail.com",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor quis ex nec feugiat. Donec porttitor, nulla sed posuere tempor, enim urna pellentesque mi, at interdum nisi quam ac tellus. Praesent eget vestibulum ante. "
   },
  experience: [
    {
      id: uuidv4(),
      position: 'Senior Web Developer',
      company: 'Linkedin',
      city: 'San Francisco ',
      from: '2020',
      to: 'Present',
    },
    {
      id: uuidv4(),
      position: 'Junior Web Developer',
      company: 'Tesla',
      city: 'Palo Alto',
      from: '2018',
      to: '2020',
    },
    {
      id: uuidv4(),
      position: 'UI / UX Designer',
      company: 'Google',
      city: 'Seattle',
      from: '2016',
      to: '2018',
    },
  ],
  project: [
    {
      id: uuidv4(),
      projectName: "Resumaker App",
      projectDescription: "Easily build a resume by filling out an application"
    },
  ],
  education: [
    {
      id: uuidv4(),
      universityName: 'University of Toronto',
      city: 'Toronto',
      degree: 'Master',
      subject: 'Science',
      from: '2014',
      to: '2016',
    },
    {
      id: uuidv4(),
      universityName: 'University of Waterloo',
      city: 'Kitchener',
      degree: 'Bachelor',
      subject: 'Science',
      from: '2010',
      to: '2014',
    }
  ]
};

export default exampleCV;