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
      company: 'Facebook Inc.',
      city: 'Menlo Park',
      from: '2015',
      to: 'Present',
    },
    {
      id: uuidv4(),
      position: 'Junior Web Developer',
      company: 'Tesla Inc.',
      city: 'Palo Alto',
      from: '2012',
      to: '2015',
    },
    {
      id: uuidv4(),
      position: 'UI / UX Designer',
      company: 'Google LLC',
      city: 'Mountain View',
      from: '2010',
      to: '2012',
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
      universityName: 'University of Technology',
      city: 'Oklahoma',
      degree: 'Master',
      subject: 'Science',
      from: '2008',
      to: '2010',
    },
    {
      id: uuidv4(),
      universityName: 'University of Design Art',
      city: 'New York',
      degree: 'Bachelor',
      subject: 'Visual Art',
      from: '2005',
      to: '2008',
    }
  ]
};

export default exampleCV;