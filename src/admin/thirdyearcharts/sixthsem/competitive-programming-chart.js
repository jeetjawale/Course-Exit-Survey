import React, { useEffect, useState, useRef } from "react";
import Chart from "chart.js/auto";
import { database, ref, get } from '../../../firebase';
import * as XLSX from 'xlsx';

function CompetitiveProgrammingChart() {
    const [chartData, setChartData] = useState(null);
    const chartRef = useRef(null);
    const [feedbackData, setFeedbackData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const snapshot = await get(ref(database, 'ThirdYear/SixthSemester/BTCOL606:Competitive Programming'));
                if (snapshot.exists()) {
                    const data = snapshot.val();
                    console.log("Data fetched from Firebase:", data); // Debug log

                    let generalCourseManagementTotal = 0;
                    let learningEnvironmentTotal = 0;
                    let courseOutcomeAttainmentTotal = 0;
                    let instructorCharactersTotal = 0;

                    let gcmCount = 0;
                    let leCount = 0;
                    let coaCount = 0;
                    let icCount = 0;

                    const feedbackList = [];

                    // Iterate through Firebase data
                    Object.entries(data).forEach(([prn, user]) => {
                        const { fullname, email, ratings } = user;
                        const userFeedback = { PRN: prn, Name: fullname, Email: email };

                        if (ratings["(A)General Course Management"]) {
                            const gcmRatings = Object.entries(ratings["(A)General Course Management"]);
                            generalCourseManagementTotal += gcmRatings.reduce((sum, [, value]) => sum + value, 0);
                            gcmCount += gcmRatings.length;
                            gcmRatings.forEach(([question, rating], index) => {
                                userFeedback[`GCM Question ${index + 1}`] = rating;
                            });
                        }

                        if (ratings["(B)Learning Environment"]) {
                            const leRatings = Object.entries(ratings["(B)Learning Environment"]);
                            learningEnvironmentTotal += leRatings.reduce((sum, [, value]) => sum + value, 0);
                            leCount += leRatings.length;
                            leRatings.forEach(([question, rating], index) => {
                                userFeedback[`LE Question ${index + 1}`] = rating;
                            });
                        }

                        if (ratings["(C)Course Outcome Attainment"]) {
                            const coaRatings = Object.entries(ratings["(C)Course Outcome Attainment"]);
                            courseOutcomeAttainmentTotal += coaRatings.reduce((sum, [, value]) => sum + value, 0);
                            coaCount += coaRatings.length;
                            coaRatings.forEach(([question, rating], index) => {
                                userFeedback[`COA Question ${index + 1}`] = rating;
                            });
                        }

                        if (ratings["(D)Instructor Characters"]) {
                            const icRatings = Object.entries(ratings["(D)Instructor Characters"]);
                            instructorCharactersTotal += icRatings.reduce((sum, [, value]) => sum + value, 0);
                            icCount += icRatings.length;
                            icRatings.forEach(([question, rating], index) => {
                                userFeedback[`IC Question ${index + 1}`] = rating;
                            });
                        }

                        feedbackList.push(userFeedback);
                    });

                    // Calculate overall ratings
                    const overallCourseRating = (generalCourseManagementTotal + learningEnvironmentTotal + courseOutcomeAttainmentTotal + instructorCharactersTotal) / (gcmCount + leCount + coaCount + icCount);

                    // Prepare chart data
                    const labels = ["General Course Management", "Learning Environment", "Course Outcome Attainment", "Instructor Characters", "Overall Course Rating"];
                    const dataValues = [generalCourseManagementTotal / gcmCount, learningEnvironmentTotal / leCount, courseOutcomeAttainmentTotal / coaCount, instructorCharactersTotal / icCount, overallCourseRating];

                    setChartData({
                        labels,
                        dataValues
                    });
                    setFeedbackData(feedbackList);
                } else {
                    console.log("No data available");
                }
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (chartData) {
            // Destroy previous chart instance if it exists
            if (chartRef.current) {
                chartRef.current.destroy();
            }

            // Create new chart instance
            const ctx = document.getElementById("competitiveprogrammingChart").getContext("2d");
            chartRef.current = new Chart(ctx, {
                type: "pie",
                data: {
                    labels: chartData.labels,
                    datasets: [{
                        data: chartData.dataValues,
                        backgroundColor: [
                            "rgba(255, 99, 132, 0.2)", 
                            "rgba(54, 162, 235, 0.2)", 
                            "rgba(255, 206, 86, 0.2)", 
                            "rgba(75, 192, 192, 0.2)", 
                            "rgba(153, 102, 255, 0.2)"
                        ],
                        borderColor: [
                            "rgba(255, 99, 132, 1)", 
                            "rgba(54, 162, 235, 1)", 
                            "rgba(255, 206, 86, 1)", 
                            "rgba(75, 192, 192, 1)", 
                            "rgba(153, 102, 255, 1)"
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    plugins: {
                        title: {
                            display: true,
                            text: "Competitive Programming Ratings",
                            font: {
                                size: 18, // Adjust the font size as needed
                                weight: "bold"
                            }
                        },
                        legend: {
                            position: "bottom",
                            labels: {
                                font: {
                                    size: 14 // Adjust the font size as needed
                                }
                            }
                        }
                    },
                    responsive: true,
                    maintainAspectRatio: false // To make the canvas responsive and fit to the container
                }
            });
        }
    }, [chartData]);

    const handleDownload = () => {
        const worksheet = XLSX.utils.json_to_sheet(feedbackData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Feedback Data");
        XLSX.writeFile(workbook, "CompetitiveProgrammingFeedback.xlsx");
    };

    const buttonStyle = {
        backgroundColor: '#007bff',
        border: 'none',
        color: 'white',
        padding: '15px 32px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        margin: '4px 2px',
        cursor: 'pointer',
        borderRadius: '4px'
    };

    return (
        <div style={{ width: "100%", height: "500px" }}>
            <canvas id="competitiveprogrammingChart"></canvas>
            <button style={buttonStyle} onClick={handleDownload}>Download Feedback Data</button>
        </div>
    );
}

export default CompetitiveProgrammingChart;
