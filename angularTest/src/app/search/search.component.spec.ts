import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

import { SearchComponent } from './search.component'

describe('TestComponent', () => {
  let component: SearchComponent
  let fixture: ComponentFixture<SearchComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should test onSearchClick', () => {
    const spy = spyOn(console, 'log')
    component.searchValue = ''
    component.onSearchClick()

    expect(spy).toHaveBeenCalled()
  })
})
