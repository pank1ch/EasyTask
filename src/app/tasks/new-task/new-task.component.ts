import { Component, Output, EventEmitter, HostListener, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TaskService } from '../tasks.service';


@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();

  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDate: string = '';

  private taskService = inject(TaskService);

  OnCancel(){
    this.close.emit();
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.OnCancel();
    }
  }

  OnFormSubmit(){

    this.taskService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate,
      },
      this.userId
    );

    this.close.emit();
  }

}


