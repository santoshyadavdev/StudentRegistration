export class CityProvider {
    cityList: city[];

    getCityList() {
        return this.cityList = [
            { id: 58, statecode: "AA" },
            { id: 59, statecode: "AE" },
            { id: 2, statecode: "AK" },
            { id: 1, statecode: "AL" },
            { id: 60, statecode: "AP" },
            { id: 4, statecode: "AR" },
            { id: 52, statecode: "AS" },
            { id: 3, statecode: "AZ" },
            { id: 5, statecode: "CA" },
            { id: 6, statecode: "CO" },
            { id: 7, statecode: "CT" },
            { id: 9, statecode: "DC" },
            { id: 8, statecode: "DE" },
            { id: 10, statecode: "FL" },
            { id: 11, statecode: "GA" },
            { id: 53, statecode: "GU" },
            { id: 12, statecode: "HI" },
            { id: 16, statecode: "IA" },
            { id: 13, statecode: "ID" },
            { id: 14, statecode: "IL" },
            { id: 15, statecode: "IN" },
            { id: 17, statecode: "KS" },
            { id: 18, statecode: "KY" },
            { id: 19, statecode: "LA" },
            { id: 22, statecode: "MA" },
            { id: 21, statecode: "MD" },
            { id: 20, statecode: "ME" },
            { id: 23, statecode: "MI" },
            { id: 24, statecode: "MN" },
            { id: 26, statecode: "MO" },
            { id: 54, statecode: "MP" },
            { id: 25, statecode: "MS" },
            { id: 27, statecode: "MT" },
            { id: 34, statecode: "NC" },
            { id: 35, statecode: "ND" },
            { id: 28, statecode: "NE" },
            { id: 30, statecode: "NH" },
            { id: 31, statecode: "NJ" },
            { id: 32, statecode: "NM" },
            { id: 29, statecode: "NV" },
            { id: 33, statecode: "NY" },
            { id: 36, statecode: "OH" },
            { id: 37, statecode: "OK" },
            { id: 38, statecode: "OR" },
            { id: 39, statecode: "PA" },
            { id: 55, statecode: "PR" },
            { id: 56, statecode: "PW" },
            { id: 40, statecode: "RI" },
            { id: 41, statecode: "SC" },
            { id: 42, statecode: "SD" },
            { id: 43, statecode: "TN" },
            { id: 44, statecode: "TX" },
            { id: 45, statecode: "UT" },
            { id: 47, statecode: "VA" },
            { id: 57, statecode: "VI" },
            { id: 46, statecode: "VT" },
            { id: 48, statecode: "WA" },
            { id: 50, statecode: "WI" },
            { id: 49, statecode: "WV" },
            { id: 51, statecode: "WY" },
            { id: 61, statecode: "XX" }
        ];

    }
}


export interface city {
    id: number;
    statecode: string
}