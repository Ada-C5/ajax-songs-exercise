$(document).ready(function () {
  console.log('ready!')
  getPage(1)

  $('.controls button').on('click', handleClick)
})

function handleClick(event) {
  event.preventDefault()
  let currentPage = $('#songs').data('current-page')
  getPage(currentPage + 1)
}

function getPage(pageNumber) {
  $.ajax('http://localhost:3000/songs', {
    type: 'GET',
    data: {
      page: pageNumber
    }
  }).done(function (data, statusCode, xhrObject) {
    console.log("Our data!!!! ", data)
    $('#songs').html('')
    for (let item of data) {
      $('#songs').append(makeSongItem(item))
    }

    $('#songs').data('current-page', pageNumber)
  })
}

function makeSongItem(data) {
  // <li class="song">David Bowie <em>Heroes</em> (1977)</li>
  let item = $('<li></li>').addClass('song')
  let title = '<em>' + data.title + '</em>'

  return item.html(data.artist + ' ' + title + ' (' + data.year + ')')
}
