import { decodeJwtToken, generateJwtToken } from './jwt.utils';

const env = process.env;

describe('Testing Jwt token generation', () => {
  beforeAll(() => {
    process.env = {
      ...env,
      JWT_EXPIRES_IN: '7d',
      JWT_SECRET: 'Test_Secret',
    };
  });

  afterAll(() => {
    process.env = env;
  });
  it('Should generate a jwtToken and then decode', () => {
    const user = {
      name: 'Test USer',
      email: 'test@email.com',
    };
    const token = generateJwtToken(user);
    const decodedToken = decodeJwtToken(token);
    expect(decodedToken.name).toEqual(user.name);
    expect(decodedToken.email).toEqual(user.email);
  });
});
