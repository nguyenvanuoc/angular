import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-vanban',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class CongViecThongKeComponent implements OnInit {
	
	
	chartOptions = {
        series: [70],
        chart: {
            height: 350,
            type: "radialBar"
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 15,
                    size: "70%"
                },
                
                dataLabels: {
                    showOn: "always",
                    name: {
                        offsetY: -10,
                        show: true,
                        color: "#888",
                        fontSize: "13px"
                    },
                    value: {
                        color: "#111",
                        fontSize: "30px",
                        show: true,
                        fontWeight:600
                    }
                }
            }
        },
        stroke: {
            lineCap: "round",
        },
        labels: ["Hoàn thành"]
    };
    ngOnInit(): void {
    };
	
}
