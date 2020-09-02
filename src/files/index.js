import media1 from "./media1.jpg";
import media2 from "./media2.jpg";
import media3 from "./media3.jpg";
import media4 from "./media4.jpg";
import media5 from "./media5.jpg";
import media6 from "./media6.jpg";
import media7 from "./media7.jpg";

export const media = [media1, media2, media3, media4, media5, media6, media7];
export const mediaByIndex = (index) => media[index % media.length];
