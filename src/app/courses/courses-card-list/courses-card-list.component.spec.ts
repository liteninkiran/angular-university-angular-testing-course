import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursesCardListComponent } from './courses-card-list.component';
import { sortCoursesBySeqNo } from '../home/sort-course-by-seq';
import { CoursesModule } from '../courses.module';
import { setupCourses } from '../common/setup-test-data';
import { DebugElement } from '@angular/core';
import { COURSES } from '../../../../server/db-data';
import { Course } from '../model/course';
import { By } from '@angular/platform-browser';

describe('CoursesCardListComponent', () => {

    let component: CoursesCardListComponent;
    let fixture: ComponentFixture<CoursesCardListComponent>;
    let el: DebugElement;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [
                CoursesModule,
            ],
        })
        .compileComponents()
        .then(() => {
            fixture = TestBed.createComponent(CoursesCardListComponent);
            component = fixture.componentInstance;
            el = fixture.debugElement;
        });
    }));

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should display the course list', () => {
        pending();
    });

    it('should display the first course', () => {
        pending();
    });
});
