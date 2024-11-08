// // src/Survey.js
// import React, { useState } from 'react';
// import './Survey.css';

// const questions = [
//   { id: 1, text: "How satisfied are you with our products?", scale: 5 },
//   { id: 2, text: "How fair are the prices compared to similar retailers?", scale: 5 },
//   { id: 3, text: "How satisfied are you with the value for money of your purchase?", scale: 5 },
//   { id: 4, text: "On a scale of 1-10 how would you recommend us to your friends and family?", scale: 10 },
//   { id: 5, text: "What could we do to improve our service?", scale: null }
// ];

// const Survey = () => {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [responses, setResponses] = useState({});

//   const currentQuestion = questions[currentQuestionIndex];

//   const handleResponseChange = (value) => {
//     setResponses({
//       ...responses,
//       [currentQuestion.id]: value
//     });
//   };

//   const handleNext = () => {
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     }
//   };

//   const handlePrev = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex(currentQuestionIndex - 1);
//     }
//   };

//   return (
//     <div className="survey-container">
//       <h2>Customer Survey</h2>
//       <p className="question-counter">
//         {currentQuestionIndex + 1}/{questions.length}
//       </p>
//       <p className="question-text">{currentQuestion.text}</p>

//       {currentQuestion.scale ? (
//         <div className="rating-scale">
//           {[...Array(currentQuestion.scale)].map((_, i) => (
//             <button
//               key={i}
//               className={`rating-button ${responses[currentQuestion.id] === i + 1 ? 'selected' : ''}`}
//               onClick={() => handleResponseChange(i + 1)}
//             >
//               {i + 1}
//             </button>
//           ))}
//         </div>
//       ) : (
//         <textarea
//           className="text-response"
//           value={responses[currentQuestion.id] || ""}
//           onChange={(e) => handleResponseChange(e.target.value)}
//           placeholder="Your feedback"
//         />
//       )}

//       <div className="navigation-buttons">
//         <button className="prev-button" onClick={handlePrev} disabled={currentQuestionIndex === 0}>
//           Prev
//         </button>
//         <button className="next-button" onClick={handleNext} disabled={currentQuestionIndex === questions.length - 1}>
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Survey;

// import React, { useState, useEffect } from 'react';
// import './Survey.css';

// const defaultQuestions = [
//   { id: 1, text: "How satisfied are you with our products?", scale: 5 },
//   { id: 2, text: "How fair are the prices compared to similar retailers?", scale: 5 },
//   { id: 3, text: "How satisfied are you with the value for money of your purchase?", scale: 5 },
//   { id: 4, text: "On a scale of 1-10 how would you recommend us to your friends and family?", scale: 10 },
//   { id: 5, text: "What could we do to improve our service?", scale: null }
// ];

// // Generate a unique customer session ID
// const generateSessionId = () => `session_${new Date().getTime()}`;

// const Survey = () => {
//   const [sessionId] = useState(generateSessionId());
//   const [questions, setQuestions] = useState([]);
//   const [responses, setResponses] = useState({});
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1); // Start with welcome screen

//   useEffect(() => {
//     // Load questions from local storage or use defaults
//     const savedQuestions = JSON.parse(localStorage.getItem('questions')) || defaultQuestions;
//     setQuestions(savedQuestions);

//     // Load existing responses for this session if available
//     const savedResponses = JSON.parse(localStorage.getItem(sessionId)) || {};
//     setResponses(savedResponses);
//   }, [sessionId]);

//   const saveResponse = (questionId, answer) => {
//     const updatedResponses = { ...responses, [questionId]: answer };
//     setResponses(updatedResponses);
//     localStorage.setItem(sessionId, JSON.stringify(updatedResponses));
//   };

//   const handleStart = () => {
//     setCurrentQuestionIndex(0);
//   };

//   const handleNext = () => {
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     }
//   };

//   const handlePrev = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex(currentQuestionIndex - 1);
//     }
//   };

//   const handleResponseChange = (value) => {
//     const currentQuestionId = questions[currentQuestionIndex].id;
//     saveResponse(currentQuestionId, value);
//   };

//   if (currentQuestionIndex === -1) {
//     return (
//       <div className="survey-container">
//         <h2>Welcome to the Customer Survey</h2>
//         <button className="start-button" onClick={handleStart}>Start</button>
//       </div>
//     );
//   }

//   const currentQuestion = questions[currentQuestionIndex];
//   const isLastQuestion = currentQuestionIndex === questions.length - 1;

