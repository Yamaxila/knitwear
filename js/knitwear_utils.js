
const MODE_ALL = 0;
const MODE_ONLY_START = 1;
const MODE_ONLY_END = 2;
const MODE_START_END = 3;

/*

* calculateDots(array, mode)
* Считает все точки в массиве
*
* array - массив точек
* mode - режим посчёта
*   0 - все точки
*   1 - только точки начала линий
*   2 - только конечные точки линий
*   3 - только начальные и конечные точки линий
*
*   Возвращает число выбранных точек.
*
* */
function calculateDots(array, mode) {

    let out = 0;

    for (let i = 0; i < array.length; i++) {
        switch (mode) {
            case 0:
                out++;
                break;
            case 1:
                if(array[i].start)
                    out++;
                break;
            case 2:
                if(array[i].end)
                    out++;
                break;
            case 3:
                if(array[i].start || array[i].end)
                    out++;
                break;
            default:
                throw new Error("Unknown mode " + mode);
        }

    }

    return out;
}

/*
*
* calculateLineLength(dotsCount, stitchesCount)
* Считает длину одного петельного ряда
*
* dotsCount - Кол-во точек в одной петле
* stitchesCount - Кол-во петель в одном ряду
*
* Возвращает длину одной линии
*
* */
function calculateLineLength(dotsCount, stitchesCount) {
    return dotsCount * stitchesCount;
}