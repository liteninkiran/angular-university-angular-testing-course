import { CoursesService } from './courses.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController  } from '@angular/common/http/testing';

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
        pending();
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
