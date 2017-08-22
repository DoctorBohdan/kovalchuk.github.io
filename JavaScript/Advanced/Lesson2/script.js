(function () {
    let takeParagrapher = document.getElementsByClassName('JsTakeParagrapher')[0],
        takeAllLinks = document.getElementsByClassName('JsTakeLinks')[0],
        takeDiv = document.getElementsByClassName('JsTakeDiv')[0],

        allParagraphers = document.getElementsByTagName('p'),
        allLinks = document.getElementsByTagName('a'),
        testDiv = document.getElementById('test_div');

    takeParagrapher.onclick = function () {
        for (let paragrapher of allParagraphers) {
            paragrapher.style.border = '1px solid #0000FF';
        }
    }

    takeAllLinks.onclick = function () {
        for (let link of allLinks) {
            link.style.border = '1px solid red';
        }
    }

    takeDiv.onclick = function () {
        testDiv.style.border = '1px solid green';
    }
})()