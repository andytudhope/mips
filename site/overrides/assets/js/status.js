window.onload = function() {
    var optionTexts = [];
    $("ol li").each(function() { optionTexts.push($(this).text()) });
    console.log(optionTexts);
}