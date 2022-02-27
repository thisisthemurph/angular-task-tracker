import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../../Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task | undefined;
  @Output() onDeleteTask: EventEmitter<number> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  closeIcon = faTimes;

  constructor() {}

  ngOnInit(): void {}

  onDelete(taskId: number | undefined): void {
    if (!taskId) return;
    this.onDeleteTask.emit(taskId);
  }

  onToggle(task: Task | undefined): void {
    if (task === undefined) return;
    this.onToggleReminder.emit(task);
  }
}
