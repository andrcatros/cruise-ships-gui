const Ship = require('../src/ship.js')

describe("Ship", () => {
    describe("with ports and an itinerary", () => {
        let sinking;
        const Port = {dockedShips:[], addShip:jest.fn(), removeShip:jest.fn()}
        const copenhagen = {...Port, name:'Copehnhagen'};
        const antarctica = {...Port, name:'Antarctica' };
        const itinerary = {ports: [copenhagen, antarctica]}

        beforeEach(()=> {
            sinking = new Ship(itinerary);
        })

        it("returns a new Ship object", () => {
            expect(sinking).toBeInstanceOf(Object);
        });

        it("gets added to Port on instantiation", () => {
            expect(sinking.currentPort.addShip).toHaveBeenCalledWith(sinking);
        });

        it("has startingPort property", () => {
            expect(new Ship(itinerary)).toHaveProperty('startingPort');
            expect(new Ship(itinerary)).toHaveProperty('currentPort');
        });

        it("can set sail", () => {
            sinking.setSail();
            expect(sinking.currentPort).toBeFalsy;
            expect(sinking.previousPort).toBe(copenhagen)
        });

        it("leaves Port when setting sail", () => {
            sinking.setSail();
            expect(sinking.previousPort.dockedShips.indexOf(sinking)).toBe(-1)
            });

        it("throws Error if Ship sets sail after the last port of the Itinerary has already been reached", () => {
            sinking.setSail();
            sinking.dock();

            expect(() => sinking.setSail()).toThrowError(new Error('End of itinerary reached.'))
        });
        it("can dock in ports", () => {
            sinking.setSail();
            sinking.dock();

            expect(sinking.currentPort).toBe(itinerary.ports[1]);
            expect(sinking.currentPort.dockedShips.indexOf(sinking)).toBeTruthy;
        });
    });
});


