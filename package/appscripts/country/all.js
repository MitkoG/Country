function main(ctx, params, done) {
    var _ = require('lib/underscore');

    ctx.event.db.view('countries', 'all', {
        include_docs: true
    }, 
    function(err, res) {
        if (err) {
            return done(err);
        }

        if (ctx.event.settings.get('country.enable_block') === true) {
            var countries_object = res.rows
            var is_member_of_eu = _.filter(countries_object, 
                function(country){ return country.doc.is_member_of_eu == true; });

            done(null, is_member_of_eu);
        } else {
            done(null, res);
        }
        
    });
}