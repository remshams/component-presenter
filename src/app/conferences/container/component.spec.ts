import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatListModule } from '@angular/material/list';
import { ConferencesComponent } from './component';

describe('ConferencesComponent', () => {
  let component: ConferencesComponent;
  let fixture: ComponentFixture<ConferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatListModule],
      declarations: [ConferencesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('isConferences', () => {
    it('should return true', () => {
      expect(component.isConferences()).toEqual(true);
    });
  });
});
