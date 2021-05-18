import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiTableDetailsComponent } from './api-table-details.component';

describe('ApiTableDetailsComponent', () => {
  let component: ApiTableDetailsComponent;
  let fixture: ComponentFixture<ApiTableDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiTableDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiTableDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
