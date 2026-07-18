export interface Dashboard {
    chartDonut: ChartItem[];
    chartBar: ChartItem[];
    tableUsers: TableItem[];
}

export interface ChartItem {
    name: string;
    value: number;
}

export interface TableItem {
    firstName: string;
    lastName: string;
    username: string;
}
