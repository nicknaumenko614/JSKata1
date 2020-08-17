export class FileHelper {
    readStringFromFile = function (path) {
        const request = new XMLHttpRequest();
        request.open("GET", path, false);
        request.send (null);
        const result = request.responseText;
        
        return result;
    }
}