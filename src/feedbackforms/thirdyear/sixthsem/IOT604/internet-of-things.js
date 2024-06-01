import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { database } from "../../../../firebase";
import { ref, set } from "firebase/database";
import { themeJson } from "./theme";
import { json } from "./json";

function InternetOfThings() {
    const survey = new Model(json);
    survey.applyTheme(themeJson);

    survey.onComplete.add((sender, options) => {
        const surveyData = sender.data;

        // Extract relevant data including course instructor
        const { email, fullname, prn, 'course-instructor': courseInstructor, ...allRatings } = surveyData;

        console.log('Survey completed with data:', surveyData);  // Log the survey data

        if (!email || !fullname || !prn || !courseInstructor) {
            console.error('Missing required fields: email, fullname, prn, or course instructor');
            alert('Please ensure all required fields (email, fullname, PRN, and course instructor) are filled.');
            return;
        }

        // Get current date and time
        const currentDate = new Date();
        const date = currentDate.toLocaleDateString(); // e.g., "5/27/2024"
        const time = currentDate.toLocaleTimeString(); // e.g., "10:00:00 AM"

        // Organize ratings into categories with full names
        const ratings = {
            "(A)General Course Management": {},
            "(B)Learning Environment": {},
            "(C)Course Outcome Attainment": {},
            "(D)Instructor Characters": {},
            "Suggestions": {}
        };

        for (const [questionKey, rating] of Object.entries(allRatings)) {
            const prefix = questionKey.split('question')[0];
            switch (prefix) {
                case 'gcm':
                    ratings["(A)General Course Management"][questionKey] = rating;
                    break;
                case 'le':
                    ratings["(B)Learning Environment"][questionKey] = rating;
                    break;
                case 'coa':
                    ratings["(C)Course Outcome Attainment"][questionKey] = rating;
                    break;
                case 'id':
                    ratings["(D)Instructor Characters"][questionKey] = rating;
                    break;
                case 'suggest':
                    ratings["Suggestions"][questionKey] = rating;
                    break;
                default:
                    break;
            }
        }

        // Save to Firebase Realtime Database under respective categories
        const newSurveyRef = ref(database, `ThirdYear/SixthSemester/BTCOE604(B):Internet of Things/${prn}`); // Use PRN as key
        set(newSurveyRef, {
            email,
            fullname,
            courseInstructor, // Add course instructor to the data being saved
            ratings,
            date,  // Add date to the data being saved
            time   // Add time to the data being saved
        }).then(() => {
            console.log('Survey data saved successfully!');
        }).catch((error) => {
            console.error('Error saving survey data:', error);
        });
    });

    return (
        <Survey model={survey} />
    );
}

export default InternetOfThings;
