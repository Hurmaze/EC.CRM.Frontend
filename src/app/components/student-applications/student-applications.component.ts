import { Component, OnInit } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';
import { Client, StudentResponse } from '../../services/proxies';

@Component({
  selector: 'app-student-applications',
  standalone: true,
  imports: [CommonModule, NgForOf],
  templateUrl: './student-applications.component.html',
  styleUrl: './student-applications.component.css'
})
export class StudentApplicationsComponent implements OnInit {
  students!: StudentResponse[];

  constructor(private client: Client) {

  }
  ngOnInit(): void {
    this.client.applicationAll().subscribe(data => {
      this.students = data;
    })
  }
}
