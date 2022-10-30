"use strict";
$(document).ready(function(){
     

    /*Radar chart*/
    var radarElem = document.getElementById("radarChart");
    
    var radarElem2 = document.getElementById("radarChart2");

    var data = {
        labels: ["Networking", "Security", "Database", "Coding","Design"],
        datasets: [{
            backgroundColor: "rgba(212, 108, 95, 0.8)",
            borderColor: "rgba(212, 108, 95, 0.88)",
            pointBackgroundColor: "rgba(212, 108, 95, 0.88)",
            pointBorderColor: "rgba(212, 108, 95, 0.88)",
            pointHoverBackgroundColor: "rgba(212, 108, 95, 0.88)",
            pointHoverBorderColor: "rgba(212, 108, 95, 0.98)",
            data: [60, 65, 85, 98, 75]
        }
        ]
    };
    var data2 = {
        labels: ["C#", "PHP", "JavaScript", "Java", "Python", "Golang"],
        datasets: [{
            backgroundColor: "rgba(212, 108, 95, 0.8)",
            borderColor: "rgba(212, 108, 95, 0.88)",
            pointBackgroundColor: "rgba(212, 108, 95, 0.88)",
            pointBorderColor: "rgba(212, 108, 95, 0.88)",
            pointHoverBackgroundColor: "rgba(212, 108, 95, 0.88)",
            pointHoverBorderColor: "rgba(212, 108, 95, 0.98)",
            data: [60, 97, 86, 67, 55, 82]
            }
        ]
    };
    var myRadarChart = new Chart(radarElem, {
        type: 'radar',
        data: data,
        options: {
            scale: {
                reverse: false,
                ticks: {
                    display :false,
                    beginAtZero: true
                },
                pointLabels: {
                    fontColor: 'white',
                    fontSize : 13
                },
                gridLines: {
                    color: '#666'
                }
            },
            legend :false
        }
    });

 
    var myRadarChart2 = new Chart(radarElem2, {
        type: 'radar',
        data: data2,
        options: {
            scale: {
                reverse: false,
                ticks: {
                    display :false,
                    beginAtZero: true
                },
                pointLabels: {
                    fontColor: 'white',
                    fontSize : 13
                },
                gridLines: {
                    color: '#666'
                }
            },
            legend :false
        }
    });
 

});
