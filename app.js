var userAnswer = prompt('Are you interested in children enrichment?')

if (userAnswer === 'yes')
{
  alert('Welcome there, you are in the place where you should be.')
}

else {
  document.write ('Hope you changed your mind.')

}
var btn = document.getElementById ("button")
btn.addEventListener ("click",myFunction)
  function myFunction() {
  confirm("Keep Going!") }

  console.log (userAnswer)