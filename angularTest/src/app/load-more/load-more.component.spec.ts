import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

import { LoadMoreComponent } from './load-more.component'

describe('TestComponent', () => {
  let component: LoadMoreComponent
  let fixture: ComponentFixture<LoadMoreComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoadMoreComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadMoreComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
