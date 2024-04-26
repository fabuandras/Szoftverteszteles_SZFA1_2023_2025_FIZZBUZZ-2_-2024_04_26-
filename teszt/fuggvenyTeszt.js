QUnit.module('fizzBuzz', function () {
    //alap kérdések, pl. létezik-E?
    QUnit.test('Létezik-E?', assert => {
        assert.ok(fizzBuzz);
    });

    QUnit.test('Függvény-E?', assert => {
        assert.ok(typeof (fizzBuzz) === 'function');
    });

    QUnit.test('Szám: 15', assert => {
        assert.equal(fizzBuzz(15), "fizzBuzz");
    });

    QUnit.test('Szám: 5', assert => {
        assert.equal(fizzBuzz(5), "Buzz");
    });

    QUnit.test('Szám: 3', assert => {
        assert.equal(fizzBuzz(3), "fizz");
    });

    QUnit.test('Szám: 13', assert => {
        assert.equal(fizzBuzz(13), 13);
    });

    QUnit.test('Szám szövegként: 13', assert => {
        assert.equal(fizzBuzz("13"), 13);
    });

    QUnit.test('Szám szövegként: 45', assert => {
        assert.equal(fizzBuzz("45"), "fizzBuzz");
    });

    QUnit.test('Szám szövegként: 6', assert => {
        assert.equal(fizzBuzz("6"), "fizz");
    });

    QUnit.test('Szöveg ami nem tartalmaz számot: kutya', assert => {
        assert.equal(fizzBuzz("kutya"), "Nem szám a bemenet");
    });

    QUnit.test('Tört szám: 6.6', assert => {
        assert.equal(fizzBuzz(6.6), "fizz");
    });

    QUnit.test('Nincs paraméter', assert => {
        assert.equal(fizzBuzz(), "Nincs paraméter");
    });

    QUnit.test('Egynél több paraméter', assert => {
        assert.equal(fizzBuzz(3, 5), "Egynél több paraméter");
    });
	
	
	
	
	
	
	
	
	
	
	QUnit.test('Túlcsordulás', assert => {
        assert.equal(fizzBuzz(3, 5), "Egynél több paraméter");
    });










    QUnit.test('Tömb tesztelése Buzz-ra', assert => {
        let fizzek = [5, 10, 20, 125, 1000];
        fizzek.forEach(elem => {
            assert.equal(fizzBuzz(elem), "Buzz");
        });

    });

    QUnit.test('Tömb tesztelése fizz-re', assert => {
        let fizzek = [3, 9, 21, 123, 1002];
        fizzek.forEach(elem => {
            assert.equal(fizzBuzz(elem), "fizz");
        });

    });

    QUnit.test('Tömb tesztelése fizzBuzz-ra', assert => {
        let fizzek = [30, 90, 270, 1230, 1020];
        fizzek.forEach(elem => {
            assert.equal(fizzBuzz(elem), "fizzBuzz");
        });

    });

    QUnit.test('Negatív vagy 0 tesztelése', assert => {
        let fizzek = [-5, 0, -20, -125, -1];
        fizzek.forEach(elem => {
            assert.equal(fizzBuzz(elem), "Pozitív szám lehet csak a bemenet!");
        });

    });

});