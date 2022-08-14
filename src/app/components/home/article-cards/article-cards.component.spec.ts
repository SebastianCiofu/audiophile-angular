import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCardsComponent } from './article-cards.component';

describe('ArticleCardsComponent', () => {
  let component: ArticleCardsComponent;
  let fixture: ComponentFixture<ArticleCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
