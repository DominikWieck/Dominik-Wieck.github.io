"use strict";
var PaintIt;
(function (PaintIt) {
    class PictureSave {
        constructor(_date, _figure, _sizex, _sizey, _bg) {
            this.date = _date;
            this.figure = _figure;
            this.sizex = _sizex;
            this.sizey = _sizey;
            this.bg = _bg;
        }
    }
    PaintIt.PictureSave = PictureSave;
    class MongoDBPictureEntry {
        constructor(_data) {
            this.data = _data;
        }
    }
    PaintIt.MongoDBPictureEntry = MongoDBPictureEntry;
})(PaintIt || (PaintIt = {}));
//# sourceMappingURL=pictureSave.js.map