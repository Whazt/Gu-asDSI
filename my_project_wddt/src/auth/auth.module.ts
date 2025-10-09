import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports:[
    PrismaModule,
    JwtModule.register({
      secret: process.env.SECRET_JWT,
      signOptions: {expiresIn: '1h'},
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
