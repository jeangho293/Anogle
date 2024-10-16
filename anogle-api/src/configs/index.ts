const jwtSecret = process.env.JWT_SECRET;

// NOTE: Google
const googleRestApiKey = process.env.GOOGLE_REST_API_KEY;
const googleRedirectURI = process.env.GOOGLE_REDIRECT_URI;
const googleSecretKey = process.env.GOOGLE_SECRET_KEY;

// NOTE: Kakao
const kakaoRestApiKey = process.env.KAKAO_REST_API_KEY;
const kakaoRedirectURI = process.env.KAKAO_REDIRECT_URI;

if (!jwtSecret) {
  throw new Error('There is no JWT_SECRET env.');
}

if (!googleRestApiKey) {
  throw new Error('There is no google rest api key env.');
}

if (!googleRedirectURI) {
  throw new Error('There is no google redirect uri env.');
}

if (!googleSecretKey) {
  throw new Error('There is no google secret key env.');
}

if (!kakaoRestApiKey) {
  throw new Error('There is no kakao rest api key env.');
}

if (!kakaoRedirectURI) {
  throw new Error('There is no kakao redirect uri env.');
}

export const docs = {
  server: {
    port: process.env.PORT || 3000,
  },
  mysql: {
    username: 'root',
    password: '1234',
    database: 'anogle',
  },
  jwt: {
    secret: jwtSecret,
  },
  google: {
    restApiKey: googleRestApiKey,
    redirectURI: googleRedirectURI,
    secret: googleSecretKey,
  },
  kakao: {
    restApiKey: kakaoRestApiKey,
    redirectURI: kakaoRedirectURI,
  },
};
