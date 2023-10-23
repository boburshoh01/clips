import { Injectable } from '@angular/core';

interface IModal {
  id: string;
  visible: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modals = []

  constructor() { }

  isModalOpen() {
    return this.visible
  }

  toggleModal() {
    this.visible = !this.visible
  }
}
