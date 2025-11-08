import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PersonalDetailsModule } from './personal-details/personal-details.module';
import { EmploymentDetailsModule } from './employment-details/employment-details.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { PersonalDetailsEntity } from './entities/personal-details.entity';
import { EmploymentDetailsEntity } from './entities/employment-details.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [UserEntity, PersonalDetailsEntity, EmploymentDetailsEntity],
      // synchronize: Boolean(process.env.DB_SYNC),
    }),
    UserModule,
    PersonalDetailsModule,
    EmploymentDetailsModule,
  ],
})
export class AppModule {}
