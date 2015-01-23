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

// x and y used as global variables for inspection
// x element found
// y AJAX response
// f CSS selector which will be extracted from y and saved as x
// a is an aggregator, to build something you want when iterating through links

// one line

a=[];f='[name=sku]>p:first-of-type';$('.oVisitedLink').map(function(i,e) {$.get(e.href,function(r){ t=$(r).find(f).html(); t= (t||'').trim(); a.push(t);})})


f='[name=sku]>p:first-of-type';$.get($('.oVisitedLink')[0].href, function(r){ y=r;x=$(r).find(f);})

copy(a)

// Ruby, count words
// on pry:
// 1. a=paste+enter
// 2. then enter this line:
h=Hash.new(0);a.join(' ').scan(/\w+/){|w| h[w]+=1}; h.sort_by{|k,v| v}.reverse
