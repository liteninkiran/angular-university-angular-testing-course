import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

describe('CalculatorService', () => {

    let calculator: CalculatorService;
    let loggerSpy: any;

    beforeEach(() => {
        // Arrange
        loggerSpy = jasmine.createSpyObj('LoggerService', ['log']);
        calculator = new CalculatorService(loggerSpy);
    });

    it('should add two numbers', () => {
        // Act
        const result = calculator.add(2, 3);

        // Assert... use toBe() when comparing values and toEqual() when comparing objects
        expect(result).toBe(5);
        expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    });

    it('should subtract two numbers', () => {
        // Act
        const result = calculator.subtract(2, 3);

        // Assert... use toBe() when comparing values and toEqual() when comparing objects
        expect(result).toBe(-1, 'Unexpected subtraction result');
        expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    });
});


/*

Hello everyone,

A quick warning about a minor change on the API of the test bed.
In the next video, you will notice that TestBed.get()  is called.
But you should use the new .inject() API instead:

    coursesService = TestBed.inject(CoursesService)

All the concepts taught in the course regarding testing Angular components are still valid.
Let me know if you have any questions, and please enjoy the course.

Kind Regards,

Vasco, Angular University

*/


