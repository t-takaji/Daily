function footer() {
    $.ajax({
        url: "include/footer.html",
        cache: false,
        async: false,
        dataType: 'html',
        success: function (html) {
            html = html.replace(/\{\$root\}/g);
            document.write(html);
        }
    });
}