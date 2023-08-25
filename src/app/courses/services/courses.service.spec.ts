import { CoursesService } from './courses.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController  } from '@angular/common/http/testing';
import { Course } from '../model/course';
import { COURSES } from '../../../../server/db-data';

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
        pending();
    });

    it('should save the course data', () => {
        pending();
    });

    it('should give an error if save course fails', () => {
        pending();
    });

    it('should find a list of lessons', () => {
        pending();
    });

    afterEach(() => {
    });

});
