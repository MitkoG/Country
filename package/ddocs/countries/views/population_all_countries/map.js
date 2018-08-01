function(doc) {
    if (doc.fp_type === "city") {
        emit(doc.country, doc.population)
    }
}