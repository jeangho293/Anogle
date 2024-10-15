const jwtSecret = process.env.JWT_SECRET;

const kakaoRestApiKey = process.env.KAKAO_REST_API_KEY;
const kakaoRedirectURI = process.env.KAKAO_REDIRECT_URI;

if (!jwtSecret) {
  throw new Error('There is no JWT_SECRET env.');
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
  kakao: {
    restApiKey: kakaoRestApiKey,
    redirectURI: kakaoRedirectURI,
  },
};
