import { ReactElement } from "react";
import { AlarmIcon, CalanderCardIcon, CloseIcon, OpenIcon, PauseIcon, ProgressIcon, SettingIcon, TicketCardIcon, UserTwoIcon } from "./Icons";
import { TicketItem } from "./types";

export const categoryData = [
    { title: 'Status' },
    { title: 'Priority' },
    { title: 'Due Date' },
    { title: 'Location' },
    { title: 'Type' },
]
export const homeListData: TicketItem[] = [
    {
        id: 1,
        title: 'Occupant move out deep cleaning',
        status: 'To-do',
        Priority: 'High',
        serverStatus: 'Overdue',
        serverName: 'WO-APEC-0010',
        serverTicket: 'Work Order',
        serverFan: 'RTU-1, CD-05',
        location: 'Room 101',
        handlerName: 'Saksham Goel',
        time: '06/02/2024',
        comment: false
    },
    {
        id: 2,
        title: 'Fire Extinguisher Inspection',
        status: 'In - Progress',
        Priority: 'Normal',
        serverStatus: 'Update',
        serverName: 'IN-APEC-0001',
        serverTicket: 'Inspection',
        serverFan: 'RTU-1, CD-05',
        location: 'Room 101',
        handlerName: 'Saksham Goel',
        time: '06/02/2024',
        comment: true
    },
    {
        id: 3,
        title: 'Bathroom leaking',
        status: 'To-do',
        Priority: 'Emergency',
        serverStatus: 'New',
        serverName: 'PM-APEC-0001',
        serverTicket: 'Work Order',
        serverFan: 'RTU-1, CD-05',
        location: 'Room 101',
        handlerName: 'Saksham Goel',
        time: '06/02/2024',
        comment: false
    },
]

export const ServerCategoryList: React.ReactElement<{ color?: string }>[] = [
    <TicketCardIcon />,
    <CalanderCardIcon />,
    <UserTwoIcon />,
    <SettingIcon />,
    <AlarmIcon />,
    <CloseIcon />
];

export const StatusData = [
    { Icon: <OpenIcon />, label: 'Open' },
    { Icon: <ProgressIcon />, label: 'Progress' },
    { Icon: <PauseIcon />, label: 'Pause' },
    { Icon: <CloseIcon />, label: 'Close' }
]