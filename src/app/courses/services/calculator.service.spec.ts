import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';
import { TestBed } from '@angular/core/testing';

describe('CalculatorService', () => {

    let calculator: CalculatorService;
    let loggerSpy: any;

    beforeEach(() => {
        // Arrange
        loggerSpy = jasmine.createSpyObj('LoggerService', ['log']);
        TestBed.configureTestingModule({
            providers: [
                CalculatorService,
                { provide: LoggerService, useValue: loggerSpy },
            ],
        });
        calculator = TestBed.inject(CalculatorService);
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