//   return (
//     <div className="survey-container">
//       <h2>Customer Survey</h2>
//       <p className="question-counter">
//         {currentQuestionIndex + 1}/{questions.length}
//       </p>
//       <p className="question-text">{currentQuestion.text}</p>

//       {currentQuestion.scale ? (
//         <div className="rating-scale">
//           {[...Array(currentQuestion.scale)].map((_, i) => (
//             <button
//               key={i}
//               className={`rating-button ${responses[currentQuestion.id] === i + 1 ? 'selected' : ''}`}
//               onClick={() => handleResponseChange(i + 1)}
//             >
//               {i + 1}
//             </button>
//           ))}
//         </div>
//       ) : (
//         <textarea
//           className="text-response"
//           value={responses[currentQuestion.id] || ""}
//           onChange={(e) => handleResponseChange(e.target.value)}
//           placeholder="Your feedback"
//         />
//       )}

//       <div className="navigation-buttons">
//         <button className="prev-button" onClick={handlePrev} disabled={currentQuestionIndex === 0}>
//           Prev
//         </button>
//         <button className="next-button" onClick={handleNext} disabled={isLastQuestion}>
//           {isLastQuestion ? "Finish" : "Next"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Survey;




// import React, { useState, useEffect } from 'react';
// import { initializeApp } from 'firebase/app';
// import { 
//   getFirestore, 
//   collection, 
//   doc, 
//   setDoc, 
//   getDoc,
//   getDocs,
//   query,
//   where,
//   updateDoc 
// } from 'firebase/firestore';
// import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
// import { Alert, AlertDescription } from "@/components/ui/alert";


//     const firebaseConfig = {
//         apiKey: "AIzaSyCzPNCKePxc8RyY7gfDoi_Jrc6YzxbcDDs",
//         authDomain: "survey-a42c4.firebaseapp.com",
//         projectId: "survey-a42c4",
//         storageBucket: "survey-a42c4.firebasestorage.app",
//         messagingSenderId: "444119330232",
//         appId: "1:444119330232:web:48a68c0140afcd599c334d",
//         measurementId: "G-9JCVJP9PZS"
//       };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// const defaultQuestions = [
//   { id: 1, text: "How satisfied are you with our products?", scale: 5 },
//   { id: 2, text: "How fair are the prices compared to similar retailers?", scale: 5 },
//   { id: 3, text: "How satisfied are you with the value for money of your purchase?", scale: 5 },
//   { id: 4, text: "On a scale of 1-10 how would you recommend us to your friends and family?", scale: 10 },
//   { id: 5, text: "What could we do to improve our service?", scale: null }
// ];

// const generateSessionId = () => `session_${new Date().getTime()}`;

// const Survey = () => {
//   const [sessionId] = useState(generateSessionId());
//   const [questions, setQuestions] = useState([]);
//   const [responses, setResponses] = useState({});
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
//   const [showSubmitDialog, setShowSubmitDialog] = useState(false);
//   const [showThankYou, setShowThankYou] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const loadQuestions = async () => {
//       try {
//         // Try to load questions from Firebase
//         const questionsRef = collection(db, 'questions');
//         const querySnapshot = await getDocs(questionsRef);
        
//         if (!querySnapshot.empty) {
//           const loadedQuestions = [];
//           querySnapshot.forEach(doc => {
//             loadedQuestions.push(doc.data());
//           });
//           setQuestions(loadedQuestions);
//         } else {
//           // If no questions in Firebase, use defaults and save them
//           await Promise.all(defaultQuestions.map(async (question) => {
//             const docRef = doc(db, 'questions', question.id.toString());
//             await setDoc(docRef, question);
//           }));
//           setQuestions(defaultQuestions);
//         }
//       } catch (error) {
//         setError("Failed to load questions. Please try again later.");
//       }
//     };

//     loadQuestions();
//   }, []);

//   useEffect(() => {
//     const loadExistingResponses = async () => {
//       try {
//         const sessionRef = doc(db, 'sessions', sessionId);
//         const sessionDoc = await getDoc(sessionRef);
        
//         if (sessionDoc.exists()) {
//           setResponses(sessionDoc.data().responses || {});
//         }
//       } catch (error) {
//         setError("Failed to load existing responses.");
//       }
//     };

//     loadExistingResponses();
//   }, [sessionId]);

