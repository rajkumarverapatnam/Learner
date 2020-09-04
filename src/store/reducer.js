const initialState = {
  learnerDetails: [
    {
      id: 1,
      name: "john",
      age: 25,
      email: "john@gmail.com",
      phone: 1234567890,
      gitHub:
        "https://github.com/schoolofacceleratedlearning/react-assignment-learner-details-rajkumarverapatnam",
      linkedIn: "https://www.linkedin.com/feed/john",
    },
    {
      id: 2,
      name: "ben",
      age: 26,
      email: "ben@gmail.com",
      phone: 1234567890,
      gitHub:
        "https://github.com/schoolofacceleratedlearning/react-assignment-learner-details-ben",
      linkedIn: "https://www.linkedin.com/feed/ben",
    },
    {
      id: 3,
      name: "mike",
      age: 24,
      email: "mike@gmail.com",
      phone: 1234567890,
      gitHub:
        "https://github.com/schoolofacceleratedlearning/react-assignment-learner-details-mike",
      linkedIn: "https://www.linkedin.com/feed/mike",
    },
    {
      id: 4,
      name: "mary",
      age: 21,
      email: "mary@gmail.com",
      phone: 1234567890,
      gitHub:
        "https://github.com/schoolofacceleratedlearning/react-assignment-learner-details-mary",
      linkedIn: "https://www.linkedin.com/feed/mary",
    },
    {
      id: 5,
      name: "lara",
      age: 35,
      email: "lara@gmail.com",
      phone: 1234567890,
      gitHub:
        "https://github.com/schoolofacceleratedlearning/react-assignment-learner-details-lara",
      linkedIn: "https://www.linkedin.com/feed/lara",
    },
    {
      id: 6,
      name: "paul",
      age: 29,
      email: "paul@gmail.com",
      phone: 1234567890,
      gitHub:
        "https://github.com/schoolofacceleratedlearning/react-assignment-learner-details-paul",
      linkedIn: "https://www.linkedin.com/feed/paul",
    },
    {
      id: 7,
      name: "larry",
      age: 33,
      email: "larry@gmail.com",
      phone: 1234567890,
      gitHub:
        "https://github.com/schoolofacceleratedlearning/react-assignment-learner-details-larry",
      linkedIn: "https://www.linkedin.com/feed/larry",
    },
    {
      id: 8,
      name: "steve",
      age: 32,
      email: "john@gmail.com",
      phone: 1234567890,
      gitHub:
        "https://github.com/schoolofacceleratedlearning/react-assignment-learner-details-steve",
      linkedIn: "https://www.linkedin.com/feed/steve",
    },
  ],
  isLoggedIn: false,
};

const reducer = (state = initialState, action) => {
  let newState = { ...state };

  return newState;
};

export default reducer;
