function dominio (url) {

    if (!url.startsWith("http://") && !url.startsWith("https://")) {
        url = "http://" + url;
    }

    console.log(url);
    return url;
}