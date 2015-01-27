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


// one line, show applicants in front of each job
$('.oVisitedLink').map(function(i,e) {$.get(e.href,function(r){ a=$(r).filter(':has(#jobActivitySection)').find('#jobActivitySection tr:contains(Applicants) td:last').html(); a= (a||'').trim(); $(e).after(a)  })})

// show applicants for first job, testing purposes
$.get($('.oVisitedLink:first')[0].href, function(r){ y=r;console.log(x=$(r).filter('#jobActivitySection').find('tr:contains(Applicants) td:last').html().trim() })
