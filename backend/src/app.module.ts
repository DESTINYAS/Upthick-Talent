import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { JobsModule } from './jobs/jobs.module';
import { ProgramsModule } from './programs/programs.module';
import { TagsModule } from './tags/tags.module';
import { ContactusModule } from './contactus/contactus.module';
import { ApplicationsModule } from './applications/applications.module';
import { ConfigModule } from '@nestjs/config';
import * as winston from 'winston';
import {
  utilities as nestWinstonModuleUtilities,
  WinstonModule,
} from 'nest-winston';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    PostsModule,
    JobsModule,
    ProgramsModule,
    TagsModule,
    ContactusModule,
    ApplicationsModule,
    ConfigModule.forRoot({ isGlobal: true }),
    WinstonModule.forRoot({
      transports: [
        ...(process.env.NODE_ENV !== 'production'
          ? [
              new winston.transports.Console({
                format: winston.format.combine(
                  winston.format.timestamp(),
                  winston.format.ms(),
                  nestWinstonModuleUtilities.format.nestLike('UPTICK', {
                    colors: true,
                    prettyPrint: true,
                  }),
                ),
              }),
            ]
          : []), // disable console when on production
        ,
        new winston.transports.File({
          filename: 'logs/error.log',
          level: 'error',
        }),
        new winston.transports.File({ filename: 'logs/combined.log' }),
      ],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
