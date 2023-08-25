import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

describe('CalculatorService', () => {
    it('should add two numbers', () => {
        // Arrange
        const calculator = new CalculatorService(new LoggerService());

        // Act
        const result = calculator.add(2, 3);

        // Assert... use toBe() when comparing values and toEqual() when comparing objects
        expect(result).toBe(5);
    });

    it('should subtract two numbers', () => {
        // Arrange
        const calculator = new CalculatorService(new LoggerService());

        // Act
        const result = calculator.subtract(2, 3);

        // Assert... use toBe() when comparing values and toEqual() when comparing objects
        expect(result).toBe(-1, 'Unexpected subtraction result');
    });
});
