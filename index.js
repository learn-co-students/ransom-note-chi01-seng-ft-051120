function buildHistogram(magazine) {
    let histogram = {}
    magazine.forEach(letter => {
        if (histogram[`${letter}`]) {
            histogram[`${letter}`] += 1
        } else {
            histogram[`${letter}`] = 1
        }
    })
    return histogram
}

function canBuildNote(magazine, note) {
    let histogramMagazine = buildHistogram(magazine)
    let noteStrings = note.split("")
    for (let i=0; i<noteStrings.length; i++) {
        if (histogramMagazine[`${noteStrings[i]}`]) {
            histogramMagazine[`${noteStrings[i]}`] -= 1
        } else {
            return false
        }
    }
    return true
}