//   const saveResponse = async (questionId, answer) => {
//     try {
//       const updatedResponses = { ...responses, [questionId]: answer };
//       setResponses(updatedResponses);
      
//       const sessionRef = doc(db, 'sessions', sessionId);
//       await setDoc(sessionRef, {
//         responses: updatedResponses,
//         timestamp: new Date().toISOString(),
//         status: 'IN_PROGRESS'
//       }, { merge: true });
//     } catch (error) {
//       setError("Failed to save your response. Please try again.");
//     }
//   };

//   const handleStart = () => {
//     setCurrentQuestionIndex(0);
//   };

//   const handleNext = () => {
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     } else {
//       setShowSubmitDialog(true);
//     }
//   };

//   const handlePrev = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex(currentQuestionIndex - 1);
//     }
//   };

//   const handleSubmitSurvey = async () => {
//     try {
//       const sessionRef = doc(db, 'sessions', sessionId);
//       await updateDoc(sessionRef, {
//         status: 'COMPLETED',
//         completedAt: new Date().toISOString()
//       });
      
//       setShowSubmitDialog(false);
//       setShowThankYou(true);
      
//       // Reset to welcome screen after 5 seconds
//       setTimeout(() => {
//         setShowThankYou(false);
//         setCurrentQuestionIndex(-1);
//         setResponses({});
//       }, 5000);
//     } catch (error) {
//       setError("Failed to submit survey. Please try again.");
//     }
//   };

//   if (showThankYou) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gray-50">
//         <div className="text-center p-8 bg-white rounded-lg shadow-lg">
//           <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
//           <p className="text-gray-600">We appreciate your valuable feedback.</p>
//         </div>
//       </div>
//     );
//   }

//   if (currentQuestionIndex === -1) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gray-50">
//         <div className="text-center p-8 bg-white rounded-lg shadow-lg">
//           <h2 className="text-2xl font-bold mb-4">Welcome to the Customer Survey</h2>
//           <button 
//             onClick={handleStart}
//             className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//           >
//             Start
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const currentQuestion = questions[currentQuestionIndex];
//   const isLastQuestion = currentQuestionIndex === questions.length - 1;

//   return (
//     <div className="max-w-2xl mx-auto p-6">
//       {error && (
//         <Alert variant="destructive" className="mb-4">
//           <AlertDescription>{error}</AlertDescription>
//         </Alert>
//       )}
      
//       <div className="bg-white rounded-lg shadow-lg p-6">
//         <h2 className="text-2xl font-bold mb-4">Customer Survey</h2>
//         <p className="text-sm text-gray-500 mb-4">
//           Question {currentQuestionIndex + 1}/{questions.length}
//         </p>
        
//         <p className="text-lg mb-6">{currentQuestion.text}</p>
        
//         {currentQuestion.scale ? (
//           <div className="flex flex-wrap gap-2 mb-6">
//             {[...Array(currentQuestion.scale)].map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => saveResponse(currentQuestion.id, i + 1)}
//                 className={`w-12 h-12 rounded-full ${
//                   responses[currentQuestion.id] === i + 1
//                     ? 'bg-blue-600 text-white'
//                     : 'bg-gray-100 hover:bg-gray-200'
//                 } transition-colors`}
//               >
//                 {i + 1}
//               </button>
//             ))}
//           </div>
//         ) : (
//           <textarea
//             className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             value={responses[currentQuestion.id] || ""}
//             onChange={(e) => saveResponse(currentQuestion.id, e.target.value)}
//             placeholder="Your feedback"
//             rows={4}
//           />
//         )}
        
//         <div className="flex justify-between mt-6">
//           <button
//             onClick={handlePrev}
//             disabled={currentQuestionIndex === 0}
//             className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             Previous
//           </button>
//           <button
//             onClick={handleNext}
//             className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//           >
//             {isLastQuestion ? "Finish" : "Next"}
//           </button>
//         </div>
//       </div>

//       <AlertDialog open={showSubmitDialog} onOpenChange={setShowSubmitDialog}>
//         <AlertDialogContent>
//           <AlertDialogHeader>
//             <AlertDialogTitle>Submit Survey</AlertDialogTitle>
//             <AlertDialogDescription>
//               Are you sure you want to submit your survey responses? This action cannot be undone.
//             </AlertDialogDescription>
//           </AlertDialogHeader>
//           <AlertDialogFooter>
//             <AlertDialogCancel>Cancel</AlertDialogCancel>
//             <AlertDialogAction onClick={handleSubmitSurvey}>Submit</AlertDialogAction>
//           </AlertDialogFooter>
//         </AlertDialogContent>
//       </AlertDialog>
//     </div>
//   );
// };

// export default Survey;



// import React, { useState, useEffect } from 'react';
// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, doc, setDoc, getDocs } from 'firebase/firestore';
// import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from './components/ui/alert-dialog';
// import { Alert, AlertDescription } from './components/ui/alert';

// const defaultQuestions = [
//   { id: 1, text: "How satisfied are you with our products?", scale: 5 },
//   { id: 2, text: "How fair are the prices compared to similar retailers?", scale: 5 },
//   { id: 3, text: "How satisfied are you with the value for money of your purchase?", scale: 5 },
//   { id: 4, text: "On a scale of 1-10 how would you recommend us to your friends and family?", scale: 10 },
//   { id: 5, text: "What could we do to improve our service?", scale: null }
// ];

// const generateSessionId = () => `session_${new Date().getTime()}`;

// const Survey = () => {
//   const [sessionId] = useState(generateSessionId());
//   const [questions, setQuestions] = useState([]);
//   const [responses, setResponses] = useState({});
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
//   const [showSubmitDialog, setShowSubmitDialog] = useState(false);
//   const [showThankYou, setShowThankYou] = useState(false);
//   const [error, setError] = useState(null);

//   // Load questions and responses from localStorage
//   useEffect(() => {
//     try {
//       // Load questions
//       const savedQuestions = JSON.parse(localStorage.getItem('questions')) || defaultQuestions;
//       if (!localStorage.getItem('questions')) {
//         localStorage.setItem('questions', JSON.stringify(defaultQuestions));
//       }
//       setQuestions(savedQuestions);

//       // Load existing responses for this session
//       const savedResponses = JSON.parse(localStorage.getItem(`responses_${sessionId}`)) || {};
//       setResponses(savedResponses);
//     } catch (error) {
//       setError("Failed to load survey data. Please try again later.");
//     }
//   }, [sessionId]);

//   const saveResponse = (questionId, answer) => {
//     try {
//       const updatedResponses = { 
//         ...responses, 
//         [questionId]: answer,
//         timestamp: new Date().toISOString(),
//         status: 'IN_PROGRESS'
//       };
//       setResponses(updatedResponses);
//       localStorage.setItem(`responses_${sessionId}`, JSON.stringify(updatedResponses));
//     } catch (error) {
//       setError("Failed to save your response. Please try again.");
//     }
//   };

//   const handleStart = () => {
//     setCurrentQuestionIndex(0);
//   };

//   const handleNext = () => {
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     } else {
//       setShowSubmitDialog(true);
//     }
//   };

//   const handlePrev = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex(currentQuestionIndex - 1);
//     }
//   };

//   const handleSubmitSurvey = () => {
//     try {
//       const finalResponses = {
//         ...responses,
//         status: 'COMPLETED',
//         completedAt: new Date().toISOString()
//       };
//       localStorage.setItem(`responses_${sessionId}`, JSON.stringify(finalResponses));
      
//       // Save to completed surveys list
//       const completedSurveys = JSON.parse(localStorage.getItem('completedSurveys')) || [];
//       completedSurveys.push(sessionId);
//       localStorage.setItem('completedSurveys', JSON.stringify(completedSurveys));
      
//       setShowSubmitDialog(false);
//       setShowThankYou(true);
      
//       // Reset to welcome screen after 5 seconds
//       setTimeout(() => {
//         setShowThankYou(false);
//         setCurrentQuestionIndex(-1);
//         setResponses({});
//       }, 5000);
//     } catch (error) {
//       setError("Failed to submit survey. Please try again.");
//     }
//   };

//   if (showThankYou) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gray-50">
//         <div className="text-center p-8 bg-white rounded-lg shadow-lg">
//           <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
//           <p className="text-gray-600">We appreciate your valuable feedback.</p>
//         </div>
//       </div>
//     );
//   }

//   if (currentQuestionIndex === -1) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gray-50">
//         <div className="text-center p-8 bg-white rounded-lg shadow-lg">
//           <h2 className="text-2xl font-bold mb-4">Welcome to the Customer Survey</h2>
//           <button 
//             onClick={handleStart}
//             className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//           >
//             Start
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const currentQuestion = questions[currentQuestionIndex];
//   const isLastQuestion = currentQuestionIndex === questions.length - 1;

//   return (
//     <div className="max-w-2xl mx-auto p-6">
//       {error && (
//         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
//           <p>{error}</p>
//         </div>
//       )}
      
//       <div className="bg-white rounded-lg shadow-lg p-6">
//         <h2 className="text-2xl font-bold mb-4">Customer Survey</h2>
//         <p className="text-sm text-gray-500 mb-4">
//           Question {currentQuestionIndex + 1}/{questions.length}
//         </p>
        
//         <p className="text-lg mb-6">{currentQuestion.text}</p>
        
//         {currentQuestion.scale ? (
//           <div className="flex flex-wrap gap-2 mb-6">
//             {[...Array(currentQuestion.scale)].map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => saveResponse(currentQuestion.id, i + 1)}
//                 className={`w-12 h-12 rounded-full ${
//                   responses[currentQuestion.id] === i + 1
//                     ? 'bg-blue-600 text-white'
//                     : 'bg-gray-100 hover:bg-gray-200'
//                 } transition-colors`}
//               >
//                 {i + 1}
//               </button>
//             ))}
//           </div>
//         ) : (
//           <textarea
//             className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             value={responses[currentQuestion.id] || ""}
//             onChange={(e) => saveResponse(currentQuestion.id, e.target.value)}
//             placeholder="Your feedback"
//             rows={4}
//           />
//         )}
        
//         <div className="flex justify-between mt-6">
//           <button
//             onClick={handlePrev}
//             disabled={currentQuestionIndex === 0}
//             className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             Previous
//           </button>
//           <button
//             onClick={handleNext}
//             className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//           >
//             {isLastQuestion ? "Finish" : "Next"}
//           </button>
//         </div>
//       </div>

//       {showSubmitDialog && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-6 rounded-lg max-w-md w-full">
//             <h3 className="text-lg font-semibold mb-2">Submit Survey</h3>
//             <p className="text-gray-600 mb-4">
//               Are you sure you want to submit your survey responses? This action cannot be undone.
//             </p>
//             <div className="flex justify-end gap-2">
//               <button
//                 onClick={() => setShowSubmitDialog(false)}
//                 className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleSubmitSurvey}
//                 className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//               >
//                 Submit
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Survey;




// import React, { useState, useEffect } from 'react';
// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, doc, setDoc, getDocs } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: "AIzaSyCzPNCKePxc8RyY7gfDoi_Jrc6YzxbcDDs",
//   authDomain: "survey-a42c4.firebaseapp.com",
//   projectId: "survey-a42c4",
//   storageBucket: "survey-a42c4.firebasestorage.app",
//   messagingSenderId: "444119330232",
//   appId: "1:444119330232:web:48a68c0140afcd599c334d",
//   measurementId: "G-9JCVJP9PZS"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// const defaultQuestions = [
//   { id: 1, text: "How satisfied are you with our products?", scale: 5 },
//   { id: 2, text: "How fair are the prices compared to similar retailers?", scale: 5 },
//   { id: 3, text: "How satisfied are you with the value for money of your purchase?", scale: 5 },
//   { id: 4, text: "On a scale of 1-10 how would you recommend us to your friends and family?", scale: 10 },
//   { id: 5, text: "What could we do to improve our service?", scale: null }
// ];

// // Generate a unique customer session ID
// const generateSessionId = () => `session_${new Date().getTime()}`;

// const Survey = () => {
//   const [sessionId] = useState(generateSessionId());
//   const [questions, setQuestions] = useState([]);
//   const [responses, setResponses] = useState({});
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1); // Start with welcome screen

