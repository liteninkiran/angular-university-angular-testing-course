import { CoursesService } from './courses.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController  } from '@angular/common/http/testing';
import { Course } from '../model/course';
import { COURSES, findLessonsForCourse } from '../../../../server/db-data';
import { HttpErrorResponse } from '@angular/common/http';
import { Lesson } from '../model/lesson';

describe('CoursesService', () => {

    let coursesService: CoursesService;
    let httpTestingController: HttpTestingController ;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                CoursesService,
            ],
            imports: [
                HttpClientTestingModule,
            ],
        });
        coursesService = TestBed.inject(CoursesService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    it('should retrieve all courses', () => {
        coursesService.findAllCourses().subscribe((courses: Course[]) => {
            expect(courses).toBeTruthy('No courses returned');
            expect(courses.length).toBe(12, 'Incorrect number of courses');
            const course = courses.find((course: Course) => course.id === 12);
            expect(course.titles.description).toBe('Angular Testing Course', 'Incorrect course title');
        });
        const req = httpTestingController.expectOne('/api/courses');
        expect(req.request.method).toBe('GET');
        req.flush({
            payload: Object.values(COURSES),
        });
    });

    it('should find a course by id', () => {
        coursesService.findCourseById(12).subscribe((course: Course) => {
            expect(course).toBeTruthy('Course not found');
            expect(course.id).toBe(12, 'Incorrect course ID');
        });
        const req = httpTestingController.expectOne('/api/courses/12');
        expect(req.request.method).toBe('GET');
        req.flush(COURSES[12]);
    });

    it('should save the course data', () => {
        const changes: Partial<Course> = { titles: { description: 'Testing Course' } };
        coursesService.saveCourse(12, changes).subscribe((course: Course) => expect(course.id).toBe(12));
        const req = httpTestingController.expectOne('/api/courses/12');
        expect(req.request.method).toEqual('PUT');
        expect(req.request.body.titles.description).toEqual(changes.titles.description);
        req.flush({
            ...COURSES[12],
            ...changes,
        });
    });

    it('should give an error if save course fails', () => {
        const changes: Partial<Course> = { titles: { description: 'Testing Course' } };
        coursesService.saveCourse(12, changes).subscribe(
            () => fail('the save course operation should have failed'),
            (error: HttpErrorResponse) => expect(error.status).toBe(500),
        );
        const req = httpTestingController.expectOne('/api/courses/12');
        expect(req.request.method).toEqual('PUT');
        req.flush('Save course failed', {
            status: 500,
            statusText: 'Internal Server Error',
        });
    });

    it('should find a list of lessons', () => {
        coursesService.findLessons(12).subscribe((lessons: Lesson[]) => {
            expect(lessons).toBeTruthy();
            expect(lessons.length).toBe(3);
        });
        const req = httpTestingController.expectOne(req => req.url === '/api/lessons');
        expect(req.request.method).toEqual('GET');
        expect(req.request.params.get('courseId')).toEqual('12');
        expect(req.request.params.get('filter')).toEqual('');
        expect(req.request.params.get('sortOrder')).toEqual('asc');
        expect(req.request.params.get('pageNumber')).toEqual('0');
        expect(req.request.params.get('pageSize')).toEqual('3');
        req.flush({
            payload: findLessonsForCourse(12).slice(0, 3),
        });
    });

    afterEach(() => {
        httpTestingController.verify();
    });

});

/*

Hello everyone,

In the next few component tests, we are going to be using certain CSS classes 
to query the DOM and retrieve elements from it, in order to run test assertions. 
Some of those CSS classes have changed over the years, with newer releases of 
Angular Material. All the content in the video still applies and is valid for 
the latest Angular But it you are coding along and want to run the tests yourself, 
you should use the CSS classes on the right, instead of the ones on the left:

mat-tab-label           => mdc-tab
mat-tab-body-active     => mat-mdc-tab-body-active
mat-card-title          => mat-mdc-card-title

Other than the name of CSS classes, everything in the course remains valid. I 
hope this does not confuse you, let me know in the Q&A section if you need help.

Kind Regards,

Vasco

Angular University

*/
