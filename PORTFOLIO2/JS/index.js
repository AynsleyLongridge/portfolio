var $button = document.querySelector('button')
var scrollHorizontally = false

$button.addEventListener('click', function () {
    scrollHorizontally = !scrollHorizontally
    $button.textContent = scrollHorizontally ? 'Scroll vertically' : 'Scroll horizontally'
})

function onMouseWheel(e) {
    if (!scrollHorizontally) return
    e.preventDefault()

    var wheelDistance = e.detail ? -e.detail / 3 : e.wheelDelta / 120
    window.scrollBy(-wheelDistance * 100, 0)
}

window.addEventListener('mousewheel', onMouseWheel)
window.addEventListener('DOMMouseScroll', onMouseWheel)


(function(){

    // List your words here:
    var words = [
        'SPECIAL',
        'DILIGENT',
        'FRIENDLY',
        'WISE'
        ], i = 0,
         delay = 1;

    setInterval(function(){
        $('#changing-word').fadeOut(function(){
            var word = words[i=(i+1)%words.length]
            $(this).html(word).fadeIn();
            $(this).css('textColor', 'orange'); // or color of choice

            if (word == 'SPECIAL'){
             delay = 3;
            }else {
             delay = 1;
            }
        });
       // 2 seconds
    }, delay * 1000);

})();