//   useEffect(() => {
//     // Load questions from Firestore or use defaults
//     const loadQuestions = async () => {
//       const questionsCollection = collection(db, 'questions');
//       const questionsSnapshot = await getDocs(questionsCollection);
//       if (!questionsSnapshot.empty) {
//         const loadedQuestions = questionsSnapshot.docs.map(doc => doc.data());
//         setQuestions(loadedQuestions);
//       } else {
//         setQuestions(defaultQuestions);
//       }
//     };
//     loadQuestions();
//   }, []);

//   const handleStart = () => {
//     setCurrentQuestionIndex(0);
//   };

//   const saveResponse = async (questionId, answer) => {
//     const newResponses = { ...responses, [questionId]: answer };
//     setResponses(newResponses);
//     await setDoc(doc(db, 'responses', sessionId), newResponses);
//   };

//   const handleNext = () => {
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex(currentQuestionIndex - 1);
//     }
//   };

//   const handleSkip = () => {
//     handleNext();
//   };

//   const handleResponseChange = (value) => {
//     const currentQuestionId = questions[currentQuestionIndex].id;
//     saveResponse(currentQuestionId, value);
//   };

//   if (currentQuestionIndex === -1) {
//     return (
//       <div className="survey-container">
//         <h2>Welcome to the Customer Survey</h2>
//         <button className="start-button" onClick={handleStart}>Start</button>
//       </div>
//     );
//   }

