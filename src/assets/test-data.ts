export interface Group {
    name: string;
    members: Array<Person>;

}

export interface Person {
    name: string;
    groups: Array<Group>;
}

export interface Event {
    players: Array<Group|Person>;
    game: Array<Game>;
    date: Date;
}

export interface Game {
    name: string;
    events: Array<Event>;
}
