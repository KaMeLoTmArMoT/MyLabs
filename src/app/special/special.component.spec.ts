import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SpecialComponent } from './special.component';
import { RouterTestingModule } from "@angular/router/testing";
import { EventService } from "../services/event.service";
import { Observable, of } from "rxjs";

describe('SpecialComponent', () => {
  let component: SpecialComponent;
  let fixture: ComponentFixture<SpecialComponent>;

  beforeEach(async(() => {
    const eventServiceStub = {
      getSpecialEvents: function (): Observable<any> {
        return of()
      }
    };

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([{path: 'special', component: SpecialComponent}])
      ],
      declarations: [ SpecialComponent ],
      providers: [
        { provide: EventService, useValue: eventServiceStub }
      ]
    })
    .compileComponents();

    const albumservice = TestBed.get(EventService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have no data', function () {
    expect(component.specialEvents.length).toBe(0);
  });
});
