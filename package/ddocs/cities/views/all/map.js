function(doc) {
    if (doc.fp_type === "city") {
        emit([doc.name, doc.population, doc.country], 
            {name:doc.name, population:doc.population, position:doc.country, _id:doc.country_link_id})
    }
}