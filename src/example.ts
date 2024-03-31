/** 
 * В этом файле имитация работы с библиотекой фигур.
 * Тут показано как сторонний разработчик может подготовить данные
 * и как может проводить расчеты величин.
 */

import { Figure, FigureNames, figureFactory } from "./figures.libs";

// Входные данные для инициализации Figure
const radius = [100];
const sqaureSide = [5];
const triangleSides = [3, 4, 5];

// Инициализация фигур
const cirlce = figureFactory(FigureNames.Circle, radius);
const quadret = figureFactory(FigureNames.RegularTetragon, sqaureSide);
const triangle = figureFactory(FigureNames.Triangle, triangleSides);

// figure: Figure
function figureCalculator(figure: Figure) {
    const result = 'Площадь ' + figure.name + ' равно ' + figure.getSquare();
    console.log(result);
}

figureCalculator(cirlce);
figureCalculator(quadret);
figureCalculator(triangle);
