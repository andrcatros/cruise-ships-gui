const Port = require('../src/port.js')

describe("Port", () => {
    describe("with ships", () =>{
        const Itinerary = jest.fn()
        const Ship = jest.fn();
        
        let dover;
        let singapore;
        let itinerary;
        let sinking; 


        beforeEach(()=> {
            dover = new Port('Dover')
            singapore = new Port('Singapore')
            itinerary = new Itinerary([dover, singapore])
            sinking = new Ship(itinerary);
        })

        it("has the property 'name", ()=> {
            expect(dover).toBeInstanceOf(Object)
            expect(singapore.name).toBe('Singapore');
        });

        it("can allow ships to dock in port", () => {
            dover.addShip(sinking);
            expect(dover.dockedShips).toContain(sinking);
        });

        it("can remove ships from port", () => {
            dover.addShip(sinking);
            dover.removeShip(sinking);
            expect(dover.dockedShips.indexOf(sinking)).toBe(-1);
        });
    }); 
})