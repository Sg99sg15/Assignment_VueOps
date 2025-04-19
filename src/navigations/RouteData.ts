import { TicketItem } from "../utils/types"


export type RootStackParamList = {
    Home: undefined,
    TicketDetails: {
        item: TicketItem
    }
}