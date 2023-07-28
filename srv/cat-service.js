/*

const cds = require('@sap/cds')

module.exports = cds.service.impl(async function () {

    const remote = await cds.connect.to('RemoteService')

    this.on('*', 'Players', (req) => {
        console.log('>> delegating to remote service...')
        return remote.run(req.query)
    });

    this.on('CREATE', `Holes`, (req) => {
        const score = req.data.score;

        if (score == 1) {
            req.data.result = "hole in one";

        } else {
            const par = req.data.par;

            const diff = score - par;

            const resultMap = new Map([
                ["-3", "albatross"],
                ["-2", "eagle"],
                ["-1", "birdie"],
                ["0", "par"],
                ["1", "bogey"],
                ["2", "double bogey"],
                ["3", "triple bogey"]
            ]);

            const key = "" + diff;;

            req.data.result = resultMap.get(key);;
        }

    })
})
*/


const cds = require('@sap/cds')
module.exports = async function () {
    const remote = await cds.connect.to('RemoteService')

    this.on('*', 'Players', (req) => {
        console.log('>> delegating to remote service...')
        return remote.run(req.query)
    });

    this.on('CREATE', `Holes`, (req) => {
        const score = req.data.score;

        if (score == 1) {
            req.data.result = "hole in one";

        } else {
            const par = req.data.par;

            const diff = score - par;

            const resultMap = new Map([
                ["-3", "albatross"],
                ["-2", "eagle"],
                ["-1", "birdie"],
                ["0", "par"],
                ["1", "bogey"],
                ["2", "double bogey"],
                ["3", "triple bogey"]
            ]);

            const key = "" + diff;;

            req.data.result = resultMap.get(key);;
        }

    })
}


/*
class CatalogService extends cds.ApplicationService {
    init() {
        const { Holes, Rounds } = this.entities

        this.on('*', 'Players', (req) => {

            console.log('>> delegating to remote service...')
            return remote.run(req.query)
        });

        this.before('CREATE', Holes, req => { 
            const score=req.data.score;
            
            if (score == 1) {
                req.data.result = "hole in one";

            } else {
                const par=req.data.par;

                const diff = score - par;
    
                const resultMap = new Map ([
                    ["-3","albatross"],
                    ["-2","eagle"],
                    ["-1","birdie"],
                    ["0","par"],
                    ["1","bogey"],
                    ["2","double bogey"],
                    ["3","triple bogey"]
                ]);
    
                const key = ""+diff;;
    
                req.data.result = resultMap.get(key);;
            }
            

            //return next();
        })
        return super.init()
    }
}
module.exports = CatalogService

*/