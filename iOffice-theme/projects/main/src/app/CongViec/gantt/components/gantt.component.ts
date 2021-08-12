import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { LinkService } from '../services/link.service';
import { Task } from '../models/task';
import { Link } from '../models/link';

import {gantt,Gantt} from 'dhtmlx-gantt';

@Component({
	encapsulation: ViewEncapsulation.None,
	selector: 'gantt',
	styleUrls: ['./gantt.component.css'],
	providers: [TaskService, LinkService],
	templateUrl: `gantt.component.html`,
})
export class GanttComponent implements AfterViewInit {
	@ViewChild('gantt_here') ganttContainer:ElementRef;
	radioValue = 'day';
	constructor(private taskService: TaskService, private linkService: LinkService) { }

	ngAfterViewInit() {
		console.log(this.ganttContainer.nativeElement);
		var zoomConfig = {
			levels: [
				{
					name:"day",
					scale_height: 27,
					min_column_width:80,
					scales:[
						{unit: "day", step: 1, format: "%d"},
						
					]
				},
				{
					name:"week",
					scale_height: 50,
					min_column_width:50,
					scales:[
						{unit: "month", step: 1, format: "%m/%Y"},
						{unit: "week", step: 1, format: function (date) {
							var dateToStr = gantt.date.date_to_str("%d/%m");
							var endDate = gantt.date.add(date, -6, "day");
							var weekNum = gantt.date.date_to_str("%W")(date);
							return "Tuần " + weekNum + ", " + dateToStr(date) + " - " + dateToStr(endDate);
						}},
						{unit: "day", step: 1, format: "%j %D"}
					]
				},
				{
					name:"month",
					scale_height: 50,
					min_column_width:120,
					scales:[
						{unit: "month", format: "%m/%Y"},
						{unit: "week", format: "Tuần %W"}
					]
				}
			]
		};
		gantt.plugins({
			tooltip: true
		});
		gantt.config.grid_resize = true;
		gantt.config.open_tree_initially = true;
		gantt.ext.zoom.init(zoomConfig);
		gantt.config.columns = [
			{name: "text", label: "Công việc", tree: true, width: '*'},
			{name: "add",width:'30'},
		];
					
		gantt.init(this.ganttContainer.nativeElement);

		const dp = gantt.createDataProcessor({
			task: {
				update: (data: Task) => this.taskService.update(data),
				create: (data: Task) => this.taskService.insert(data),
				delete: (id) => this.taskService.remove(id)
			},
			link: {
				update: (data: Link) => this.linkService.update(data),
				create: (data: Link) => this.linkService.insert(data),
				delete: (id) => this.linkService.remove(id)
			}
		});
		Promise.all([this.taskService.get(), this.linkService.get()])
			.then(([data, links]) => {
				gantt.parse({ data, links });
			});
	}
	zoomIn(){
		gantt.ext.zoom.zoomIn();
	}
	zoomOut(){
		gantt.ext.zoom.zoomOut()
	}
	changeDateType(){
		gantt.ext.zoom.setLevel(this.radioValue);
	}

}