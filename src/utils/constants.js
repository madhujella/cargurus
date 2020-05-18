import { ROUTES } from './clientURI';

const assetsURI = '/assets'

export const ASSETS_PATHS = {
    logo: `${assetsURI}/logo.svg`,
    carIcon: `${assetsURI}/car.svg`,
    researchIcon: `${assetsURI}/research.svg`,
    financeIcon: `${assetsURI}/finance.svg`,
    sellIcon: `${assetsURI}/sell.svg`,
    notifyIcon: `${assetsURI}/bell.svg`,
    userIcon: `${assetsURI}/user.svg`,
    caretDownIcon: `${assetsURI}/caret-down.svg`
}

export const DEALTYPES = ['used', 'new', 'certified pre-owned', 'sale by owner']

export const POP_BRANDS = [
    { name: 'Acura', logo: './assets/brands/acura.svg' },
    { name: 'Alfa Romeo', logo: './assets/brands/astonmartin.svg' },
    { name: 'Audi', logo: './assets/brands/bmw.svg' },
    { name: 'BMW', logo: './assets/brands/bmw.svg' },
    { name: 'Buick', logo: './assets/brands/bmw.svg' },
    { name: 'Cadillac', logo: './assets/brands/bmw.svg' },
    { name: 'Chevrolet', logo: './assets/brands/bmw.svg' },
    { name: 'Chrysler', logo: './assets/brands/bmw.svg' },
    { name: 'Dodge', logo: './assets/brands/bmw.svg' },
    { name: 'FIAT', logo: './assets/brands/bmw.svg' },
    { name: 'Ford', logo: './assets/brands/bmw.svg' },
    { name: 'Genesis', logo: './assets/brands/bmw.svg' },
    { name: 'GMC', logo: './assets/brands/bmw.svg' },
    { name: 'Hyundai', logo: './assets/brands/bmw.svg' },
    { name: 'INFINITI', logo: './assets/brands/bmw.svg' },
    { name: 'Jaguar', logo: './assets/brands/bmw.svg' },
    { name: 'Jeep', logo: './assets/brands/bmw.svg' },
    { name: 'Kia', logo: './assets/brands/bmw.svg' },
    { name: 'Land Rover', logo: './assets/brands/bmw.svg' },
    { name: 'Lexus', logo: './assets/brands/bmw.svg' },
    { name: 'Lincoln', logo: './assets/brands/bmw.svg' },
    { name: 'Maserati', logo: './assets/brands/bmw.svg' },
    { name: 'Mazda', logo: './assets/brands/bmw.svg' },
    { name: 'Mercedes Benz', logo: './assets/brands/bmw.svg' },
    { name: 'Mitsubishi', logo: './assets/brands/bmw.svg' },
    { name: 'Pontiac', logo: './assets/brands/bmw.svg' },
    { name: 'Porsche', logo: './assets/brands/bmw.svg' },
    { name: 'RAM', logo: './assets/brands/bmw.svg' },
    { name: 'Scion', logo: './assets/brands/bmw.svg' },
    { name: 'Subaru', logo: './assets/brands/bmw.svg' },
    { name: 'Toyota', logo: './assets/brands/bmw.svg' },
    { name: 'Volkswagen', logo: './assets/brands/bmw.svg' },
    { name: 'Volvo', logo: './assets/brands/bmw.svg' },
]

export const LANGUAGES = [
    { label: 'United States (EN)', value: 'us-en' },
    { label: 'Estados Unidos (ES)', value: 'es' },
    { label: 'Canada (EN)', value: 'ca-en' },
    { label: 'Canada (FR)', value: 'ca-fr' },
    { label: 'United Kindom', value: 'uk-en' },
]


export const USER_SETTINGS = [
    { label: 'Saved searches', path: ROUTES },
    { label: 'Saved Listings', path: ROUTES },
    { label: 'Messages', path: ROUTES },
    { label: 'Financing', path: ROUTES },
    { label: 'Sign out', path: ROUTES },
]