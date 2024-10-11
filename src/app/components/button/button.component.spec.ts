import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';
import { By } from '@angular/platform-browser';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
  });

  it('should create the button component', () => {
    expect(component).toBeTruthy();
  });

  it('should render button with default properties', () => {
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(button.classList).toContain('bg-cyan-500');
    expect(button.classList).toContain('text-black');
  });

  it('should render button with primary color', () => {
    component.color = 'primary';
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(button.classList).toContain('bg-cyan-500');
    expect(button.classList).toContain('text-black');
  });

  it('should render button with secondary color', () => {
    component.color = 'secondary';
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(button.classList).toContain('bg-transparent');
    expect(button.classList).toContain('border');
    expect(button.classList).toContain('text-cyan-500');
  });

  it('should apply disabled styles when disabled is true', () => {
    component.disabled = true;
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(button.disabled).toBeTrue();
    expect(button.classList).toContain('bg-gray-300');
    expect(button.classList).toContain('text-gray-600');
    expect(button.classList).toContain('cursor-not-allowed');
  });

  it('should render button content correctly', () => {
    const buttonText = 'Click Me';
    component.color = 'primary';
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('button'));
    button.nativeElement.innerHTML = buttonText;
    fixture.detectChanges();
    expect(button.nativeElement.textContent).toContain(buttonText);
  });
});
