import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comment1Component } from './comment1.component';

describe('Comment1Component', () => {
  let component: Comment1Component;
  let fixture: ComponentFixture<Comment1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comment1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comment1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
