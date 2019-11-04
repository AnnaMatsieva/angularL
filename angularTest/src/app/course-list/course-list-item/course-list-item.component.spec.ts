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

  it('should test onEditCourseClick', () => {
    const spy = spyOn(console, 'log')
    component.onEditCourseClick()

    expect(spy).toHaveBeenCalled()
  })

  it('should test onDeleteCourseClick', () => {
    const spy = spyOn(console, 'log')
    component.onDeleteCourseClick()

    expect(spy).toHaveBeenCalled()
  })
})
