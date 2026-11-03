import type { ImageMetadata } from "astro";

import blossomWedding from "../assets/photos/blossom-wedding.jpg";

// TEMPORARY: CC0 stand-ins from Wikimedia Commons (Unsplash CC0 uploads) until Graham
// supplies his own work. Swap each import for his file and update the alt text.
import wedWoods from "../assets/photos/temp/wed-woods.jpg";
import wedFollow from "../assets/photos/temp/wed-follow.jpg";
import wedGrass from "../assets/photos/temp/wed-grass.jpg";
import wedRoad from "../assets/photos/temp/wed-road.jpg";
import wedBless from "../assets/photos/temp/wed-bless.jpg";
import wedChic from "../assets/photos/temp/wed-chic.jpg";
import wedShoes from "../assets/photos/temp/wed-shoes.jpg";
import wedVows from "../assets/photos/temp/wed-vows.jpg";
import newborn from "../assets/photos/temp/newborn.jpg";
import babySleep from "../assets/photos/temp/baby-sleep.jpg";
import babyNew from "../assets/photos/temp/baby-new.jpg";
import portraitWoman from "../assets/photos/temp/portrait-woman.jpg";
import portraitOutdoor from "../assets/photos/temp/portrait-outdoor.jpg";
import headshotMan from "../assets/photos/temp/headshot-man.jpg";
import camerasVintage from "../assets/photos/temp/cameras-vintage.jpg";
import woodsAutumn from "../assets/photos/temp/woods-autumn.jpg";

export interface Photo {
  src: ImageMetadata;
  alt: string;
  temp?: boolean;
}

const t = (src: ImageMetadata, alt: string): Photo => ({ src, alt, temp: true });

export const photos = {
  hero: {
    src: blossomWedding,
    alt: "A groom dips his bride for a kiss beneath cherry blossom, her veil streaming out behind her",
  },
  wedWoods: t(wedWoods, "Bride and groom walking hand in hand down a leafy woodland path"),
  wedFollow: t(wedFollow, "A bride glances back and smiles at her groom in a meadow"),
  wedGrass: t(wedGrass, "Groom's polished shoes beside the lace hem of a wedding dress on the grass"),
  wedRoad: t(wedRoad, "Newlyweds standing together on a quiet country road"),
  wedBless: t(wedBless, "A couple kneeling at the altar as the priest gives a blessing"),
  wedChic: t(wedChic, "Portrait of a bride in a lace high-neck dress against soft countryside"),
  wedShoes: t(wedShoes, "Close-up of a bride and groom's shoes side by side on a wooden floor"),
  wedVows: t(wedVows, "A ring being placed on a hand during the vows"),
  newborn: t(newborn, "A wide-eyed newborn wrapped in a soft knitted blanket"),
  babySleep: t(babySleep, "A baby asleep on white bedding in soft window light"),
  babyNew: t(babyNew, "Black-and-white close-up of a baby's hand holding a parent's shirt"),
  portraitWoman: t(portraitWoman, "Portrait of a young woman with long hair against green foliage"),
  portraitOutdoor: t(portraitOutdoor, "A smiling woman with curly hair in a denim jacket, photographed outdoors"),
  headshotMan: t(headshotMan, "Studio headshot of a smiling grey-haired man in glasses"),
  camerasVintage: t(camerasVintage, "Vintage film cameras on a wooden shelf"),
  woodsAutumn: t(woodsAutumn, "A woman in a yellow coat looking up through golden autumn woodland"),
} satisfies Record<string, Photo>;

export const weddingGallery: Photo[] = [
  photos.hero,
  photos.wedChic,
  photos.wedWoods,
  photos.wedVows,
  photos.wedBless,
  photos.wedFollow,
  photos.wedShoes,
  photos.wedRoad,
  photos.wedGrass,
];

export const portraitGallery: Photo[] = [
  photos.newborn,
  photos.portraitWoman,
  photos.babySleep,
  photos.portraitOutdoor,
  photos.babyNew,
  photos.headshotMan,
];
