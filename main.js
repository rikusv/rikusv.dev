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

var phrases = [
  {
    value: 'TypeScript',
    size: 8
  }, {
    value: 'JavaScript',
    size: 8
  }, {
    value: 'Python',
    size: 8
  }, {
    value: 'ABAP',
    size: 2
  }, {
    value: 'Java',
    size: 2
  }, {
    value: 'Angular',
    size: 8
  }, {
    value: 'SAP UI5',
    size: 7
  }, {
    value: 'React',
    size: 3
  }, {
    value: 'Jekyll',
    size: 3
  }, {
    value: 'Bootstrap',
    size: 4
  }, {
    value: 'Material Design',
    size: 3
  }, {
    value: 'HTML',
    size: 3
  }, {
    value: 'CSS',
    size: 3
  }, {
    value: 'Node.js',
    size: 8
  }, {
    value: 'SAP Business Suite',
    size: 3
  }, {
    value: 'SAP HANA',
    size: 3
  }, {
    value: 'SAP Gateway OData',
    size: 3
  }, {
    value: 'Cloud Firestore',
    size: 6
  }, {
    value: 'PostgreSQL',
    size: 6
  }, {
    value: 'MongoDB',
    size: 6
  }, {
    value: 'SAP Cloud Platform',
    size: 3
  }, {
    value: 'Google Cloud Platform',
    size: 7
  }, {
    value: 'Amazon Web Services',
    size: 7
  }, {
    value: 'Git',
    size: 5
  }, {
    value: 'Docker',
    size: 5
  }, {
    value: 'Kubernetes',
    size: 7
  }, {
    value: 'Scuba Diving',
    size: 5
  }, {
    value: 'Music',
    size: 5
  }, {
    value: 'Mathematics',
    size: 7
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

function write(array) {
  array.forEach(function(phrase) {
    var span = document.createElement('span')
    span.innerHTML = phrase.value
    span.style.fontSize = Math.max(phrase.size - 5, 1) + 'em'
    span.style.color = colors[random(0, colors.length - 1)]
    if (phrase.size < 5) {
      span.style.opacity = phrase.size * 2 / 10
    }
    document.querySelector('.phrase-container').appendChild(span)
  })
}

shuffle(phrases)
write(phrases)
