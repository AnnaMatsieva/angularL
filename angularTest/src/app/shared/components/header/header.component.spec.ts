import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

import { HeaderComponent } from './header.component'

describe('TestComponent', () => {
  let component: HeaderComponent
  let fixture: ComponentFixture<HeaderComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should test onLoginClick', () => {
    const spy = spyOn(console, 'log')
    component.onLoginClick()

    expect(spy).toHaveBeenCalled()
  })

  it('should test onLogoffClick', () => {
    const spy = spyOn(console, 'log')
    component.onLogoffClick()

    expect(spy).toHaveBeenCalled()
  })
})
