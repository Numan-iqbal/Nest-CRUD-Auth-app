import { ApiProperty } from '@nestjs/swagger';

// Login DTO
export class SwaggerLoginDto {
  @ApiProperty({
    example: 200,
  })
  status: number;

  @ApiProperty({
    example: true,
  })
  success: boolean;

  @ApiProperty({
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTksImVtYWlsIjoidGVzQGVzdC5jb20iLCJwYXNzb3dyZCI6IiQyYiQxMCRyVzVod2dDZ1gwR0pITWhiWE9DZkRlNTloVkJKRzhHd0hDU1Nia1N5WVFzdFJyQmd1S2UyRyIsImNyZWF0ZWRBdCI6IjIwMjMtMDMtMTZUMTE6MTM6NTIuNDc2WiIsInVwZGF0ZWRBdCI6IjIwMjMtMDMtMTZUMTE6MTM6NTIuNDc2WiIsInJvbGVzIjpbeyJpZCI6MSwibmFtZSI6ImFkbWluIiwiY3JlYXRlZEF0IjoiMjAyMy0wMy0xMFQyMDoyMzoxNC4zMTNaIiwidXBkYXRlZEF0IjoiMjAyMy0wMy0xMFQyMDoyMzoxNC4zMTNaIn1dLCJpYXQiOjE2Nzg5NzA3MTIsImV4cCI6MTY3OTU',
  })
  token: string;
}
