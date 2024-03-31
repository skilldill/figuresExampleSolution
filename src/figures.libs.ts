export enum FigureNames {
    Circle = 'Circle',
    Triangle = 'Triangle',
    RegularTetragon = 'RegularTetragon',
}

/**
 * Интерфей для описания метода расчета
 * площади, периметра и т.д.
 */
export interface Calculatable {
    (): number;
}

/**
 * Создаем базовый класс, чтобы от него наследовать
 * классы фигур с реализациями. Плюс тут указываем как
 * заполнить поле params
 */
export abstract class Figure {
    params: number[];
    abstract name: FigureNames;

    constructor(params: number[]) {
        this.params = params;
    }

    abstract getSquare: Calculatable;
    abstract getPerimeter: Calculatable;
}

export class Circle extends Figure {
    name = FigureNames.Circle;

    constructor(params: number[]) {
        super(params);
    }

    getSquare = () => {
        const radius = this.params[0];
        return Math.PI * Math.pow(radius, 2);
    };

    getPerimeter = () => {
        return 2 * Math.PI * this.params[0];
    };
}

export class Triangle extends Figure {
    name = FigureNames.Triangle;

    constructor(params: number[]) {
        super(params);
    }

    getSquare = () => {
        const [a, b, c] = this.params;
        const halfPerimetr = (a + b + c) / 2;
        const square = Math.sqrt(
            halfPerimetr * (halfPerimetr - a) *
            (halfPerimetr - b) *
            (halfPerimetr - c)
        );

        return square;
    };

    getPerimeter = () => {
        return this.params.reduce((prev, next) => prev + next, 0);
    };
}

/**
 * regular tetragon - квадрат
 */
export class RegularTetragon extends Figure {
    name = FigureNames.RegularTetragon;

    constructor(params: number[]) {
        super(params);
    }

    getSquare = () => {
        const a = this.params[0];
        return a * a;
    };

    getPerimeter = () => {
        return this.params.reduce((prev, next) => prev + next, 0);
    };
}

/**
 * Мапа с фактори-методами для создания
 * экземпляров классовё конкретных фигур
 */
export const FiguresMapFactory: Record<FigureNames, (params: number[]) => Figure> = {
    [FigureNames.Circle]: (params: number[]) => new Circle(params),
    [FigureNames.Triangle]: (params: number[]) => new Triangle(params),
    [FigureNames.RegularTetragon]: (params: number[]) => new RegularTetragon(params),
}

/**
 * Общий фактори метод, для получения экземпляра класса фиугуры
 * @param figureName принимает значение из enum FigureNames
 * @param params принимает параметры фигуры 
 */
export function figureFactory(figureName: FigureNames, params: number[]) {
    return FiguresMapFactory[figureName](params);
}

/**
 * Метод, который проверит что фигура является треугольником
 * @param figure 
 * @returns 
 */
function isTriangle(figure: Figure) {
    return figure.params.length === 3;
}
