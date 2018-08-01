function main(ctx, params, done) {
    var _ = require('lib/underscore');
    
    ctx.event.db.view('countries', 'population_all_countries', {
        reduce: true,
        group: true
    }, 
    function(err, res) {
        if (err) {
            return done(err);
        }

        ctx.event.db.view('countries', 'all', {
            include_docs: true
        }, 
        function(error, result) {
            if (error) {
                return done(error)
            }
            if (result && result.rows) {
                var countriesObject = result.rows;
                var result = _.pluck(res.rows, 'key');

                for (let index = 0; index < result.length; index++) {
                    var countryFpExtId = _.find(countriesObject, function(country){ return result[index] == country.doc.fp_ext_id; });
                    res.rows[index].key = countryFpExtId.doc.name;
                }
            
                done(null, res.rows);
            }
            
        })
    });
}