//   const currentQuestion = questions[currentQuestionIndex];
//   const isLastQuestion = currentQuestionIndex === questions.length - 1;

//   return (
//     <div className="survey-container">
//       <h2>Customer Survey</h2>
//       <div className="question-number">
//         Question {currentQuestionIndex + 1}/{questions.length}
//       </div>
//       <div className="question-text">
//         {currentQuestion.text}
//       </div>
//       <div className="question-scale">
//         {currentQuestion.scale ? (
//           <input
//             type="number"
//             min="1"
//             max={currentQuestion.scale}
//             onChange={(e) => handleResponseChange(e.target.value)}
//           />
//         ) : (
//           <textarea
//             onChange={(e) => handleResponseChange(e.target.value)}
//           />
//         )}
//       </div>
//       <div className="navigation-buttons">
//         <button onClick={handlePrevious} disabled={currentQuestionIndex === 0}>Previous</button>
//         <button onClick={handleSkip}>Skip</button>
//         <button onClick={handleNext} disabled={isLastQuestion}>Next</button>
//       </div>
//     </div>
//   );
// };

// export default Survey;



// import React, { useState, useEffect } from 'react';
// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, doc, setDoc, getDocs } from 'firebase/firestore';
// import Alert from './Alert';
// import './Survey.css';

