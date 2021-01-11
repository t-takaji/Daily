function header() {
    $.ajax({
        url: "include/header.html",
        cache: false,
        async: false,
        dataType: 'html',
        success: function (html) {
            html = html.replace(/\{\$root\}/g);
            document.write(html);
        }
    });
}