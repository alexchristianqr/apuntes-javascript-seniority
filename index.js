/* 
    ----------------------------------------------------------
    8 Advanced JavaScript Interview Questions for Senior Roles
    ----------------------------------------------------------
    https://levelup.gitconnected.com/8-advanced-javascript-interview-questions-for-senior-roles-c59e1b0f83e1
*/

/*
 * 1.- A Closer Look at the + and - Operators
 * ------------------------------------------
 */

const useCase01 = function () {
    /* [Entrada] */

    console.log(1 + '1' - 1);

    /* [Salida] */

    // 10
    // '11' - 1 = (11 - 1) = 10

    /* [Explicación] */

    // Concatenamos usando el operador "+"
    // 1 + '1' = '11'
    // Convertimos la cadena a numero y restamos con el operador "-"
    // '11' - 1 = (11 - 1) = 10
}

/* 
 *  2.- Duplicating Array Elements
 *  --------------------------------------------
*/

const useCase02 = function () {
    /* [Entrada] */

    function duplicate(array) {
        for (var i = 0; i < array.length; i++) {
            array.push(array[i]);
        }
        return array;
    }
    const arr = [1, 2, 3];
    const newArr = duplicate(arr);
    console.log(newArr);

    /* [Salida] */

    /*
    # Fatal error in , line 0
    # Fatal JavaScript invalid size error 184071938 
    #
    #
    #
    #FailureMessage Object: 00000032A2FFE6D0        
    1: 00007FF78FDA151F v8::internal::CodeObjectRegistry::~CodeObjectRegistry+121999
    2: 00007FF78FCBC4BF node::TriggerNodeReport+38255
    3: 00007FF79099F342 V8_Fatal+162
    4: 00007FF79051E195 v8::internal::FactoryBase<v8::internal::Factory>::NewFixedArray+101        
    5: 00007FF7903DE582 v8::debug::Script::GetIsolate+16706
    6: 00007FF790252041 v8::internal::CompilationCache::IsEnabledScriptAndEval+26913
    7: 00007FF7906F0971 v8::internal::SetupIsolateDelegate::SetupHeap+494417
    8: 000001ED8008F1CC
    */

    /* [Explicación] */

    function duplicate2(array) {
        // Se recomienda controlar el tamaño del arreglo con una variable
        var tamano = array.length

        for (var i = 0; i < tamano; i++) {
            array.push(array[i]);
        }

        return array;
    }
    const arr2 = [1, 2, 3];
    const newArr2 = duplicate2(arr2);
    console.log(newArr2);

    /* [Salida] */
    // [ 1, 2, 3, 1, 2, 3 ]
}

/* 
 *  3.- Difference between prototype and __proto__ 
 *  ----------------------------------------------
*/

const useCase03 = function () {
    // Constructor function
    function Person(name) {
        this.name = name;
    }

    // Adding a method to the prototype
    Person.prototype.sayHello = function () {
        console.log(`Hello, my name is ${this.name}.`);
    };

    // Creating instances
    const person1 = new Person("Haider Wain");
    const person2 = new Person("Omer Asif");

    // Calling the shared method
    person1.sayHello();  // Output: Hello, my name is Haider Wain.
    person2.sayHello();  // Output: Hello, my name is Omer Asif.
}

/* 
 *  4.- Scopes
 *  ----------
*/

const useCase04 = function () {
    function foo() {
        console.log(a);
    }

    function bar() {
        var a = 3;
        foo();
    }

    var a = 5;
    bar();

    // --

    function bar() {
        var a = 3;

        function foo() {
            console.log(a);
        }

        foo();
    }

    var a = 5;
    bar();
}

/* 
 *  5.- Object Coercion
 *  -------------------
*/

const useCase05 = function () {
    const obj = {
        valueOf: () => 42,
        toString: () => 27
    };
    console.log(obj + '');

    // --

    const obj2 = {
        valueOf: () => 42,
        toString: () => 27
    };

    console.log(obj2 + '');

    // --

    const obj3 = {
        toString: () => 27
    };

    console.log(obj3 + '');
}

/* 
 *  6.- Understanding Object Keys
 *  -----------------------------
*/

const useCase06 = function () {
    let a = {};
    let b = { key: 'test' };
    let c = { key: 'test' };

    a[b] = '123';
    a[c] = '456';

    console.log(a);

    // --

    // { '[object Object]': '456' }
}

/* 
 *  7.- The Double Equals Operator
 *  ------------------------------
*/

const useCase07 = function () {

    function ToNumber(value) {
        var convert = Number(value)
        console.log({ convert })
        return convert
    }

    console.log([] == ![]);

    typeof ([]) // "object"
    typeof (![]) // "boolean"

    // --

    console.log([] == ![])
    console.log([] == false)

    // --

    console.log([] == false)
    console.log([] == Number(false))
    console.log([] == 0)

    // --

    console.log([] == 0)
    console.log([].toString() == 0)
    console.log("" == 0)

    // -- 
    console.log("" == 0)
    console.log(ToNumber("") == 0)
    console.log(0 == 0)
}


/* 
 *  8.- Closures
 *  ------------
*/

const useCase08 = function () {
    const arr = [10, 12, 15, 21];
    for (var i = 0; i < arr.length; i++) {
        setTimeout(function () {
            console.log('Index: ' + i + ', element: ' + arr[i]);
        }, 3000);
    }

    // --

    /*
        Index: 4, element: undefined
        Index: 4, element: undefined
        Index: 4, element: undefined
        Index: 4, element: undefined
    */

    // --
    const arr2 = [10, 12, 15, 21];
    for (let i = 0; i < arr2.length; i++) {
        setTimeout(function () {
            console.log('Index: ' + i + ', element: ' + arr2[i]);
        }, 3000);
    }

    // --

    /*
        Index: 0, element: 10
        Index: 1, element: 12
        Index: 2, element: 15
        Index: 3, element: 21
    */

    // --

    const arr3 = [10, 12, 15, 21];
    for (var i = 0; i < arr3.length; i++) {
        (function (index) {
            setTimeout(function () {
                console.log('Index: ' + index + ', element: ' + arr3[index]);
            }, 3000);
        })(i);
    }

    // --

    /*
        Index: 0, element: 10
        Index: 1, element: 12
        Index: 2, element: 15
        Index: 3, element: 21  
    */
}

useCase07()


