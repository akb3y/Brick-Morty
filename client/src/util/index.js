import _ from 'underscore';

/**
 * Helper function to compare the helpfulness rating of two items.
 * When used as the comparator function for the array.sort() method,
 * this function will ensure the result is sorted from most to least helpful.
 * @param {Object} itemOne
 * @param {Number} itemOne.helpfulness
 * @param {Object} itemTwo
 * @param {Number} itemTwo.helpfulness
 * @returns {Number} the difference between the helpfulness ratings of the items
 */
export function compareHelpfulness(itemOne, itemTwo) {
  return itemTwo.helpfulness - itemOne.helpfulness;
}

/**
 * @param {String} string
 * @returns {String} a string with the first letter capitalized
 */
export function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

export function ratingPercentage(numFalse, numTrue) {
  if (Number.isNaN(numFalse) || Number.isNaN(numTrue)) {
    return 0;
  }
  const totalNumberReviews = numFalse + numTrue;

  if (totalNumberReviews === 0) {
    return 0;
  }

  const finalPercent = Math.floor((numTrue / totalNumberReviews) * 100);

  return finalPercent;
}

export function questionFilterTest(question, filter) {
  const { question_body: questionBody, answers } = question;
  const filterRE = new RegExp(filter, 'i');

  return filterRE.test(questionBody) || _.some(answers, (answer) => filterRE.test(answer.body));
}
