$('.oVisitedLink').map(function(i,e) {
  $.get(e.href,function(r){
    var applicants = $(r).find('#jobActivitySection tr:contains(Applicants) td:last').html().trim()
    $(e).after(applicants)
  })
})

// one item
$.get($('.oVisitedLink:first')[0].href, function(r){
  y=r;
  console.log(x=$(r).find('#jobActivitySection tr:contains(Applicants) td:last'))
})


// one line
$('.oVisitedLink').map(function(i,e) {$.get(e.href,function(r){ $(e).after($(r).find('#jobActivitySection tr:contains(Applicants) td:last').html().trim())  })})

$.get($('.oVisitedLink:first')[0].href, function(r){ y=r;console.log(x=$(r).find('#jobActivitySection tr:contains(Applicants) td:last')) })
