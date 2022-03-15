var document

var colors = [
  'aqua',
  'aquamarine',
  'coral',
  'cornflowerblue',
  'crimson',
  'cyan',
  'dodgerblue',
  'firebrick',
  'ghostwhite',
  'powderblue',
  'skyblue',
  'springgreen',
  'tomato',
  'turquoise',
  'violet'
]

var things = [
  {
    value: 'GitOps',
    size: 6
  },
  {
    value: 'DevOps',
    size: 6
  },
  {
    value: 'TypeScript',
    size: 8
  },
  {
    value: 'JavaScript',
    size: 4
  },
  {
    value: 'Python',
    size: 8
  },
	{
    value: 'Angular',
    size: 4
  },
	{
    value: 'OpenUI5',
    size: 2
  },
	{
    value: 'React',
    size: 2
  },
	{
    value: 'Django',
    size: 2
  },
	{
    value: 'PostgreSQL',
    size: 2
  },
	{
    value: 'MongoDB',
    size: 4
  },
	{
    value: 'GCP',
    size: 4
  },
	{
    value: 'AWS',
    size: 8
  },
	{
    value: 'Scuba Diving',
    size: 1
  },
	{
    value: 'Music',
    size: 1
  },
	{
    value: 'Mathematics',
    size: 1
  },
	{
    value: 'Machine Learning',
    size: 1
  }
]

var clients = [
  {
    value: 'BMW',
    size: 8,
    url: "https://en.wikipedia.org/wiki/BMW"
  },
  {
    value: 'BHP',
    size: 2,
    url: "https://en.wikipedia.org/wiki/BHP"
  },
  {
    value: 'Coles Supermarkets',
    size: 2,
    url: "https://en.wikipedia.org/wiki/Coles_Supermarkets"
  },
  {
    value: 'Fairfax Media',
    size: 2,
    url: "https://en.wikipedia.org/wiki/Fairfax_Media"
  },
  {
    value: 'Insurance Australia Group',
    size: 2,
    url: "https://en.wikipedia.org/wiki/Insurance_Australia_Group"
  },
  {
    value: 'LeasePlan',
    size: 4,
    url: "https://en.wikipedia.org/wiki/LeasePlan"
  },
  {
    value: 'Orica',
    size: 4,
    url: "https://en.wikipedia.org/wiki/Orica"
  },
  {
    value: 'Sanitarium',
    size: 2,
    url: "https://en.wikipedia.org/wiki/Sanitarium_Health_and_Wellbeing_Company"
  },
  {
    value: 'SAP',
    size: 8,
    url: "https://en.wikipedia.org/wiki/SAP"
  },
  {
    value: 'Telstra',
    size: 6,
    url: "https://en.wikipedia.org/wiki/Telstra"
  },
  {
    value: 'UGL Limited',
    size: 6,
    url: "https://en.wikipedia.org/wiki/UGL_Limited"
  },
  {
    value: 'Weir Group',
    size: 6,
    url: "https://en.wikipedia.org/wiki/Weir_Group"
  }
]


function random(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1))
}

function shuffle(array) {
  var n = array.length - 1
  for (var i = 0, j, swap; i < n; i++) {
    j = random(i, n)
    swap = array[j]
    array[j] = array[i]
    array[i] = swap
  }
}

function show(array) {
  const fontSizeDivisor = 2
  const minFontSize = 1
  shuffle(array)
  document.querySelector('.phrase-container').innerHTML = null
  array.forEach(function(phrase) {
    var span = document.createElement('span')
    span.innerHTML = phrase.value
    span.style.fontSize = Math.max(phrase.size / fontSizeDivisor, minFontSize) + 'em'
    span.style.color = colors[random(0, colors.length - 1)]
    if (phrase.size < fontSizeDivisor * minFontSize) {
      span.style.opacity = phrase.size / (fontSizeDivisor * minFontSize)
    }
    if (phrase.hasOwnProperty('url')) {
      var link = document.createElement('a')
      link.href = phrase.url
      link.target = '_blank'
      link.appendChild(span)
      span = link
    }
    document.querySelector('.phrase-container').appendChild(span)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#thingsButton').addEventListener('click', function(evt) {
    evt.preventDefault()
    show(things)
  })
  document.querySelector('#clientsButton').addEventListener('click', function(evt) {
    evt.preventDefault()
    show(clients)
  })
  show(things)
})
