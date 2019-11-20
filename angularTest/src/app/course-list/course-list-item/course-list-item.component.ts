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

  onEditCourseClick() {
    console.log('onEditCourseClick')
    this.editItem.emit(this.item)
  }

  onDeleteCourseClick() {
    this.removeItem.emit(this.item)
    console.log('onDeleteCourseClick')
  }

  ngOnInit() {}

  openModal(id: string) {
    this.modalDialogService.open(id)
  }

  closeModal(id: string) {
    this.modalDialogService.close(id)
  }
}
