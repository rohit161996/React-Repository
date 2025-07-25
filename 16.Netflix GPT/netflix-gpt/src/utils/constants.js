export const LOGO = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const BACKGROUND_IMG = "https://assets.nflxext.com/ffe/siteui/vlv3/9a924b36-8e85-4f2a-baac-ce2872ee8163/web/IN-en-20250714-TRIFECTA-perspective_dfbf09de-9182-41e1-a9c6-cd7b1a6d84d6_small.jpg";

export const { PHOTO_URL } = "https://avatars.githubusercontent.com/u/171681041?v=4";

export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + import.meta.env.VITE_TMDB_KEY,
    }
};

export const IMAGE_URL = "https://image.tmdb.org/t/p/w780/";

export const SUPPORTED_LANGUAGES = [
    { identifier: "en-US", name: "English" },
    { identifier: "hi-IN", name: "Hindi" },
    { identifier: "fr-FR", name: "French" }
]

export const API_KEY = import.meta.env.VITE_OPENAI_KEY;