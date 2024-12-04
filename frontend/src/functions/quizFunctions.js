export const submitQuestion = (
  quizCompleted,
  quizQuestions,
  currentQuestionIndex,
  userAnswer,
  setCurrentQuestionIndex,
  setUserAnswer,
  setUser,
  setQuizCompleted,
  markQuizCompleted,
  navigate,
  id
) => {
  if (quizCompleted) return; // Prevent further actions if quiz is completed

  const currentQuestion = quizQuestions[currentQuestionIndex];

  // Check if an answer is provided
  if (
    (currentQuestion.type === "multiple-choice" && !userAnswer) || // No option selected for multiple-choice
    (currentQuestion.type === "user-input" && userAnswer.trim() === "") // Input field is empty
  ) {
    toast.info("You shall answer 🧙‍♂️");
    return;
  }

  // Check if the answer is correct
  if (
    (currentQuestion.type === "multiple-choice" &&
      userAnswer === currentQuestion.correctAnswer) ||
    (currentQuestion.type === "user-input" &&
      userAnswer.trim().toLowerCase() ===
        currentQuestion.correctAnswer.trim().toLowerCase())
  ) {
    toast.success("Bravo! 🥳 You nailed it! 🎯");
    sounds.correct.play();
    updateScore(setUser);
  } else {
    toast.error("Ooops Wrong Answer 😔");
    sounds.wrong.play(); // Play wrong answer sound
  }

  // Move to the next question or finish the quiz
  if (currentQuestionIndex < quizQuestions.length - 1) {
    setCurrentQuestionIndex((prev) => prev + 1);
    setUserAnswer(""); // Reset the input field
  } else {
    setQuizCompleted(true); // Mark the quiz as completed
    markQuizCompleted(parseInt(id));
    toast.success("Quiz Complete 🥳");
    sounds.completed.play(); // Play quiz completion sound
    setUser((prevUser) => ({
      ...prevUser,
      completedQuizzes: [...(prevUser.completedQuizzes || []), parseInt(id)],
    }));
    setTimeout(() => {
      navigate("/panel");
    }, 3000);
  }
};
