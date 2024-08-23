export const json = {
    "title": "BTES405 - DIGTAL LOGIC DESIGN & MICROPROCESSORS COURSE EXIT SURVEY",
    "description": "Department of Computer Engineering",
    "logoFit": "none",
    "logoPosition": "right",
    "completedHtml": "<div style=\"max-width:504px;text-align:center;margin: 0px auto 16px auto; background-color:#ffffff;\">\n\n    <div style=\"padding:40px 64px 48px 48px;text-align:left;\">\n        <h4 style=\"color:#000000;\">Dear {fullname-for-complete-page},</h4>\n        <br>\n        <p style=\"color:#000000;\">Thank you for taking the time to complete our course exit survey. Your feedback is invaluable to us as we strive to improve our course offerings and enhance the learning experience for future students.</p>\n        <br>\n        <p style=\"color:#000000;\">Best regards,<br> Department of Computer Engineering</p>\n    </div>\n\n</div>\n",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "text",
        "name": "fullname",
        "title": "Name:",
        "isRequired": true
       },
       {
        "type": "text",
        "name": "email",
        "title": "Email:",
        "isRequired": true,
        "inputType": "email"
       },
       {
        "type": "text",
        "name": "prn",
        "title": "PRN:",
        "isRequired": true,
        "validators": [
          {
            "type": "regex",
            "regex": "^\d{2}30331245\d{3}$",
            "text": "Please enter a valid PRN."
          }
        ]
      },
       {
        "type": "text",
        "name": "course-instructor",
        "title": "Course Instructor:",
        "isRequired": true
       }
      ],
      "title": "We want to hear from about your feedback so that we can keep improving our teaching\nmethodology and content. Please fill this quick survey and let us know your thoughts."
     },
     {
      "name": "page2",
      "elements": [
       {
        "type": "rating",
        "name": "gcmquestion4",
        "title": "Course was well organised? ",
        "isRequired": true,
        "minRateDescription": "Strongly Disagree",
        "maxRateDescription": "Strongly Agree"
       },
       {
        "type": "rating",
        "name": "gcmquestion5",
        "title": "Internal tests — covered almost all COs?",
        "isRequired": true,
        "minRateDescription": "Strongly Disagree",
        "maxRateDescription": "Strongly Agree"
       },
       {
        "type": "rating",
        "name": "gcmquestion6",
        "title": "Time allowed to internal test was sufficient?",
        "isRequired": true,
        "minRateDescription": "Strongly Disagree",
        "maxRateDescription": "Strongly Agree"
       },
       {
        "type": "rating",
        "name": "gcmquestion7",
        "title": "Quality of quiz was good?",
        "isRequired": true,
        "minRateDescription": "Strongly Disagree",
        "maxRateDescription": "Strongly Agree"
       },
       {
        "type": "rating",
        "name": "gcmquestion8",
        "title": "Assignments were useful for quality of learning?",
        "isRequired": true,
        "minRateDescription": "Strongly Disagree",
        "maxRateDescription": "Strongly Agree"
       },
       {
        "type": "rating",
        "name": "gcmquestion9",
        "title": "Work load assigned to students was balanced?",
        "isRequired": true,
        "minRateDescription": "Strongly Disagree",
        "maxRateDescription": "Strongly Agree"
       }
      ],
      "title": "A) General Course Management"
     },
     {
      "name": "page3",
      "elements": [
       {
        "type": "rating",
        "name": "lequestion10",
        "title": "Positive interaction between students and Instructor existed?",
        "isRequired": true,
        "minRateDescription": "Strongly Disagree",
        "maxRateDescription": "Strongly Agree"
       },
       {
        "type": "rating",
        "name": "lequestion11",
        "title": "Students were always allowed to interrupt the Instructor to seek clarifications?",
        "isRequired": true,
        "minRateDescription": "Strongly Disagree",
        "maxRateDescription": "Strongly Agree"
       },
       {
        "type": "rating",
        "name": "lequestion12",
        "title": "Classroom discussions were encouraged and well moderated?",
        "isRequired": true,
        "minRateDescription": "Strongly Disagree",
        "maxRateDescription": "Strongly Agree"
       },
       {
        "type": "rating",
        "name": "lequestion13",
        "title": "Required learning resources were easily available?",
        "isRequired": true,
        "minRateDescription": "Strongly Disagree",
        "maxRateDescription": "Strongly Agree"
       }
      ],
      "title": "B) Learning Environment"
     },
     {
      "name": "page4",
      "elements": [
       {
        "type": "rating",
        "name": "coaquestion14",
        "title": "Ability to apply Compiler Design principles and techniques.",
        "isRequired": true,
        "minRateDescription": "Strongly Disagree",
        "maxRateDescription": "Strongly Agree"
       },
       {
        "type": "rating",
        "name": "coaquestion15",
        "title": "Ability to develop the logic and programs for simple to complex Compiler systems\ndesign.",
        "isRequired": true,
        "minRateDescription": "Strongly Disagree",
        "maxRateDescription": "Strongly Agree"
       },
       {
        "type": "rating",
        "name": "coaquestion16",
        "title": "Ability to understand and corelate the Compiler concepts with the working of\nexisting compiler systems.",
        "minRateDescription": "Strongly Disagree",
        "maxRateDescription": "Strongly Agree"
       },
       {
        "type": "rating",
        "name": "coaquestion17",
        "title": "Ability to implement the concepts related to compiler phases with their different\nalgorithms by using some high level language.",
        "isRequired": true,
        "minRateDescription": "Strongly Disagree",
        "maxRateDescription": "Strongly Agree"
       },
       {
        "type": "rating",
        "name": "coaquestion18",
        "title": "Ability to understand and meet requirements of compiler standards and working\nstrategy.",
        "isRequired": true,
        "minRateDescription": "Strongly Disagree",
        "maxRateDescription": "Strongly Agree"
       }
      ],
      "title": "C) Course Outcome Attaintment"
     },
     {
      "name": "page5",
      "elements": [
       {
        "type": "rating",
        "name": "idquestion19",
        "title": "The instructor had mastery over the content.",
        "isRequired": true,
        "minRateDescription": "Strongly Disagree",
        "maxRateDescription": "Strongly Agree"
       },
       {
        "type": "rating",
        "name": "idquestion20",
        "title": "All the students were treated impartially.",
        "isRequired": true,
        "minRateDescription": "Strongly Disagree",
        "maxRateDescription": "Strongly Agree"
       },
       {
        "type": "rating",
        "name": "idquestion21",
        "title": "The instructor had good communication skills.",
        "isRequired": true,
        "minRateDescription": "Strongly Disagree",
        "maxRateDescription": "Strongly Agree"
       },
       {
        "type": "rating",
        "name": "idquestion22",
        "title": "The instructor encouraged the students to raise questions in the classroom.",
        "isRequired": true,
        "minRateDescription": "Strongly Disagree",
        "maxRateDescription": "Strongly Agree"
       },
       {
        "type": "rating",
        "name": "idquestion23",
        "title": "Technical doubts were clarified well.",
        "isRequired": true,
        "minRateDescription": "Strongly Disagree",
        "maxRateDescription": "Strongly Agree"
       },
       {
        "type": "rating",
        "name": "idquestion24",
        "title": "The general attitude of the Instructor was quite supportive.",
        "isRequired": true,
        "minRateDescription": "Strongly Disagree",
        "maxRateDescription": "Strongly Agree"
       },
       {
        "type": "comment",
        "name": "suggest",
        "title": "Any suggestions?",
        "isRequired": true,
        "autoGrow": true
       }
      ],
      "title": "D) Instructor Characters"
     }
    ],
    "calculatedValues": [
     {
      "name": "fullname-for-complete-page",
      "expression": "iif({fullname} notempty, {fullname}, guest)"
     }
    ],
    "cookieName": "digital-logic-design-microprocessors-survey",
    "questionTitleLocation": "left",
    "progressBarShowPageNumbers": true,
    "autoGrowComment": true,
    "allowResizeComment": false,
    "widthMode": "responsive"
   }