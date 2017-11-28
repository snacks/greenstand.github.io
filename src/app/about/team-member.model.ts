export class TeamMember {

    name: string;
    title: string;
    info: string;
    picture: string;

    constructor(name: string, title: string, info: string, imagePath: string) {
        this.name = name,
        this.title = title,
        this.info = info,
        this.picture = imagePath
    }
}
