import { waitForAsync, ComponentFixture, fakeAsync, flush, flushMicrotasks, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CoursesService } from '../services/courses.service';
import { CoursesModule } from '../courses.module';
import { HomeComponent } from './home.component';
import { DebugElement } from '@angular/core';
import { setupCourses } from '../common/setup-test-data';
import { HttpClient } from '@angular/common/http';
import { COURSES } from '../../../../server/db-data';
import { click } from '../common/test-utils';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

describe('HomeComponent', () => {

    let fixture: ComponentFixture<HomeComponent>;
    let component: HomeComponent;
    let el: DebugElement;
    let coursesService: any;

    const beginnerCourses = setupCourses().filter(course => course.category === 'BEGINNER');

    beforeEach(waitForAsync(() => {
        const coursesServiceSpy = jasmine.createSpyObj('CoursesService', ['findAllCourses'])

        TestBed.configureTestingModule({
            imports: [
                CoursesModule,
                NoopAnimationsModule,
            ],
            providers: [
                { provide: CoursesService, useValue: coursesServiceSpy },
            ],
        })
        .compileComponents()
        .then(() => {
            fixture = TestBed.createComponent(HomeComponent);
            component = fixture.componentInstance;
            el = fixture.debugElement;
            coursesService = TestBed.inject(CoursesService);
        });
    }));

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should display only beginner courses', () => {
        coursesService.findAllCourses.and.returnValue(of(beginnerCourses));
        fixture.detectChanges();
        const tabs = el.queryAll(By.css('.mdc-tab'));
        expect(tabs.length).toBe(1, 'Unexpected number of tabs found');
    });

    it('should display only advanced courses', () => {
        pending();
    });

    it('should display both tabs', () => {
        pending();
    });

    it('should display advanced courses when tab clicked', () => {
        pending();
    });
});
