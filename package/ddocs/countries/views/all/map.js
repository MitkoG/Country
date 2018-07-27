function(doc) {
    if (doc.fp_type === "country") {
        emit([doc.name, doc.religion, doc.flag], {name:doc.name, religion:doc.religion, flag:doc.flag})
    }
}