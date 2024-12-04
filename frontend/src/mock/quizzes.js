export const mockQuizzes = [
  {
    id: 1,
    title: "General Knowledge",
    description: "Test your general knowledge with fun questions!",
  },
  {
    id: 2,
    title: "Science Quiz",
    description: "Explore the wonders of science!",
  },
  {
    id: 3,
    title: "History Trivia",
    description: "How well do you know your history?",
  },
];
export const mockQuestions = {
  1: [
    {
      id: 1,
      question: "What is the capital of France?",
      type: "multiple-choice",
      options: ["Paris", "London", "Berlin", "Rome"],
      correctAnswer: "Paris",
    },
    {
      id: 2,
      question: "How many continents are there on Earth?",
      type: "user-input",
      correctAnswer: "7",
    },
    {
      id: 3,
      question: "Which planet is known as the Red Planet?",
      type: "multiple-choice",
      options: ["Mars", "Jupiter", "Venus", "Saturn"],
      correctAnswer: "Mars",
    },
  ],
  2: [
    {
      id: 1,
      question: "What is the chemical symbol for water?",
      type: "user-input",
      correctAnswer: "H2O",
    },
    {
      id: 2,
      question: "Which gas do plants absorb from the atmosphere?",
      type: "multiple-choice",
      options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
      correctAnswer: "Carbon Dioxide",
    },
    {
      id: 3,
      question: "Who developed the theory of relativity?",
      type: "multiple-choice",
      options: [
        "Isaac Newton",
        "Albert Einstein",
        "Galileo Galilei",
        "Nikola Tesla",
      ],
      correctAnswer: "Albert Einstein",
    },
  ],
  3: [
    {
      id: 1,
      question: "In what year did World War II end?",
      type: "user-input",
      correctAnswer: "1945",
    },
    {
      id: 2,
      question: "Who was the first President of the United States?",
      type: "multiple-choice",
      options: [
        "Thomas Jefferson",
        "Abraham Lincoln",
        "George Washington",
        "John Adams",
      ],
      correctAnswer: "George Washington",
    },
    {
      id: 3,
      question: "Which ancient civilization built the pyramids?",
      type: "multiple-choice",
      options: ["Romans", "Greeks", "Egyptians", "Mayans"],
      correctAnswer: "Egyptians",
    },
  ],
};
