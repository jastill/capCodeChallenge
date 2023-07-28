class CatalogService extends cds.ApplicationService {
    init() {
        const { Holes, Rounds } = this.entities
        this.before('CREATE', Holes, req => { 
            const score=req.data.score;
            const par=req.data.par;

            const diff = score - par;
            console.log("Result: "+diff);

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

            //return next();
        })
        return super.init()
    }
}
module.exports = CatalogService