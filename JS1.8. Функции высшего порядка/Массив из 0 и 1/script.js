/* 5. Используя синтаксис, создайте собственную функцию высшего порядка, которая из заданного массива возвращает массив, 
состоящий из нулей (для тех элементов длинна которых меньше либо равна 3) и единиц (в другом случае).*/

function transformArray(array, callback) {
    const transformedArray = [];
    for (let i = 0; i < array.length; i++) {
      const result = callback(array[i]);
      transformedArray.push(result);
    }
    return transformedArray;
  }

  // Исходный массив
  const originalArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];

  const transformedArray = transformArray(originalArray, (item) => {
    return (item.length > 3) ? 1 : 0;
  });

  console.log(transformedArray); // [1, 1, 0, 1, 0]