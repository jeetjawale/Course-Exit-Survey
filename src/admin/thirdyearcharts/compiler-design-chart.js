import React, { useEffect, useState, useRef } from "react";
import Chart from "chart.js/auto";
import { database, ref, get } from '../../firebase';

function CompilerDesignChart() {
    const [chartData, setChartData] = useState(null);
    const chartRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const snapshot = await get(ref(database, 'ThirdYear/SixthSemester/BTCOC601:Compiler Design'));
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

                    // Iterate through Firebase data
                    Object.values(data).forEach(user => {
                        const ratings = user.ratings;

                        if (ratings["(A)General Course Management"]) {
                            const gcmRatings = Object.values(ratings["(A)General Course Management"]);
                            generalCourseManagementTotal += gcmRatings.reduce((sum, value) => sum + value, 0);
                            gcmCount += gcmRatings.length;
                        }

                        if (ratings["(B)Learning Environment"]) {
                            const leRatings = Object.values(ratings["(B)Learning Environment"]);
                            learningEnvironmentTotal += leRatings.reduce((sum, value) => sum + value, 0);
                            leCount += leRatings.length;
                        }

                        if (ratings["(C)Course Outcome Attainment"]) {
                            const coaRatings = Object.values(ratings["(C)Course Outcome Attainment"]);
                            courseOutcomeAttainmentTotal += coaRatings.reduce((sum, value) => sum + value, 0);
                            coaCount += coaRatings.length;
                        }

                        if (ratings["(D)Instructor Characters"]) {
                            const icRatings = Object.values(ratings["(D)Instructor Characters"]);
                            instructorCharactersTotal += icRatings.reduce((sum, value) => sum + value, 0);
                            icCount += icRatings.length;
                        }
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
            const ctx = document.getElementById("compilerDesignChart").getContext("2d");
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
                            text: "Compiler Design Ratings",
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

    return (
        <div style={{ width: "100%", height: "500px" }}>
            <canvas id="compilerDesignChart"></canvas>
        </div>
    );
}

export default CompilerDesignChart;
