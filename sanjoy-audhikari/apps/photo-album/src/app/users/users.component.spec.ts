import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsersComponent } from './users.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatSnackBarModule], 
      declarations: [UsersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Test: HTML', () => {
    it('should be initialized', () => {
      expect(fixture).toBeTruthy();
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      const matCardTitle = compiled.querySelector('mat-card-title')
      const matCardSubtitle = compiled.querySelector('mat-card-subtitle')
      expect(matCardTitle.textContent).toContain('List of users');
      expect(matCardSubtitle.textContent).toContain('Click each row to check user\'s photo album');
    })
  })
});
