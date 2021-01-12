
let element = $(`<span style="cursor: pointer;">Click Me!</span>`).click(function() {
    alert("jQuery 테스팅...")
})
$(`body`).append(element)