// Алгоритм в моем представлении такой:
// - курс подходит когда указанная цена входит в заданный диапазон
// - если нижний лимит отсутствует, а цена ниже верхнего - курс подходит
// - если нижний лимит есть, а верхний отсутствует, при этом цена выше минимум цены, то курс подходит

// Так же нужно предусмотреть варианты когда одно из значений является null
// На мой взгляд самым простым способом будет через тернарник интерпритировать значения, в зависиммости от того, что они из себя представляют, а затем сравнить их.


// Список курсов
const courses = [
  { name: "Courses in England", prices: [0, 100] },
  { name: "Courses in Germany", prices: [500, null] },
  { name: "Courses in Italy", prices: [100, 200] },
  { name: "Courses in Russia", prices: [null, 400] },
  { name: "Courses in China", prices: [50, 250] },
  { name: "Courses in USA", prices: [200, null] },
  { name: "Courses in Kazakhstan", prices: [56, 324] },
  { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь 
const requiredRange1 = [null, 200];
const requiredRange2 = [100, 350];
const requiredRange3 = [200, null];



const sortByPrice = (a, b) => {
  if (a.prices[0] < b.prices[1]) {
    return 1;
  }
  if (a.prices[0] > b.prices[1]) {
    return -1;
  }
  return 0;
};

function filterByPriceRange(courses, requiredRange) {

  return courses.filter(course => {
    const bottomPriceLimit = course.prices[0] ? course.prices[0] : 0;
    const topPriceLimit = course.prices[1] ? course.prices[1] : Infinity;
    const bottomRangeLimit = requiredRange[0] ? requiredRange[0] : 0;
    const topRangeLimit = requiredRange[1] ? requiredRange[1] : Infinity;

    return bottomPriceLimit >= bottomRangeLimit && topPriceLimit <= topRangeLimit

  }).sort(sortByPrice)
}

console.log(filterByPriceRange(courses, requiredRange1))
console.log(filterByPriceRange(courses, requiredRange2))
console.log(filterByPriceRange(courses, requiredRange3))