// const firebaseConfig = {
//   apiKey: "AIzaSyCzPNCKePxc8RyY7gfDoi_Jrc6YzxbcDDs",
//   authDomain: "survey-a42c4.firebaseapp.com",
//   projectId: "survey-a42c4",
//   storageBucket: "survey-a42c4.firebasestorage.app",
//   messagingSenderId: "444119330232",
//   appId: "1:444119330232:web:48a68c0140afcd599c334d",
//   measurementId: "G-9JCVJP9PZS"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// const defaultQuestions = [
//   { id: 1, text: "How satisfied are you with our products?", scale: 5 },
//   { id: 2, text: "How fair are the prices compared to similar retailers?", scale: 5 },
//   { id: 3, text: "How satisfied are you with the value for money of your purchase?", scale: 5 },
//   { id: 4, text: "On a scale of 1-10 how would you recommend us to your friends and family?", scale: 10 },
//   { id: 5, text: "What could we do to improve our service?", scale: null }
// ];

// const generateSessionId = () => `session_${new Date().getTime()}`;

// const Survey = () => {
//   const [sessionId] = useState(generateSessionId());
//   const [questions, setQuestions] = useState([]);
//   const [responses, setResponses] = useState({});
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
//   const [showSubmitDialog, setShowSubmitDialog] = useState(false);
//   const [showThankYou, setShowThankYou] = useState(false);
//   const [error, setError] = useState(null);

//   // Load questions from Firestore or use defaults
//   useEffect(() => {
//     const loadQuestions = async () => {
//       try {
//         const questionsCollection = collection(db, 'questions');
//         const questionsSnapshot = await getDocs(questionsCollection);
//         if (!questionsSnapshot.empty) {
//           const loadedQuestions = questionsSnapshot.docs.map(doc => doc.data());
//           setQuestions(loadedQuestions);
//         } else {
//           setQuestions(defaultQuestions);
//         }
//       } catch (error) {
//         setError("Failed to load survey data. Please try again later.");
//       }
//     };
//     loadQuestions();
//   }, []);

//   const saveResponse = async (questionId, answer) => {
//     try {
//       const updatedResponses = { 
//         ...responses, 
//         [questionId]: answer,
//         timestamp: new Date().toISOString(),
//         status: 'IN_PROGRESS'
//       };
//       setResponses(updatedResponses);
//       await setDoc(doc(db, 'responses', sessionId), updatedResponses);
//     } catch (error) {
//       setError("Failed to save your response. Please try again.");
//     }
//   };

//   const handleStart = () => {
//     setCurrentQuestionIndex(0);
//   };

