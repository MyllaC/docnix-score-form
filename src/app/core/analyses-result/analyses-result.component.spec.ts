import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnalysesResultComponent } from './analyses-result.component';
import { By } from '@angular/platform-browser';

describe('AnalysesResultComponent', () => {
  let component: AnalysesResultComponent;
  let fixture: ComponentFixture<AnalysesResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalysesResultComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysesResultComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should analyze score and set the correct analysis', () => {
    component.score = 450;
    component.ngOnInit();
    expect(component.analysis).toBe('Inapto');

    component.score = 650;
    component.ngOnInit();
    expect(component.analysis).toBe('Apto com Limitações');

    component.score = 850;
    component.ngOnInit();
    expect(component.analysis).toBe('Totalmente Apto');
  });

  it('should emit new user event on registerNewUser', () => {
    spyOn(component.newUser, 'emit');

    component.score = 750;
    component.registerNewUser();

    expect(component.newUser.emit).toHaveBeenCalledWith(component.score);
  });
});
