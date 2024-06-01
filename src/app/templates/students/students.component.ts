import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { Client, StudentResponse } from '../../services/proxies';
import { StudentCardComponent } from "../../containers/student-card/student-card.component";
import { ButtonComponent } from "../../components/button/button.component";
import { CriteriasModalComponent } from "../../containers/criterias-modal/criterias-modal.component";
import { PreScreenComponent } from "../../components/pre-screen/pre-screen.component";

@Component({
  selector: 'app-student-applications',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, PreScreenComponent, StudentCardComponent, ButtonComponent, RouterLink, CriteriasModalComponent],
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent implements OnInit {
  students: StudentResponse[] = [];
  isLoading: boolean = true;
  isModalVisible: boolean = false;

  constructor(private client: Client) {}

  ngOnInit(): void {
    this.client.applicationAll().subscribe((students: StudentResponse[]) => {
      this.students = students;
      this.isLoading = false;
    });
  }

  showModal() {
    this.isModalVisible = true;
  }

  hideModal() {
    this.isModalVisible = false;
  }
}

