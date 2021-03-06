import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class ModalDialogService {
  private modals: any[] = []

  add(modal: any) {
    // add modal to array of active modals
    this.modals.push(modal)
  }

  open(id: string) {
    // open modal specified by id
    console.log(id)
    const modal = this.modals.find(x => x.id == id)
    modal.open()
  }

  close(id: string) {
    // close modal specified by id
    const modal = this.modals.find(x => x.id == id)
    modal.close()
  }
}
