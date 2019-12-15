import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core'
import { CourseListItem } from '../course-list-item.interface'
import { faClock, faCalendarAlt, faPen, faTrashAlt, faStar } from '@fortawesome/free-solid-svg-icons'
import { ModalDialogService } from 'src/app/modal-dialog/modal-dialog.service'

@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseListItemComponent implements OnInit {
  @Input() item: CourseListItem

  @Output() removeItem = new EventEmitter<CourseListItem>()
  @Output() editItem = new EventEmitter<CourseListItem>()

  public faClock = faClock
  public faCalendarAlt = faCalendarAlt
  public faPen = faPen
  public faTrashAlt = faTrashAlt
  public faStar = faStar

  constructor(private modalDialogService: ModalDialogService) {}

  onEditClick() {
    console.log('fff')
    this.editItem.emit(this.item)
  }

  onDeleteClick() {
    this.removeItem.emit(this.item)
  }

  ngOnInit() {}

  openModal(id: string) {
    this.modalDialogService.open(id)
  }

  closeModal(id: string) {
    this.modalDialogService.close(id)
  }
}
