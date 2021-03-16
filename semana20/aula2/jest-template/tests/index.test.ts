import { assert } from "console"
import {Character,validateCharacter, performAttack} from "../src/index"

describe("validateCharacter", ()=>{
    //2.a
    test("should return false for empty name",()=>{
       expect(validateCharacter({
        name:"",
        life: 100,
        strength:100,
        defense:100
       })).toBe(false)
    })
   //2.b
    test("should return false life ===0",()=>{
        expect(validateCharacter({
         name:"aaaa",
         life: 0,
         strength:100,
         defense:100
        })).toBe(false)
    })
    //2.c
    test("should return false for strenght === 0",()=>{
        expect(validateCharacter({
         name:"aaaa",
         life: 100,
         strength:0,
         defense:100
        })).toBe(false)
    })
    //2.d
    test("should return false for defense === 0",()=>{
        expect(validateCharacter({
         name:"aaaa",
         life: 100,
         strength:100,
         defense:0
        })).toBe(false)
    })
    //2.e
    test("should return false for negative life",()=>{
        expect(validateCharacter({
         name:"aaaa",
         life: -100,
         strength:100,
         defense:100
        })).toBe(false)
     })
    //2.f
     test("should return true for every stats properly written",()=>{
        expect(validateCharacter({
         name:"aaaa",
         life: 100,
         strength:100,
         defense:100
        })).toBe(true)
     }) 
})



describe("performAttack",()=>{
    //4.b
    test("Creating Mocks", () => {
        const trueValidatorMock = jest.fn(() => {
                return true
            });
    });
    //4.c
    test("Creating Mocks", () => {
        const falseValidatorMock = jest.fn(() => {
                return false
            });
    });
    //5.a
    test("Character should lose 200 hitpoints",()=>{
        const trueValidatorMock = jest.fn(() => {
            return true
        });
        const attacker:Character = {
            name:"aaaa",
            life:100,
            strength:300,
            defense:100
        }
        const defender:Character = {
            name:"bbbb",
            life:300,
            strength:100,
            defense:100
        }


        performAttack(attacker,defender,trueValidatorMock)
        expect(defender.life).toBe(100)
        expect(trueValidatorMock).toBeCalled()
        expect(trueValidatorMock).toBeCalledTimes(2)
        expect(trueValidatorMock).toReturnTimes(2)
    })

    test("Character should be invalid",()=>{
        const falseValidatorMock = jest.fn(() => {
            return false
        });
        const attacker:Character = {
            name:"aaaa",
            life:0,
            strength:300,
            defense:100
        }
        const defender:Character = {
            name:"bbbb",
            life:300,
            strength:100,
            defense:100
        }
       expect.assertions(4)
        try {

            performAttack(attacker,defender,falseValidatorMock)

        } catch (error) {
            expect(error.message).toEqual("Invalid character")
            expect(falseValidatorMock).toBeCalled()
            expect(falseValidatorMock).toBeCalledTimes(1)
            expect(falseValidatorMock).toReturnTimes(1)
        }
    })
})

//6

describe("Random tests",()=>{

    test("Attacker with lower atack than defender defense",()=>{
        const trueValidatorMock = jest.fn(() => {
            return true
        });
        const attacker:Character = {
            name:"aaaa",
            life:100,
            strength:50,
            defense:100
        }
        const defender:Character = {
            name:"bbbb",
            life:300,
            strength:100,
            defense:100
        }
        performAttack(attacker,defender,trueValidatorMock)
        expect(defender.life).toBe(300)
    })

    test("Attacker with equal attack than defender defense",()=>{
        const trueValidatorMock = jest.fn(() => {
            return true
        });
        const attacker:Character = {
            name:"aaaa",
            life:100,
            strength:100,
            defense:100
        }
        const defender:Character = {
            name:"bbbb",
            life:300,
            strength:100,
            defense:100
        }
        performAttack(attacker,defender,trueValidatorMock)
        expect(defender.life).toBe(300)
    })
    
    })