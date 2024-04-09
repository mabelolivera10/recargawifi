/*
by @encodedmabel
https://linktr.ee/mabelolivera10
*/

document.getElementById('toggle').addEventListener('click', e => {
  if (e.target.checked) {
    setTimeout(function () {
      document.getElementById('svg-wrapper').classList.add('active');
    }, 500);

  } else
  {
    document.getElementById('svg-wrapper').classList.remove('active');
  }
});