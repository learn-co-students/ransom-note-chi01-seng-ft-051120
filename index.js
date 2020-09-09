function buildHistogram(note) {
    const rez = {};
    for (const letter of note) {
        rez[letter] = (rez[letter] || 0) + 1
    }
    return rez
}

function canBuildNote(mag, note) {
    const hist = buildHistogram(mag);
    for (const letter of note) {
        if (!hist[letter]) {
            return false;
        }
        else {
            hist[letter]--;
        }
    }
    return true;
}
