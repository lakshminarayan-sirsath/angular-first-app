import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-items',
  imports: [ReactiveFormsModule],
  templateUrl: './add-items.html',
  styleUrl: './add-items.css',
})
export class AddItems {
  newTask = new FormControl('');

  @Output() newTodo = new EventEmitter<string>();

  submitToDo() {
    const task = this.newTask.value?.trim();
    if(task) {
      this.newTodo.emit(task);
      // console.log(task);
      this.newTask.setValue('');
    }

    }
}
