'use strict';

document.querySelector('.btn--calc').addEventListener('click', function () {
  const height = Number(document.querySelector('.heightIn').value);
  const mass = Number(document.querySelector('.massIn').value);

  const BMI = Math.trunc(mass / height ** 2);

  console.log(BMI);

  document.querySelector('.bmi').textContent = BMI;

  if (40 <= BMI) {
    document.querySelector('.ind').textContent = 'Morbidly Obese 🥲';
  } else if ((30 <= BMI) & (BMI < 40)) {
    document.querySelector('.ind').textContent = 'Obese 🥲';
  } else if ((26 <= BMI) & (BMI <= 29)) {
    document.querySelector('.ind').textContent = 'Overweight 🥲';
  } else if ((18 <= BMI) & (BMI <= 25)) {
    document.querySelector('.ind').textContent = 'Normal 👍';
  } else if (BMI <= 17) {
    document.querySelector('.ind').textContent = 'Cut 🏋️‍♂️';
  }
});
