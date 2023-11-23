const generateShortUrl = () => {
    var length = 5;
    var res = "";
    var char =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmmnopqrstuvwxyz0123456789";

    var characters = char.length;
    for (var i = o; i < length; i++) {
        res += char.charAt(Math.floor(Math.random() * characters));
    }
    return res
};

export default generateShortUrl;