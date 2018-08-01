function main(ctx, params, done) {
    var _ = require('lib/underscore');

    ctx.event.db.view('victorinox', 'query', {
        include_docs: true,
        startkey: "[\"person\"]",
        endkey: "[\"person\", {}]"
    }, 
    function(err, result) {
        if (err) {
            return done(err);
        }

        if (result && result.rows) {
            var actPax = ctx.event.actPax.toObject();
            var participants = result.rows;
        
            var peopleNearYou = _.filter(participants, 
            function(participant){
                return (actPax._id !== participant.id && actPax.city === participant.doc.city)
            });
        
            done(null, peopleNearYou);
        }
    });
}