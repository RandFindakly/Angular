// card-form.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-card-form',
  template: `
    <div class="container mt-5">
      <div class="card" *ngIf="cardVisible">
        <div class="card-body">
          <h5 class="card-title">{{ formData.title }}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{ formData.subtitle }}</h6>
          <p class="card-text">{{ formData.description }}</p>
        </div>
      </div>

      <h1 class="mt-3">Formulaire</h1>
      <form (ngSubmit)="submitForm()">
        <div class="form-group">
          <label for="title">Titre :</label>
          <input type="text" id="title" class="form-control" [(ngModel)]="formData.title" required>
        </div>
        <div class="form-group">
          <label for="subtitle">Sous-titre :</label>
          <input type="text" id="subtitle" class="form-control" [(ngModel)]="formData.subtitle" required>
        </div>
        <div class="form-group">
          <label for="description">Description :</label>
          <textarea id="description" class="form-control" [(ngModel)]="formData.description" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Valider</button>
      </form>
    </div>
  `,
  styles: []
})
export class CardFormComponent {
  formData = { title: '', subtitle: '', description: '' };
  cardVisible = false;

  submitForm() {
    this.cardVisible = true;
  }
}
