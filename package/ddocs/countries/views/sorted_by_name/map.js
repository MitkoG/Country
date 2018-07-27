function(doc) {
	if(doc.fp_type && doc.fp_type == 'country' && doc.name) {
		var firstLetter = (doc.name).substring(0, 1).toUpperCase();
		emit([firstLetter, doc.name], {
            name:doc.name, religion:doc.religion, flag:doc.flag, firstLetter:firstLetter,
        });
	}
}