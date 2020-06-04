const Itinerary = require('../src/itinerary.js')


describe("Itinerary", () => {
    const Port = jest.fn();
    let testPort

    describe("with ports", () => {
        testPort = new Port;
        testItinerary = new Itinerary(testPort);

        it("returns a new Itinerary object", () =>{
            expect(new Itinerary).toBeInstanceOf(Object)
        });

        it("returns an Itinerary object's ports property", () => {
            expect(testItinerary).toHaveProperty('ports');
        });  
    });
});

