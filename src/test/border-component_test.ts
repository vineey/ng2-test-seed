import {
  async,
  inject,
  TestBed,
  ComponentFixture
} from '@angular/core/testing';
import { Component } from '@angular/core';
import { BorderComponent } from '../app/border-component';

@Component({
  template: '',
  directives: [BorderComponent]
})
class TestComponent {
}

describe('greeting component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent]
    });
  });

  it('should wrap content', async(() => {
    console.log("test start: should wrap content");


    console.log("TestBed.overrideComponent");
    TestBed.overrideComponent(TestComponent, {set: {
      template: '<my-fancy-border>Content</my-fancy-border>'
    }});


    console.log("TestBed.compileComponents");
    TestBed.compileComponents().then(() => {
      var fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
      var compiled = fixture.debugElement.nativeElement;

      expect(compiled).toContainText('Content');
    });

    console.log("test end: should wrap content");
  }));

  it('should wrap content', async(() => {
    TestBed.overrideComponent(TestComponent, {set: {
      template: '<my-fancy-border title="ABC"></my-fancy-border>'
    }});

    TestBed.compileComponents().then(() => {
      var fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
      var compiled = fixture.debugElement.nativeElement;

      expect(compiled).toContainText('ABCD');
    });
  }));
});
