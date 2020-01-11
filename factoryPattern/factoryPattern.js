/* 
    --------------------- Factory -------------------------
    -----------------FactoryIntermediate-------------------
    -------------ClassUsedByFactory {1...n}----------------

*/

// the html file uses DOM 0

// creates the objects and switch between them


// acts like an interface
// to keep the method pattern

class FactoryIntermediate {
    basicMethodGeneration() {}
}


class UsedByFactory1 extends FactoryIntermediate {
    basicMethodGeneration () {
        document.getElementById("result").innerHTML =
        "UsedByFactory1 returned in getElementId";
    }
}

class UsedByFactory2 extends FactoryIntermediate {
    basicMethodGeneration () {
        document.getElementById("result").innerHTML =
        "UsedByFactory2 returned in getElementId";
    }
}

class UsedByFactory3 extends FactoryIntermediate {
    basicMethodGeneration () {
        document.getElementById("result").innerHTML =
        "UsedByFactory3 returned in getElementId";
    }

}


function doCreate(obj) {
    someName = Factory.create(obj.value);
    debugger;
    someName.basicMethodGeneration();
}

class Factory {
    static create(type) {
        var typedVar = null;

        switch(type) {
            case "1":
                typedVar = new UsedByFactory1();
                break;
            case "2":
                typedVar = new UsedByFactory2();
                break;
            case "3":
                typedVar = new UsedByFactory3();
                break;
        }
        return typedVar;
    }
}
