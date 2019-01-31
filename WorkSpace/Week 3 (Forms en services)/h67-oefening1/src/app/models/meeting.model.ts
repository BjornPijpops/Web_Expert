export class Meeting {
    omschrijving: string;
    datum: Date;
    dagdeel: string;
    type: string;
    herinnering: string;

    constructor(omschrijving: string, datum: Date, dagdeel: string, type: string, herinnering: string) {
        this.omschrijving = omschrijving;
        this.datum = datum;
        this.dagdeel = dagdeel;
        this.type = type;
        this.herinnering = herinnering;
    }
}