import { isTypeOnlyImportOrExportDeclaration } from "typescript"
import {performPurchase, verifyAge, LOCATION, NACIONALITY} from "../src"

//2.a
describe("performPurchase",() =>{
test("Should compare price and balance",()=>{
     expect(performPurchase(
        {name:"dwefdew",
        balance:100
    },20)).toEqual({"balance": 80, "name": "dwefdew"})
})
//2.b

test("Should return balance: 0", ()=>{
    expect(performPurchase(
        {name:"dwefdew",
        balance:100
    },100)).toEqual({"balance": 0, "name": "dwefdew"})
})
//2.c
test("Should return undefined", ()=>{
    expect(performPurchase(
        {name:"dwefdew",
        balance:100
    },200)).toEqual(undefined)
})
})
//4.a
describe("varifyAge",() =>{
    test("allow one brazilian in brazil",()=>{
        expect(verifyAge(
        {
            name: "fewfsa",
            location: LOCATION.BRAZIL
        },
        [{
                name: "string",
                age: 25,
                nacionality: NACIONALITY.BRAZILIAN
        }]
        )).toEqual({"americans": {"allowed": [], "unallowed": []}, "brazilians": {"allowed": ["string"], "unallowed": []}})
    })

//4.b
test("allow one american in brazil",()=>{
    expect(verifyAge(
    {
        name: "fewfsa",
        location: LOCATION.BRAZIL
    },
    [{
            name: "string",
            age: 25,
            nacionality: NACIONALITY.AMERICAN
    }]
    )).toEqual({"americans": {"allowed": ["string"], "unallowed": []}, "brazilians": {"allowed": [], "unallowed": []}})
})
//4.c
test("unallow two americans and two brazilian in USA",()=>{
    expect(verifyAge({
        name: "fewfsa",
        location: LOCATION.EUA
    },
    [{
        name: "string",
        age: 19,
        nacionality: NACIONALITY.AMERICAN
},
{
    name: "string",
    age: 19,
    nacionality: NACIONALITY.AMERICAN
},
{
    name: "string",
    age: 19,
    nacionality: NACIONALITY.BRAZILIAN
},
{
    name: "string",
    age: 19,
    nacionality: NACIONALITY.BRAZILIAN
}]
    )).toEqual({"americans": {"allowed": [], "unallowed": ["string", "string"]}, "brazilians": {"allowed": [], "unallowed": ["string", "string"]}})
})
//4.d
test("allow two americans and two brazilian in USA",()=>{
    expect(verifyAge({
        name: "fewfsa",
        location: LOCATION.EUA
    },
    [{
        name: "string",
        age: 21,
        nacionality: NACIONALITY.AMERICAN
},
{
    name: "string",
    age: 21,
    nacionality: NACIONALITY.AMERICAN
},
{
    name: "string",
    age: 19,
    nacionality: NACIONALITY.BRAZILIAN
},
{
    name: "string",
    age: 19,
    nacionality: NACIONALITY.BRAZILIAN
}]
    )).toEqual({"americans": {"allowed": ["string", "string"], "unallowed": []}, "brazilians": {"allowed": [], "unallowed": ["string", "string"]}})
})





})