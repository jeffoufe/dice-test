// @flow

export type Ticket = {
    name: string,
    price: {
        total: number
    },
    sold_out: boolean
}