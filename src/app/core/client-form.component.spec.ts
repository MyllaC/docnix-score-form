import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientFormComponent } from './client-form.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AnalysesResultComponent } from './analyses-result/analyses-result.component';
import { By } from '@angular/platform-browser';
import { TRegister } from './types/TRegister';
import { ReactiveFormsModule } from '@angular/forms';

describe('ClientFormComponent', () => {
  let component: ClientFormComponent;
  let fixture: ComponentFixture<ClientFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        ClientFormComponent,
        SignUpComponent,
        AnalysesResultComponent,
      ],
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(ClientFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display SignUpComponent when score is null', () => {
    expect(
      fixture.debugElement.query(By.directive(SignUpComponent))
    ).toBeTruthy();
    expect(
      fixture.debugElement.query(By.directive(AnalysesResultComponent))
    ).toBeFalsy();
  });

  it('should display AnalysesResultComponent when score is set', () => {
    component.updateScore({ score: 700, user: {} } as TRegister);
    fixture.detectChanges();

    expect(
      fixture.debugElement.query(By.directive(SignUpComponent))
    ).toBeFalsy();
    expect(
      fixture.debugElement.query(By.directive(AnalysesResultComponent))
    ).toBeTruthy();
  });

  it('should call updateScore when scoreChange is emitted from SignUpComponent', () => {
    spyOn(component, 'updateScore');
    const signUpComponent = fixture.debugElement.query(
      By.directive(SignUpComponent)
    );
    signUpComponent.triggerEventHandler('scoreChange', {
      score: 800,
      user: {},
    });

    expect(component.updateScore).toHaveBeenCalledWith({
      score: 800,
      user: {},
    });
  });

  it('should call registerNewUser when newUser is emitted from AnalysesResultComponent', () => {
    component.updateScore({ score: 700, user: {} } as TRegister);
    fixture.detectChanges();

    spyOn(component, 'registerNewUser');
    const analysesResultComponent = fixture.debugElement.query(
      By.directive(AnalysesResultComponent)
    );
    analysesResultComponent.triggerEventHandler('newUser', null);

    expect(component.registerNewUser).toHaveBeenCalled();
  });

  it('should reset score and user when registerNewUser is called', () => {
    component.updateScore({ score: 700, user: {} } as TRegister);
    component.registerNewUser();

    expect(component.score).toBeNull();
    expect(component.user).toBeNull();
  });
});
