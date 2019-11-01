import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { NO_ERRORS_SCHEMA } from '@angular/core'

import { CourseListItemComponent } from './course-list-item.component'

describe('TestComponent', () => {
  let component: CourseListItemComponent
  let fixture: ComponentFixture<CourseListItemComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseListItemComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListItemComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
