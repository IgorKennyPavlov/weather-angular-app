import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface IPlace {
    img: string;
    address: string;
    phone: number;
    state: string;
    weather: Weather;
    social_info: SocialInfo;
}

export interface Weather {
    title: string;
    icon: string;
    water: number;
    temperature: number;
}

export interface SocialInfo {
    title: string;
    img: string;
    followers: number;
    following: number;
}

const places: IPlace[] = [
    {
        "img": "assets/images/tennessee/1.jpeg",
        "address": "256 Hunts Lane, Cochranville, Tennessee, 4064",
        "phone": 372037008191,
        "weather": {
            "title": "rain",
            "icon": "assets/images/rain.png",
            "water": 24,
            "temperature": 27
        },
        "social_info": {
            "title": "Coash Rodeocean",
            "img": "assets/images/tennessee/2.jpeg",
            "followers": 989,
            "following": 115
        },
        "state": "Tennessee"
    },
    {
        "img": "assets/images/california/1.jpeg",
        "address": "548 Strauss Street, Bowie, California, 4524",
        "phone": 115658525988,
        "weather": {
            "title": "rain",
            "icon": "assets/images/rain.png",
            "water": 21,
            "temperature": 29
        },
        "social_info": {
            "title": "Rocklogic Prosely",
            "img": "assets/images/california/2.jpeg",
            "followers": 669,
            "following": 63
        },
        "state": "California"
    },
    {
        "img": "assets/images/2.jpeg",
        "address": "739 Rogers Avenue, Springville, Missouri, 2732",
        "phone": 386401256300,
        "weather": {
            "title": "rain",
            "icon": "assets/images/rain.png",
            "water": 21,
            "temperature": 27
        },
        "social_info": {
            "title": "Spherix Bleendot",
            "img": "assets/images/missouri/2.jpeg",
            "followers": 505,
            "following": 110
        },
        "state": "Missouri"
    },
    {
        "img": "assets/images/connecticut/1.jpeg",
        "address": "160 Dodworth Street, Buxton, Connecticut, 9896",
        "phone": 389092233076,
        "weather": {
            "title": "sun",
            "icon": "assets/images/sun.png",
            "water": 20,
            "temperature": 29
        },
        "social_info": {
            "title": "Frenex Quarx",
            "img": "assets/images/connecticut/2.jpeg",
            "followers": 828,
            "following": 111
        },
        "state": "Connecticut"
    },
    {
        "img": "assets/images/connecticut/3.jpeg",
        "address": "222 Beard Street, Rosedale, Connecticut, 6309",
        "phone": 861251594026,
        "weather": {
            "title": "clouds",
            "icon": "assets/images/clouds.png",
            "water": 20,
            "temperature": 27
        },
        "social_info": {
            "title": "Pholio Atgen",
            "img": "assets/images/connecticut/4.jpeg",
            "followers": 624,
            "following": 117
        }, "state": "Connecticut"
    },
    {
        "img": "assets/images/missouri/3.jpeg",
        "address": "406 Navy Walk, Lithium, Missouri, 283",
        "phone": 367647161323,
        "weather": {
            "title": "rain",
            "icon": "assets/images/rain.png",
            "water": 19,
            "temperature": 32
        },
        "social_info": {
            "title": "Combogene Renovize",
            "img": "assets/images/missouri/4.jpeg",
            "followers": 923,
            "following": 112
        },
        "state": "Missouri"
    },
    {
        "img": "assets/images/arizona/1.jpeg",
        "address": "584 Meeker Avenue, Topaz, Arizona, 8157",
        "phone": 858563273364,
        "weather": {
            "title": "sun",
            "icon": "assets/images/sun.png",
            "water": 22,
            "temperature": 31
        },
        "social_info": {
            "title": "Zillactic Suremax",
            "img": "assets/images/arizona/2.jpeg",
            "followers": 803,
            "following": 73
        },
        "state": "Arizona"
    },
    {
        "img": "assets/images/missouri/5.jpeg",
        "address": "549 Royce Street, Dowling, Missouri, 4686",
        "phone": 326396775965,
        "weather": {
            "title": "rain",
            "icon": "assets/images/rain.png",
            "water": 21,
            "temperature": 30
        },
        "social_info": {
            "title": "Kneedles Solaren",
            "img": "assets/images/missouri/6.jpeg",
            "followers": 585,
            "following": 96
        },
        "state": "Missouri"
    },
    {
        "img": "assets/images/tennessee/3.jpeg",
        "address": "223 Cranberry Street, Wescosville, Tennessee, 3998",
        "phone": 494959591916,
        "weather": {
            "title": "clouds",
            "icon": "assets/images/clouds.png",
            "water": 23,
            "temperature": 28
        },
        "social_info": {
            "title": "Providco Tasmania",
            "img": "assets/images/tennessee/4.jpeg",
            "followers": 536,
            "following": 106
        },
        "state": "Tennessee"
    },
    {
        "img": "assets/images/connecticut/5.jpeg",
        "address": "692 Vandervoort Place, Unionville, Connecticut, 1692",
        "phone": 456539087569,
        "weather": {
            "title": "clouds",
            "icon": "assets/images/clouds.png",
            "water": 25,
            "temperature": 32
        },
        "social_info": {
            "title": "Uberlux Aquamate",
            "img": "assets/images/connecticut/6.jpeg",
            "followers": 825,
            "following": 54
        },
        "state": "Connecticut"
    },
    {
        "img": "assets/images/missouri/7.jpeg",
        "address": "855 Emerald Street, Callaghan, Missouri, 9610",
        "phone": 152480151355,
        "weather": {
            "title": "sun",
            "icon": "assets/images/sun.png",
            "water": 19,
            "temperature": 30
        },
        "social_info": {
            "title": "Fitcore Phuel",
            "img": "assets/images/missouri/8.jpeg",
            "followers": 582,
            "following": 86
        },
        "state": "Missouri"
    }
];

export const places$: Observable<IPlace[]> = of(places).pipe(delay(2000));