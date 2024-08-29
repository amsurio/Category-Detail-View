import { makeAutoObservable } from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            { id: 1, name: "Sumsung 1" },
            { id: 2, name: "Sumsung 2" },
            { id: 3, name: "Sumsung 3" },
            { id: 4, name: "Sumsung 4" },
            { id: 5, name: "Sumsung 5" },
            { id: 6, name: "Sumsung 6" },
            { id: 7, name: "Sumsung 7" },
            { id: 8, name: "Sumsung 8" },
            { id: 9, name: "Sumsung 9" },
        ]
        this._brands = []
        this._devices = [
            { id: 1, name: "Sumsung 1", rating: 5 },
            { id: 2, name: "Sumsung 2", rating: 5 },
            { id: 3, name: "Sumsung 3", rating: 5 },
            { id: 4, name: "Sumsung 4", rating: 5 },
            { id: 5, name: "Sumsung 5", rating: 5 },
            { id: 6, name: "Sumsung 6", rating: 5 },
            { id: 7, name: "Sumsung 7", rating: 5 },
            { id: 8, name: "Sumsung 8", rating: 5 },
            { id: 9, name: "Sumsung 9", rating: 5 },
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this.setPage(1)
        this._selectedBrand = brand
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}
