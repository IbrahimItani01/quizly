import React, { useContext, useEffect, useState } from "react";
import { quizContext } from "../../context/QuizContext";
import { userContext } from "../../context/UserContext";
import { useParams, useNavigate } from "react-router-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import ProgressBar from "@ramonak/react-progress-bar";
