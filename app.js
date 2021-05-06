var userAnswer = prompt('Are you interested in children enrichment?')

if (userAnswer === 'yes')
{
  alert('Welcome there, you are in the place where you should be.')
}

else {
  document.write ('Hope you changed your mind.')
}
var userIdentity = prompt('Are you a parent, a child or neither?')
  
  while (!(userIdentity == 'child' || userIdentity == 'parent' || userIdentity == 'neither' ))
  {
    userIdentity = prompt('Try again please!')
  }
var btn = document.getElementById ("button")
btn.addEventListener ("click",myFunction)
  function myFunction() {
  confirm("Keep Going!")
  }
var image = ''
var numberOfpictures = prompt('How many Suggestions you would like to see?' )


for (var x = 1; x <= numberOfpictures; x++)
{
  image = image + '<img src= "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1539184176i/42271493._UY606_SS606_.jpg">'
 
  }
 document.write (image)
 document.write ('You have asked for ' +numberOfpictures+ ' suggestions.') 
  console.log(userAnswer)
  