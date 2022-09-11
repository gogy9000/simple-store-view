import {InitialStateType} from "./types";
import {contentSlice} from "./ContentSlice";


let initialState: InitialStateType

beforeEach(() => {
    initialState = {
        loadedContent: [{id: "1", image: "image", price: 1, title: "title1"}, {
            id: "2",
            image: "image",
            price: 2,
            title: "title2"
        }],
        shoppingCart: [{id: "1", image: "image", price: 1, title: "title1", numberOfProductUnits: 1}],
        isLoadingContent: "idle",
        errorsList: {}
    }
})
describe("contentSlice test", () => {

    it("content should be added in shoppingCart", () => {
        let action = contentSlice.actions.addProductToCart({id: "2"})
        let newState = contentSlice.reducer(initialState, action)
        expect(newState.shoppingCart.length).toBe(2)
    })
    it("content dont should be duplicate", () => {
        let action = contentSlice.actions.addProductToCart({id: "2"})
        let newState = contentSlice.reducer(initialState, action)
        let changedState = contentSlice.reducer(newState, action)
        expect(changedState.shoppingCart.length).toBe(2)
    })

    it("content should be removed in shoppingCart", () => {
        let action = contentSlice.actions.removeProductToCart({id: "1"})
        let newState = contentSlice.reducer(initialState, action)
        expect(newState.shoppingCart.length).toBe(0)
    })

    it("unit of product should be added", () => {
        let action = contentSlice.actions.addUnitOfProduct({id: "1"})
        let newState = contentSlice.reducer(initialState, action)
        expect(newState.shoppingCart[0].numberOfProductUnits).toBe(2)
    })

    it("unit of product should be removed", () => {
        let action = contentSlice.actions.removeUnitOfProduct({id: "1"})
        let newState = contentSlice.reducer(initialState, action)
        expect(newState.shoppingCart.length).toBe(0)
    })
})