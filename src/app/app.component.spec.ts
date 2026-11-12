// 4. e) feladat: a fő komponensben három konyvajanlo példány, a megadott adatokkal
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';

describe('4. e) feladat: a fő komponens', () => {
  let fixture: ComponentFixture<AppComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [AppModule] }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    el = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('három konyvajanlo példány van a fő komponensben', () => {
    expect(el.querySelectorAll('app-konyvajanlo').length).toBe(3);
  });

  it('A Gyűrű Szövetsége, 2500 Ft (nem akciós)', () => {
    const peldany = el.querySelectorAll('app-konyvajanlo')[0];
    expect(peldany.textContent).toContain('A Gyűrű Szövetsége');
    expect(peldany.textContent).toContain('2500');
    expect(peldany.querySelector('.akcio')).toBeNull();
  });

  it('A Két Torony, 2000 Ft (nem akciós)', () => {
    const peldany = el.querySelectorAll('app-konyvajanlo')[1];
    expect(peldany.textContent).toContain('A Két Torony');
    expect(peldany.textContent).toContain('2000');
    expect(peldany.querySelector('.akcio')).toBeNull();
  });

  it('A Király Visszatér, 999 Ft (akciós: az ár bekezdése megkapja az akcio class-t)', () => {
    const peldany = el.querySelectorAll('app-konyvajanlo')[2];
    expect(peldany.textContent).toContain('A Király Visszatér');
    expect(peldany.textContent).toContain('999');
    expect(peldany.querySelector('p.akcio')).not.toBeNull();
  });
});