//   const handleNext = () => {
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     } else {
//       setShowSubmitDialog(true);
//     }
//   };

//   const handlePrev = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex(currentQuestionIndex - 1);
//     }
//   };

//   const handleSubmitSurvey = async () => {
//     try {
//       const finalResponses = {
//         ...responses,
//         status: 'COMPLETED',
//         completedAt: new Date().toISOString()
//       };
//       await setDoc(doc(db, 'responses', sessionId), finalResponses);
      
//       setShowSubmitDialog(false);
//       setShowThankYou(true);
      
//       // Reset to welcome screen after 5 seconds
//       setTimeout(() => {
//         setShowThankYou(false);
//         setCurrentQuestionIndex(-1);
//         setResponses({});
//       }, 5000);
//     } catch (error) {
//       setError("Failed to submit survey. Please try again.");
//     }
//   };

//   if (showThankYou) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gray-50">
//         <div className="text-center p-8 bg-white rounded-lg shadow-lg">
//           <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
//           <p className="text-gray-600">We appreciate your valuable feedback.</p>
//         </div>
//       </div>
//     );
//   }

//   if (currentQuestionIndex === -1) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gray-50">
//         <div className="text-center p-8 bg-white rounded-lg shadow-lg">
//           <h2 className="text-2xl font-bold mb-4">Welcome to the Customer Survey</h2>
//           <button 
//             onClick={handleStart}
//             className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//           >
//             Start
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const currentQuestion = questions[currentQuestionIndex];
//   const isLastQuestion = currentQuestionIndex === questions.length - 1;

//   return (
//     <div className="max-w-2xl mx-auto p-6">
//       {error && (
//         <Alert message={error} onClose={() => setError(null)} />
//       )}
      
//       <div className="bg-white rounded-lg shadow-lg p-6">
//         <h2 className="text-2xl font-bold mb-4">Customer Survey</h2>
//         <p className="text-sm text-gray-500 mb-4">
//           Question {currentQuestionIndex + 1}/{questions.length}
//         </p>
        
//         <p className="text-lg mb-6">{currentQuestion.text}</p>
        
//         {currentQuestion.scale ? (
//           <div className="flex flex-wrap gap-2 mb-6">
//             {[...Array(currentQuestion.scale)].map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => saveResponse(currentQuestion.id, i + 1)}
//                 className={`w-12 h-12 rounded-full ${
//                   responses[currentQuestion.id] === i + 1
//                     ? 'bg-blue-600 text-white'
//                     : 'bg-gray-100 hover:bg-gray-200'
//                 } transition-colors`}
//               >
//                 {i + 1}
//               </button>
//             ))}
//           </div>
//         ) : (
//           <textarea
//             className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             value={responses[currentQuestion.id] || ""}
//             onChange={(e) => saveResponse(currentQuestion.id, e.target.value)}
//             placeholder="Your feedback"
//             rows={4}
//           />
//         )}
        
//         <div className="flex justify-between mt-6">
//           <button
//             onClick={handlePrev}
//             disabled={currentQuestionIndex === 0}
//             className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             Previous
//           </button>
//           <button
//             onClick={handleNext}
//             className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//           >
//             {isLastQuestion ? "Finish" : "Next"}
//           </button>
//         </div>
//       </div>

//       {showSubmitDialog && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-6 rounded-lg max-w-md w-full">
//             <h3 className="text-lg font-semibold mb-2">Submit Survey</h3>
//             <p className="text-gray-600 mb-4">
//               Are you sure you want to submit your survey responses? This action cannot be undone.
//             </p>
//             <div className="flex justify-end gap-2">
//               <button
//                 onClick={() => setShowSubmitDialog(false)}
//                 className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleSubmitSurvey}
//                 className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//               >
//                 Submit
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Survey;


import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, setDoc, getDocs } from 'firebase/firestore';
import Alert from './Alert';
import './Survey.css';

const firebaseConfig = {
  apiKey: "AIzaSyCzPNCKePxc8RyY7gfDoi_Jrc6YzxbcDDs",
  authDomain: "survey-a42c4.firebaseapp.com",
  projectId: "survey-a42c4",
  storageBucket: "survey-a42c4.firebasestorage.app",
  messagingSenderId: "444119330232",
  appId: "1:444119330232:web:48a68c0140afcd599c334d",
  measurementId: "G-9JCVJP9PZS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const defaultQuestions = [
  { id: 1, text: "How satisfied are you with our products?", scale: 5 },
  { id: 2, text: "How fair are the prices compared to similar retailers?", scale: 5 },
  { id: 3, text: "How satisfied are you with the value for money of your purchase?", scale: 5 },
  { id: 4, text: "On a scale of 1-10 how would you recommend us to your friends and family?", scale: 10 },
  { id: 5, text: "What could we do to improve our service?", scale: null }
];

