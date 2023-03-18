import { AuthService } from './auth.service';
import { UserEntiy } from '../../entities/user.entity';
import { EncryptionService } from './encrption.service';
import { UserRepository } from './dto/repository/user.repository';
import { RoleEntity } from '../../entities/role.entity';
import { RoleRepository } from './dto/repository/role.repository';
import { MockUserRepository } from '../../test-utils/mock/repositories/user.repository.mock';

const env = process.env;
describe('Testing Auth Service', () => {
  beforeAll(() => {
    process.env = { ...env, JWT_SECRET: 'SomeSecret', JWT_EXPIRES_IN: '7d' };
  });

  afterAll(() => {
    process.env = env;
  });

  describe('Testing Login Method', () => {
    it('should login the user', async () => {
      const authService = await createAuthService();
      const response = await authService.login({
        email: 'sample@test.com',
        password: '1234',
      });
      expect(response).toBeDefined();
      expect(response.status).toEqual(200);
      expect(response.success).toBeTruthy();
      expect(response.token).toBeDefined();
    });

    it('should throw an error if the user does not exist', async () => {
      const authService = await createAuthService();
      try {
        const response = authService.login({
          email: 'sample!@test.com',
          password: '1234',
        });
        expect(await response).toThrow();
      } catch (error) {
        expect(error).toBeDefined();
        expect(error.response).toEqual('User Authentication Failed');
        expect(error.status).toEqual(401);
      }
    });

    it('should throw an error if the password is incorrect', async () => {
      const authService = await createAuthService();
      try {
        const response = authService.login({
          email: 'sample@test.com',
          password: 'abcd',
        });
        expect(await response).toThrow();
      } catch (error) {
        expect(error).toBeDefined();
        expect(error.response).toEqual('Inncorrect Password');
        expect(error.status).toEqual(403);
      }
    });
  });

  describe('Testing Register Method', () => {
    it('should register a new user', async () => {
      const authService = await createAuthService();
      const response = await authService.register({
        email: 'newuser@test.com',
        password: 'abcd',
        roles: ['regular'],
      });
      expect(response).toBeDefined();
      expect(response.email).toEqual('newuser@test.com');
      expect(response.passowrd).not.toEqual('abcd');
      expect(response.roles).toBeDefined();
      expect(response.roles.length).toEqual(1);
      expect(response.roles[0]).toEqual('regular');
    });
  });
});

async function createAuthService() {
  const encryptionService = new EncryptionService();
  const role = {
    id: 1,
    name: 'admin',
  } as RoleEntity;

  const mockUser = {
    id: 1,
    email: 'sample@test.com',
    passowrd: await encryptionService.hashPassword('1234'),
    roles: [role],
  } as UserEntiy;

  const userRepository = new MockUserRepository([mockUser]);
  return new AuthService(
    userRepository as unknown as UserRepository,
    {
      createQueryBuilder: (_entity: string) => ({
        where: (_clause: string, option: { names: string[] }) => {
          const roles = ['admin', 'regular'];
          const result = roles.filter((role) => option.names.includes(role));
          return {
            getMany: () => result,
          };
        },
      }),
    } as unknown as RoleRepository,
    encryptionService,
  );
}
