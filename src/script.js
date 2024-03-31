
// class Figure {
//     parametrs; // number[]
//     name;

//     constructor(parametrs) {
//         this.parametrs = parametrs;
//     }

//     getSquare; // () => number;
//     getPerimeter; 
// }

// class Circle extends Figure {
//     name = 'Circle';

//     constructor(parametrs) {
//         super(parametrs);
//     }

//     getSquare = () => {
//         const radius = this.parametrs[0];
//         return Math.PI * Math.pow(radius, 2);
//     };
// }

// class Triangle extends Figure {
//     name = 'Triangle';

//     constructor(parametrs) {
//         super(parametrs);
//     }

//     getSquare = () => {
//         const [a, b, c] = this.parametrs;
//         const halfPerimetr = (a + b + c) / 2;
//         const square = Math.sqrt(
//             halfPerimetr * (halfPerimetr - a) *
//             (halfPerimetr - b) *
//             (halfPerimetr - c)
//         );

//         return square;
//     };
// }

// class Quadrate extends Figure {
//     name = 'Quadrate';

//     constructor(parametrs) {
//         super(parametrs);
//     }

//     getSquare = () => {
//         const a = this.parametrs[0];
//         return a * a;
//     };
// }

// function figureFactory(figureName, parametrs) {
//     const figuresMap = {
//         "circle": new Circle(parametrs),
//         "triangle": new Triangle(parametrs),
//         "qudrate": new Quadrate(parametrs),
//     }

//     return figuresMap[figureName];
// }

// // INPUT DATA
// const radius = [100];
// const sqaureSide = [5];
// const triangleSides = [3, 4, 5];

// // FIGURES
// const cirlce = figureFactory('circle', radius);
// const quadret = figureFactory('qudrate', sqaureSide);
// const triangle = figureFactory('triangle', triangleSides);

// function isTriangle(figure) {
//     return figure.length === 3;
// }

// function isRightTriangle(figure) {
//     if (!isTriangle(figure)) return;

//     // Какие-то вычисления
//     return true;
// }

// // figure: Figure
// function figureCalculator(figure) {
//     const result = 'Площадь ' + figure.name + ' равно ' + figure.getSquare();
//     console.log(result);
// }

// figureCalculator(cirlce);
// figureCalculator(quadret);
// figureCalculator(triangle);