const generateSessionId = () => `session_${new Date().getTime()}`;

const Survey = () => {
  const [sessionId] = useState(generateSessionId());
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
  const [showSubmitDialog, setShowSubmitDialog] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [error, setError] = useState(null);

  // Load questions from Firestore or use defaults
  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const questionsCollection = collection(db, 'questions');
        const questionsSnapshot = await getDocs(questionsCollection);
        if (!questionsSnapshot.empty) {
          const loadedQuestions = questionsSnapshot.docs.map(doc => doc.data());
          setQuestions(loadedQuestions);
        } else {
          setQuestions(defaultQuestions);
        }
      } catch (error) {
        setError("Failed to load survey data. Please try again later.");
      }
    };
    loadQuestions();
  }, []);

  const saveResponse = async (questionId, answer) => {
    try {
      const updatedResponses = { 
        ...responses, 
        [questionId]: answer,
        timestamp: new Date().toISOString(),
        status: 'IN_PROGRESS'
      };
      setResponses(updatedResponses);
      await setDoc(doc(db, 'responses', sessionId), updatedResponses);
    } catch (error) {
      setError("Failed to save your response. Please try again.");
    }
  };

  const handleStart = () => {
    setCurrentQuestionIndex(0);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowSubmitDialog(true);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmitSurvey = async () => {
    try {
      const finalResponses = {
        ...responses,
        status: 'COMPLETED',
        completedAt: new Date().toISOString()
      };
      await setDoc(doc(db, 'responses', sessionId), finalResponses);
      
      setShowSubmitDialog(false);
      setShowThankYou(true);
      
      // Reset to welcome screen after 5 seconds
      setTimeout(() => {
        setShowThankYou(false);
        setCurrentQuestionIndex(-1);
        setResponses({});
      }, 5000);
    } catch (error) {
      setError("Failed to submit survey. Please try again.");
    }
  };

  if (showThankYou) {
    return (
      <div className="thank-you-container">
        <div className="thank-you-message">
          <h2>Thank You!</h2>
          <p>We appreciate your valuable feedback.</p>
        </div>
      </div>
    );
  }

  if (currentQuestionIndex === -1) {
    return (
      <div className="welcome-container">
        <div className="welcome-message">
          <h2>Welcome to the Customer Survey</h2>
          <button 
            onClick={handleStart}
            className="start-button"
          >
            Start
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  return (
    <div className="survey-wrapper">
      {error && (
        <Alert message={error} onClose={() => setError(null)} />
      )}
      
      <div className="survey-container">
        <h2>Customer Survey</h2>
        <p className="question-number">
          Question {currentQuestionIndex + 1}/{questions.length}
        </p>
        
        <p className="question-text">{currentQuestion.text}</p>
        
        {currentQuestion.scale ? (
          <div className="scale-buttons">
            {[...Array(currentQuestion.scale)].map((_, i) => (
              <button
                key={i}
                onClick={() => saveResponse(currentQuestion.id, i + 1)}
                className={`scale-button ${
                  responses[currentQuestion.id] === i + 1 ? 'selected' : ''
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        ) : (
          <textarea
            className="response-textarea"
            value={responses[currentQuestion.id] || ""}
            onChange={(e) => saveResponse(currentQuestion.id, e.target.value)}
            placeholder="Your feedback"
            rows={4}
          />
        )}
        
        <div className="navigation-buttons">
          <button
            onClick={handlePrev}
            disabled={currentQuestionIndex === 0}
            className="nav-button"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="nav-button"
          >
            {isLastQuestion ? "Finish" : "Next"}
          </button>
        </div>
      </div>

      {showSubmitDialog && (
        <div className="submit-dialog-overlay">
          <div className="submit-dialog">
            <h3>Submit Survey</h3>
            <p>
              Are you sure you want to submit your survey responses? This action cannot be undone.
            </p>
            <div className="dialog-buttons">
              <button
                onClick={() => setShowSubmitDialog(false)}
                className="dialog-button cancel-button"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitSurvey}
                className="dialog-button submit-button"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Survey;