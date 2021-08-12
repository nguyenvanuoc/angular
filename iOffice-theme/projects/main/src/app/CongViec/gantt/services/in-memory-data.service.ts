import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		let	tasks = [
			{id: 1, text: 'Task #1', start_date: '02-04-2021', duration: 3, progress: 0.6},
			{id: 2, text: 'Task #2', start_date: '03-04-2021', duration: 3, progress: 0.4},
			{id: 3, text: 'Task #3', start_date: '09-04-2021', duration: 3, progress: 0.4},
		];
		let links = [
			{id: 1, source: 1, target: 2, type: '0'}
		];
		return {tasks, links};
	}
}